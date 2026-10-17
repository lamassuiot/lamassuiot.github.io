/** Trust hierarchy scene for "Confianza, en cualquier lugar".
 * The root signs each CA, each CA issues its devices, and then certificates live:
 * they drain towards expiry, CAs renew them, and now and then one is revoked and
 * re-enrolled through the full chain. Illustrative, not telemetry. */
type Kind = 'issue' | 'renew' | 'revoke';
type State = 'ok' | 'renewing' | 'revoking' | 'revoked';
type Device = {
    el: HTMLElement;
    b: number;
    cn: string;
    life: number;
    target: number;
    rate: number;
    painted: number;
    refill: boolean;
    drain: boolean;
    state: State;
    token: number;
};
type Flight = {
    g: SVGGElement;
    tail: SVGPathElement;
    core: SVGPathElement;
    halo: SVGCircleElement;
    head: SVGCircleElement;
    len: number;
    wire?: SVGPathElement;
    start: number;
    duration: number;
    onArrive: () => void;
    arrived: boolean;
};

const fig = document.querySelector<HTMLElement>('[data-trust-hierarchy]');
if (fig) init(fig);

function init(fig: HTMLElement) {
    const SVG_NS = 'http://www.w3.org/2000/svg';
    const html = document.documentElement;
    const wires = fig.querySelector<SVGSVGElement>('.th-wires')!;
    const [lines, dotLayer, flows] = Array.from(wires.children) as SVGGElement[];
    const root = fig.querySelector<HTMLElement>('.th-root')!;
    const cas = Array.from(fig.querySelectorAll<HTMLElement & { token?: number }>('.th-ca'));
    const captions = Array.from(fig.querySelectorAll<HTMLElement>('.th-caption'));
    const tip = fig.querySelector<HTMLElement>('.th-tip')!;
    const feed = fig.querySelector<HTMLElement>('.th-feed')!;
    const lifetime = () => 1 / (18000 + Math.random() * 16000); // ms for a full certificate to expire
    const devices: Device[] = Array.from(fig.querySelectorAll<HTMLElement>('.th-device')).map((el) => ({
        el, b: Number(el.dataset.branch), cn: el.dataset.cn || '', life: 1, target: 1, rate: lifetime(),
        painted: -1, refill: false, drain: false, state: 'ok', token: 0,
    }));
    // Copy lives in [data-i18n] nodes so the language switcher keeps it current.
    const text = (name: string) => fig.querySelector(`[data-th-string="${name}"]`)?.textContent || '';
    const title = (el: Element) => el.querySelector('.th-text strong')?.textContent || '';

    // ── Geometry ────────────────────────────────────────────────────
    // offset* ignores the intro transforms, so wires land on the final layout.
    const box = (el: HTMLElement) => {
        let x = 0, y = 0;
        for (let n: HTMLElement | null = el; n && n !== fig; n = n.offsetParent as HTMLElement | null) { x += n.offsetLeft; y += n.offsetTop; }
        return { x, y, w: el.offsetWidth, h: el.offsetHeight, cx: x + el.offsetWidth / 2 };
    };
    const elbow = (x0: number, y0: number, x1: number, y1: number) => {
        const ym = (y0 + y1) / 2;
        if (Math.abs(x1 - x0) < 1) return `M${x0} ${y0}V${y1}`;
        const s = Math.sign(x1 - x0), r = Math.min(10, Math.abs(x1 - x0) / 2, ym - y0);
        return `M${x0} ${y0}V${ym - r}Q${x0} ${ym} ${x0 + s * r} ${ym}H${x1 - s * r}Q${x1} ${ym} ${x1} ${ym + r}V${y1}`;
    };
    function make<K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number>, parent: Element) {
        const el = document.createElementNS(SVG_NS, tag);
        for (const k in attrs) el.setAttribute(k, String(attrs[k]));
        parent.appendChild(el);
        return el;
    }

    const routes = { root: [] as string[], dev: new Map<Device, string>() };
    const wireEls = { root: [] as SVGPathElement[], dev: new Map<Device, SVGPathElement>() };
    const dots = new Map<unknown, SVGCircleElement>();
    function layout() {
        const w = fig.clientWidth, h = fig.clientHeight;
        wires.setAttribute('viewBox', `0 0 ${w} ${h}`);
        wires.setAttribute('width', String(w));
        wires.setAttribute('height', String(h));
        lines.replaceChildren();
        dotLayer.replaceChildren();
        routes.dev.clear();
        wireEls.dev.clear();
        dots.clear();
        clearFocus();

        const wire = (d: string) => make('path', { class: 'th-wire', d, pathLength: 1 }, lines);
        const dot = (key: unknown, x: number, y: number) => dots.set(key, make('circle', { class: 'th-dot', cx: x, cy: y, r: 2.75 }, dotLayer));
        const r = box(root);
        dot('root', r.cx, r.y + r.h);
        routes.root = cas.map((ca, i) => {
            const c = box(ca);
            dot(`ca${i}`, c.cx, c.y);
            dot(`ca${i}-out`, c.cx, c.y + c.h);
            return elbow(r.cx, r.y + r.h, c.cx, c.y);
        });
        wireEls.root = routes.root.map(wire);
        for (const dev of devices) {
            if (dev.el.offsetParent === null) continue; // narrow screens hide half the devices
            const c = box(cas[dev.b]), t = box(dev.el);
            const d = elbow(c.cx, c.y + c.h, t.cx, t.y);
            routes.dev.set(dev, d);
            wireEls.dev.set(dev, wire(d));
            dot(dev, t.cx, t.y);
        }

        // Flights in progress used the old geometry: land them now.
        const pending = flights.splice(0);
        pending.forEach((f) => f.g.remove());
        pending.forEach((f) => { if (!f.arrived) f.onArrive(); });
    }

    // ── Clock: one rAF loop drives flights, timers and certificate lifetimes. ──
    let clock = 0, last = 0, raf = 0, nextRevoke = 0, issued = 0;
    let phase: 'idle' | 'intro' | 'live' | 'static' = 'idle';
    const timers: { at: number; fn: () => void }[] = [];
    const flights: Flight[] = [];
    const after = (ms: number, fn: () => void) => { timers.push({ at: clock + ms, fn }); };
    const ease = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const retrigger = (el: Element, cls: string) => { el.classList.remove(cls); void (el as HTMLElement).offsetWidth; el.classList.add(cls); };
    const reveal = (...els: (Element | undefined)[]) => els.forEach((el) => el?.classList.add('is-on'));

    function fly(d: string | undefined, kind: Kind, duration: number, onArrive: () => void, wire?: SVGPathElement) {
        if (!d) return onArrive(); // target hidden since the event started
        const g = make('g', { class: `th-flow is-${kind}` }, flows);
        const tail = make('path', { class: 'th-pulse th-pulse-tail', d }, g);
        const core = make('path', { class: 'th-pulse th-pulse-core', d }, g);
        const halo = make('circle', { class: 'th-halo', r: 9 }, g);
        const head = make('circle', { r: 3.5 }, g);
        const len = core.getTotalLength();
        tail.style.strokeDasharray = `56 ${len + 120}`;
        core.style.strokeDasharray = `16 ${len + 120}`;
        flights.push({ g, tail, core, halo, head, len, wire, start: clock, duration, onArrive, arrived: false });
    }

    function step(f: Flight) {
        const p = Math.min(1, (clock - f.start) / f.duration);
        const pos = ease(p) * (f.len + 56); // travel past the end so the tail drains into the target
        const at = f.core.getPointAtLength(Math.min(pos, f.len));
        f.tail.style.strokeDashoffset = String(56 - pos);
        f.core.style.strokeDashoffset = String(16 - pos);
        if (f.wire) f.wire.style.strokeDashoffset = String(1 - Math.min(pos, f.len) / f.len); // the signature draws the wire
        const shown = pos <= f.len ? '' : '0';
        for (const c of [f.head, f.halo]) { c.setAttribute('cx', String(at.x)); c.setAttribute('cy', String(at.y)); c.style.opacity = shown; }
        if (!f.arrived && pos >= f.len) { f.arrived = true; f.onArrive(); }
        return p < 1;
    }

    // ── Lifecycle events ────────────────────────────────────────────
    function flash(dev: Device, kind: Kind) {
        dev.el.classList.toggle('is-renew', kind === 'renew');
        dev.el.classList.add('is-hit');
        const token = ++dev.token;
        after(1600, () => { if (dev.token === token) dev.el.classList.remove('is-hit'); });
    }

    function pass(i: number, kind: Kind) {
        const ca = cas[i];
        ca.classList.toggle('is-renew', kind === 'renew');
        ca.classList.toggle('is-revoke', kind === 'revoke');
        ca.classList.add('is-pass');
        const token = ca.token = (ca.token || 0) + 1;
        after(700, () => { if (ca.token === token) ca.classList.remove('is-pass'); });
    }

    function log(kind: Kind, dev: Device) {
        const line = document.createElement('div');
        line.className = `th-feed-line is-${kind}`;
        const time = document.createElement('time');
        time.textContent = new Date().toLocaleTimeString(html.lang || 'es', { hour12: false });
        const label = document.createElement('span');
        label.className = 'th-feed-kind';
        label.textContent = text(`event-${kind}`);
        const cn = document.createElement('b');
        cn.textContent = `CN=${dev.cn}`;
        const issuer = document.createElement('span');
        issuer.className = 'th-feed-issuer';
        issuer.textContent = `· ${title(cas[dev.b])}`;
        line.append(time, label, cn, issuer);
        for (const old of Array.from(feed.children)) {
            if (old.classList.contains('is-out')) continue;
            old.classList.add('is-out');
            after(350, () => old.remove());
        }
        feed.append(line);
    }

    // Issuing CAs renew on their own when a certificate nears expiry.
    function renew(dev: Device) {
        dev.state = 'renewing';
        pass(dev.b, 'renew');
        fly(routes.dev.get(dev), 'renew', 800, () => {
            dev.el.classList.remove('is-expiring');
            flash(dev, 'renew');
            Object.assign(dev, { state: 'ok', target: 1, refill: true, rate: lifetime() });
            log('renew', dev);
        });
    }

    // A CA revokes a certificate; the device then re-enrols through the full chain.
    function revoke(dev: Device) {
        dev.state = 'revoking';
        pass(dev.b, 'revoke');
        fly(routes.dev.get(dev), 'revoke', 750, () => {
            dev.token++;
            dev.state = 'revoked';
            dev.el.classList.remove('is-expiring', 'is-hit', 'is-renew');
            dev.el.classList.add('is-revoked');
            dev.drain = true;
            log('revoke', dev);
            after(1900, () => enrol(dev));
        });
    }

    function enrol(dev: Device) {
        const done = () => {
            dev.el.classList.remove('is-revoked');
            flash(dev, 'issue');
            Object.assign(dev, { state: 'ok', target: 1, refill: true, drain: false, rate: lifetime() });
            log('issue', dev);
        };
        if (!routes.dev.has(dev)) return done();
        retrigger(root, 'is-emit');
        fly(routes.root[dev.b], 'issue', 900, () => {
            pass(dev.b, 'issue');
            fly(routes.dev.get(dev), 'issue', 750, done);
        });
    }

    function simulate(dt: number) {
        for (const dev of devices) {
            if (!routes.dev.has(dev)) continue;
            if (dev.refill) {
                dev.life = Math.min(dev.target, dev.life + dt / 650);
                if (dev.life >= dev.target) dev.refill = false;
            } else if (dev.drain) {
                dev.life = Math.max(0, dev.life - dt / 450);
                if (!dev.life) dev.drain = false;
            } else if (phase === 'live' && dev.state === 'ok') {
                dev.life = Math.max(0, dev.life - dt * dev.rate);
                dev.el.classList.toggle('is-expiring', dev.life < .25);
                if (dev.life < .1) renew(dev);
            }
            paint(dev);
        }
        if (phase === 'live' && clock >= nextRevoke) {
            const pool = devices.filter((d) => d.state === 'ok' && d.life > .4 && !d.refill && routes.dev.has(d));
            if (pool.length) revoke(pool[Math.floor(Math.random() * pool.length)]);
            nextRevoke = clock + 9000 + Math.random() * 6000;
        }
    }

    function paint(dev: Device) {
        const v = Math.round(dev.life * 400) / 400;
        if (v !== dev.painted) { dev.el.style.setProperty('--life', String(v)); dev.painted = v; }
        if (tipDev === dev) fillTip(dev);
    }

    function frame(now: number) {
        const dt = Math.min(50, now - last);
        last = now;
        clock += dt;
        const due = timers.filter((t) => t.at <= clock);
        for (const t of due) timers.splice(timers.indexOf(t), 1);
        due.forEach((t) => t.fn());
        for (let i = flights.length - 1; i >= 0; i--) if (!step(flights[i])) { flights[i].g.remove(); flights.splice(i, 1); }
        simulate(dt);
        raf = requestAnimationFrame(frame);
    }

    // ── Intro: the root signs each CA, then each CA issues its devices. ──
    function reset() {
        flights.splice(0).forEach((f) => f.g.remove());
        timers.length = 0;
        feed.replaceChildren();
        const states = ['is-on', 'is-pass', 'is-hit', 'is-revoked', 'is-expiring'];
        fig.querySelectorAll(states.map((s) => `.${s}`).join()).forEach((el) => el.classList.remove(...states));
        devices.forEach((d) => Object.assign(d, { state: 'ok', life: 0, target: 0, refill: false, drain: false, rate: lifetime() }));
    }

    function intro() {
        reset();
        phase = 'intro';
        issued = 0;
        fig.classList.add('is-intro');
        layout();
        devices.forEach(paint);
        reveal(root);
        after(250, () => reveal(dots.get('root')));
        cas.forEach((ca, i) => after(350 + i * 140, () => {
            retrigger(root, 'is-emit');
            fly(routes.root[i], 'issue', 900, () => {
                reveal(ca, dots.get(`ca${i}`), dots.get(`ca${i}-out`));
                pass(i, 'issue');
                after(150, () => issueBranch(i));
            }, wireEls.root[i]);
        }));
    }

    function issueBranch(i: number) {
        const list = devices.filter((d) => d.b === i && routes.dev.has(d));
        list.forEach((dev, n) => after(n * 110, () => fly(routes.dev.get(dev), 'issue', 650, () => {
            reveal(dev.el, dots.get(dev));
            flash(dev, 'issue');
            // Stagger initial validity so renewals spread out over time.
            Object.assign(dev, { target: .35 + Math.random() * .65, refill: true });
            if (n === list.length - 1) reveal(captions[i]);
            if (++issued === routes.dev.size) after(900, finishIntro);
        }, wireEls.dev.get(dev))));
    }

    function finishIntro() {
        fig.classList.remove('is-intro');
        phase = 'live';
        nextRevoke = clock + 6500;
        layout(); // pick up late font metrics
    }

    function showStatic() {
        reset();
        fig.classList.remove('is-intro');
        phase = 'static';
        layout();
        devices.forEach((d) => { d.life = .45 + Math.random() * .55; paint(d); });
    }

    // ── Hover: trace the chain of trust and show the certificate. ────
    let tipDev: Device | null = null, tipKey = '';
    function focusChain(b: number, dev?: Device) {
        fig.classList.add('has-focus');
        root.classList.add('is-chain');
        wireEls.root.forEach((w, i) => w.classList.toggle('is-chain', i === b));
        wireEls.dev.forEach((w, d) => w.classList.toggle('is-chain', d.b === b && (!dev || d === dev)));
        cas.forEach((c, i) => c.classList.toggle('is-chain', i === b));
        devices.forEach((d) => d.el.classList.toggle('is-chain', d.b === b && (!dev || d === dev)));
    }

    function clearFocus() {
        fig.classList.remove('has-focus');
        fig.querySelectorAll('.is-chain').forEach((el) => el.classList.remove('is-chain'));
        tip.classList.remove('is-on');
        tipDev = null;
    }

    function fillTip(dev: Device) {
        const state = dev.state === 'revoked' ? 'revoked' : dev.state === 'renewing' ? 'renewing' : dev.life < .25 ? 'expiring' : 'ok';
        const days = state === 'revoked' ? '—' : `${Math.max(1, Math.round(dev.life * 365))} ${text('cert-days')}`;
        const key = `${state}|${days}`;
        if (tipKey === key) return;
        tipKey = key;
        tip.style.setProperty('--k', `var(--th-${{ ok: 'issue', expiring: 'warn', renewing: 'renew', revoked: 'revoke' }[state]})`);
        tip.style.setProperty('--life', String(state === 'revoked' ? 0 : dev.life));
        tip.querySelector('.th-tip-state')!.textContent = text(`state-${state}`);
        tip.querySelector('dd:last-of-type')!.textContent = days;
    }

    function showTip(dev: Device) {
        const rows: [string, string][] = [
            [text('cert-issuer'), title(cas[dev.b])],
            [text('cert-root'), title(root)],
            [text('cert-key'), cas[dev.b].dataset.key || ''],
            [text('cert-expires'), ''],
        ];
        tip.querySelector('strong')!.textContent = `CN=${dev.cn}`;
        tip.querySelector('dl')!.replaceChildren(...rows.flatMap(([term, value]) => {
            const dt = document.createElement('dt'), dd = document.createElement('dd');
            dt.textContent = term;
            dd.textContent = value;
            return [dt, dd];
        }));
        tipDev = dev;
        tipKey = '';
        fillTip(dev);
        const t = box(dev.el), half = tip.offsetWidth / 2;
        tip.style.left = `${Math.min(Math.max(t.cx, half + 4), fig.clientWidth - half - 4)}px`;
        tip.style.top = `${t.y - 12}px`;
        tip.classList.add('is-on');
    }

    const hoverable = (e: PointerEvent) => e.pointerType === 'mouse' && phase !== 'intro';
    devices.forEach((dev) => {
        dev.el.addEventListener('pointerenter', (e) => { if (hoverable(e)) { focusChain(dev.b, dev); showTip(dev); } });
        dev.el.addEventListener('pointerleave', clearFocus);
    });
    cas.forEach((ca, i) => {
        ca.addEventListener('pointerenter', (e) => { if (hoverable(e)) focusChain(i); });
        ca.addEventListener('pointerleave', clearFocus);
    });

    // ── Run state: follows the landing's pause button (html.lp-motion-paused). ──
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false, started = false;
    const paused = () => reduced.matches || html.classList.contains('lp-motion-paused');

    function sync() {
        if (started && reduced.matches && phase !== 'static') showStatic();
        if (phase === 'static' && !paused()) { phase = 'live'; nextRevoke = clock + 6500; } // resume straight into the loop
        const run = inView && (phase === 'intro' || phase === 'live') && !paused() && !document.hidden;
        fig.classList.toggle('is-paused', !run);
        if (run && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
        if (!run && raf) { cancelAnimationFrame(raf); raf = 0; }
    }

    layout();
    fig.classList.add('is-intro');
    new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !started) {
            started = true;
            if (paused()) showStatic(); else intro();
        }
        sync();
    }, { threshold: .35 }).observe(fig);
    new ResizeObserver(() => { if (phase === 'live' || phase === 'static') layout(); }).observe(fig);
    document.fonts?.ready.then(() => { if (phase === 'live' || phase === 'static') layout(); });
    new MutationObserver(sync).observe(html, { attributes: true, attributeFilter: ['class'] });
    document.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', sync);
}
