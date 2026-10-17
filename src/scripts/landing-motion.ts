/** Canvas scenes are illustrative, not telemetry. Each scene has a static fallback.
 * One visible-only, capped animation loop serves the entire landing. */
type Point = {
    x: number;
    y: number;
};
type Scene = {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    width: number;
    height: number;
    visible: boolean;
};
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
let userPaused = false;
let colors = readColors();
let time = 0;
let previous = 0;
let frame = 0;
let request = 0;
function readColors() {
    const style = getComputedStyle(root);
    const token = (name: string) => style.getPropertyValue(name).trim();
    return { accent: token('--lp-accent'), cyan: token('--lp-cyan'), ink: token('--lp-title'), text: token('--lp-text'), border: token('--lp-border'), bg: token('--lp-bg'), onAccent: token('--lp-accent-text'), pale: token('--lp-surface-2'), navy: token('--lp-band-bg'), quantum: token('--lp-band-cyan') };
}
const scenes: Scene[] = Array.from(document.querySelectorAll<HTMLCanvasElement>('[data-animation]')).flatMap((canvas) => {
    const context = canvas.getContext('2d');
    return context ? [{ canvas, context, width: 0, height: 0, visible: false }] : [];
});
function point(x: number, y: number): Point { return { x, y }; }
function mix(a: Point, b: Point, t: number): Point { return point(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t); }
function quadratic(a: Point, control: Point, b: Point, t: number): Point {
    const s = 1 - t;
    return point(s * s * a.x + 2 * s * t * control.x + t * t * b.x, s * s * a.y + 2 * s * t * control.y + t * t * b.y);
}
function line(ctx: CanvasRenderingContext2D, a: Point, b: Point, color: string, opacity = 1, width = 1) {
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
    ctx.globalAlpha = 1;
}
function dot(ctx: CanvasRenderingContext2D, p: Point, radius: number, color: string, opacity = 1) {
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
}
function ring(ctx: CanvasRenderingContext2D, p: Point, radius: number, color: string, opacity = 1, width = 1) {
    ctx.globalAlpha = opacity;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
}
function text(ctx: CanvasRenderingContext2D, value: string, p: Point, size = 14, color = colors.ink) {
    ctx.fillStyle = color;
    ctx.font = `500 ${size}px Manrope, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(value, p.x, p.y);
}
function route(ctx: CanvasRenderingContext2D, a: Point, control: Point, b: Point, phase: number, color = colors.accent, strength = .2) {
    ctx.strokeStyle = color;
    ctx.lineWidth = .8;
    ctx.globalAlpha = strength;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.quadraticCurveTo(control.x, control.y, b.x, b.y);
    ctx.stroke();
    ctx.globalAlpha = 1;
    for (let n = 0; n < 12; n++) {
        const progress = phase - n * .004;
        if (progress >= 0 && progress <= 1)
            dot(ctx, quadratic(a, control, b, progress), n === 0 ? 2.2 : 1.3, color, (1 - n / 12) * .9);
    }
}
function network(scene: Scene, t: number) {
    const { context: ctx, canvas } = scene;
    const image = canvas.parentElement?.querySelector('img');
    if (!(image instanceof HTMLImageElement))
        return;
    const imageBox = image.getBoundingClientRect();
    const box = canvas.getBoundingClientRect();
    const scale = Math.min(imageBox.width / 1672, imageBox.height / 941);
    const width = 1672 * scale, height = 941 * scale;
    const left = imageBox.left - box.left + (imageBox.width - width) / 2;
    const top = imageBox.top - box.top + (imageBox.height - height) / 2;
    const p = (x: number, y: number) => point(left + x * width, top + y * height);
    const nodes = [p(.364, .289), p(.537, .286), p(.412, .56), p(.698, .643), p(.704, .251), p(.443, .805)];
    const pairs = [[0, 1], [1, 2], [2, 3], [1, 4], [3, 4], [2, 5], [0, 5]];
    pairs.forEach(([from, to], i) => {
        const a = nodes[from], b = nodes[to];
        const c = mix(a, b, .5);
        c.y -= height * (.09 + (i % 3) * .02);
        route(ctx, a, c, b, (t * .000065 + i * .173) % 1, i % 2 ? colors.cyan : colors.accent, .12);
    });
    nodes.forEach((node, i) => { dot(ctx, node, 2.5, colors.accent); ring(ctx, node, 4 + (t * .004 + i * 2) % 12, colors.accent, .25 * (1 - ((t * .004 + i * 2) % 12) / 12)); });
}
function fragmented(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    for (let i = 0; i < 90; i++) {
        const x = (Math.sin(i * 82.73) * .5 + .5) * w;
        const y = (Math.cos(i * 34.91) * .5 + .5) * h;
        dot(ctx, point(x + Math.sin(t * .0004 + i) * 6, y + Math.cos(t * .0003 + i) * 8), 1, colors.text, .12);
    }
    for (let i = 0; i < 18; i++) {
        const x = w * (.05 + i * .052);
        const peak = Math.sin(i * 2.14 + t * .0005) * h * .16;
        line(ctx, point(x, h * .5 - Math.abs(peak)), point(x, h * .5 + Math.abs(peak)), colors.accent, .14, 1.5);
    }
}
function unified(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    for (let i = 0; i < 11; i++) {
        const y = h * (.16 + i * .064);
        route(ctx, point(-10, y), point(w * .5, h * .51), point(w + 10, y), (t * .00009 + i * .11) % 1, colors.onAccent, .15);
    }
    ring(ctx, point(w * .5, h * .46), 56, colors.onAccent, .22);
    ring(ctx, point(w * .5, h * .46), 68, colors.onAccent, .09);
}
function industry(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h, canvas } = scene;
    const variant = Number(canvas.dataset.variant || 0);
    for (let row = 0; row < 13; row++)
        for (let col = 0; col < 25; col++) {
            const x = w * col / 24, y = h * .55 + (row - 6) * 10 + Math.sin(col * .22 + t * .0003 + row * .22 + variant) * h * .15;
            dot(ctx, point(x, y), .8, colors.accent, .14 + Math.sin(col * .15 + row * .1) * .07);
        }
}
function authority(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    const phase = (t * .00013) % 1;
    const p = point(w * .5, h * (.21 + phase * .49));
    dot(ctx, p, 2.2, colors.cyan, .8);
    ring(ctx, p, 6, colors.accent, .15);
}
function devices(scene: Scene, t: number, keys = false) {
    const { context: ctx, width: w, height: h } = scene;
    const center = point(w * .5, h * .46), r = Math.min(w * .34, h * .34);
    ring(ctx, center, r, colors.border, 1);
    ring(ctx, center, r * .72, colors.border, .7);
    const count = keys ? 7 : 12;
    for (let i = 0; i < count; i++) {
        const a = i / count * Math.PI * 2 + t * .000045;
        const node = point(center.x + Math.cos(a) * r, center.y + Math.sin(a) * r * .84);
        route(ctx, node, mix(node, center, .5), center, (t * .00012 + i * .13) % 1, colors.accent, .17);
        ctx.fillStyle = colors.bg;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(node.x - 9, node.y - 9, 18, 18, 3);
        ctx.fill();
        ctx.stroke();
        if (keys) {
            ring(ctx, node, 3, colors.accent, .8);
        }
        else {
            line(ctx, point(node.x - 3, node.y), point(node.x + 3, node.y), colors.accent, 1);
        }
    }
    ctx.fillStyle = colors.bg;
    ctx.beginPath();
    ctx.arc(center.x, center.y, keys ? 49 : 44, 0, Math.PI * 2);
    ctx.fill();
    ring(ctx, center, keys ? 49 : 44, colors.accent, .75);
    text(ctx, keys ? 'HSM / KMS' : 'X.509', center, keys ? 15 : 22);
    const tags = keys ? ['PKCS#11', 'AWS KMS', 'Azure Key Vault'] : ['EST', 'mTLS', 'DMS'];
    tags.forEach((tag, i) => text(ctx, tag, point(w * (.2 + i * .3), h * .86), 12, colors.text));
}
function workflow(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    const y = h * .4, radius = Math.min(23, w * .065);
    for (let i = 0; i < 4; i++) {
        const center = point(w * (.125 + i * .25), y);
        if (i < 3) {
            const next = point(w * (.125 + (i + 1) * .25), y);
            route(ctx, point(center.x + radius, y), point((center.x + next.x) / 2, y), point(next.x - radius, y), (t * .00018 - i * .25 + 1) % 1, colors.accent, .35);
        }
        ctx.fillStyle = colors.bg;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ring(ctx, center, radius, colors.accent, .8);
        if (i === 0 || i === 1) {
            ctx.strokeStyle = colors.accent;
            ctx.lineWidth = 1.3;
            ctx.strokeRect(center.x - 7, center.y - 10, 14, 20);
            for (let n = 0; n < 3; n++)
                line(ctx, point(center.x - 3, center.y - 5 + n * 5), point(center.x + 4, center.y - 5 + n * 5), colors.accent, .7);
        }
        else if (i === 2) {
            ctx.strokeStyle = colors.accent;
            ctx.strokeRect(center.x - 7, center.y - 7, 14, 14);
            for (let n = -1; n <= 1; n++) {
                line(ctx, point(center.x + n * 5, center.y - 11), point(center.x + n * 5, center.y - 7), colors.accent);
                line(ctx, point(center.x + n * 5, center.y + 7), point(center.x + n * 5, center.y + 11), colors.accent);
            }
        }
        else {
            ctx.strokeStyle = colors.accent;
            ctx.beginPath();
            ctx.arc(center.x, center.y, 9, .2, Math.PI * 1.8);
            ctx.stroke();
            line(ctx, point(center.x + 7, center.y - 6), point(center.x + 9, center.y - 1), colors.accent);
        }
        const active = (t * .00022) % 4;
        if (Math.floor(active) === i)
            ring(ctx, center, radius + 4 + (active % 1) * 10, colors.accent, .35 * (1 - active % 1));
    }
}
function access(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    const c = point(w * .5, h * .47);
    const nodes = [point(w * .2, h * .23), point(w * .8, h * .23), point(w * .2, h * .77), point(w * .8, h * .77)];
    nodes.forEach((p, i) => { route(ctx, p, mix(p, c, .5), c, (t * .00014 + i * .24) % 1, colors.accent, .25); ring(ctx, p, 9, colors.border); dot(ctx, p, 2, colors.accent); });
    ctx.fillStyle = colors.bg;
    ctx.beginPath();
    ctx.roundRect(c.x - 33, c.y - 18, 66, 36, 5);
    ctx.fill();
    ctx.strokeStyle = colors.accent;
    ctx.stroke();
    text(ctx, 'OIDC', c, 13);
}
function audit(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    for (let i = 0; i < 4; i++) {
        const y = 25 + i * 26, x = 28;
        line(ctx, point(x, y), point(x + Math.min(w * .67, 200), y), colors.border, .8);
        const length = 50 + Math.sin(i * 4.2) * 28;
        line(ctx, point(x + 12, y), point(x + length, y), colors.accent, .45, 2);
        dot(ctx, point(x, y), 3, colors.accent, .5 + .4 * Math.sin(t * .0015 - i));
    }
    const x = 28 + ((t * .00013) % 1) * Math.min(w * .67, 200);
    line(ctx, point(x, 12), point(x, 116), colors.accent, .2);
}
function integration(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    const a = point(w * .25, h * .5), b = point(w * .75, h * .5);
    for (let i = 0; i < 3; i++)
        route(ctx, point(a.x + 26, a.y + (i - 1) * 9), point(w * .5, h * (.22 + i * .28)), point(b.x - 26, b.y + (i - 1) * 9), (t * .00014 + i * .3) % 1, colors.accent, .2);
    ring(ctx, a, 26, colors.accent, .6);
    ring(ctx, b, 26, colors.accent, .6);
    text(ctx, 'IoT', a, 13);
    text(ctx, 'API', b, 13);
}
function quantum(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    for (let i = 0; i < 18; i++) {
        const a = (t * .00013 + i * .35), r = 1 + Math.sin(i * 8) * .3;
        const p = point(w * (.67 + Math.cos(a) * .25 * r), h * (.48 + Math.sin(a) * .35 * r));
        dot(ctx, p, 1.1, colors.quantum, .3 + .5 * Math.sin(a * 2 + i) ** 2);
    }
}
function closing(scene: Scene, t: number) {
    const { context: ctx, width: w, height: h } = scene;
    const step = w < 600 ? 18 : 16;
    for (let x = 0; x < w; x += step)
        for (let row = 0; row < 12; row++) {
            const y = h * .72 + row * step * .6 + Math.sin(x * .006 + t * .0005 + row * .15) * 24;
            dot(ctx, point(x, y), .85, colors.bg, .15 + .25 * (row / 12));
        }
}
function draw(scene: Scene, t: number) {
    const { context: ctx, canvas, width: w, height: h } = scene;
    if (!w || !h)
        return;
    ctx.clearRect(0, 0, w, h);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    switch (canvas.dataset.animation) {
        case 'network':
            network(scene, t);
            break;
        case 'fragmented':
            fragmented(scene, t);
            break;
        case 'unified':
            unified(scene, t);
            break;
        case 'industry':
            industry(scene, t);
            break;
        case 'authority':
            authority(scene, t);
            break;
        case 'devices':
            devices(scene, t);
            break;
        case 'keys':
            devices(scene, t, true);
            break;
        case 'workflow':
            workflow(scene, t);
            break;
        case 'access':
            access(scene, t);
            break;
        case 'audit':
            audit(scene, t);
            break;
        case 'integration':
            integration(scene, t);
            break;
        case 'quantum':
            quantum(scene, t);
            break;
        case 'closing':
            closing(scene, t);
            break;
    }
    canvas.dataset.ready = 'true';
    canvas.parentElement?.classList.add('canvas-ready');
}
function resize(scene: Scene) {
    const rect = scene.canvas.getBoundingClientRect();
    scene.width = rect.width;
    scene.height = rect.height;
    if (!rect.width || !rect.height)
        return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    scene.canvas.width = Math.round(rect.width * ratio);
    scene.canvas.height = Math.round(rect.height * ratio);
    scene.context.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw(scene, time);
}
function active() { return !userPaused && !preference.matches && !document.hidden && scenes.some(scene => scene.visible); }
function tick(now: number) {
    request = 0;
    if (!active()) {
        previous = 0;
        return;
    }
    if (!previous)
        previous = now;
    if (now - frame >= 1000 / 30) {
        time += Math.min(now - previous, 70);
        previous = now;
        frame = now;
        for (const scene of scenes)
            if (scene.visible)
                draw(scene, time);
    }
    request = requestAnimationFrame(tick);
}
function resume() { if (active() && !request) {
    previous = 0;
    request = requestAnimationFrame(tick);
} }
function syncPause() {
    root.classList.toggle('lp-motion-paused', userPaused || preference.matches);
    if (button) {
        button.setAttribute('aria-pressed', String(userPaused));
        button.setAttribute('aria-label', (userPaused ? button.dataset.resumeLabel : button.dataset.pauseLabel) || 'Pause animations');
    }
    if (!active() && request) {
        cancelAnimationFrame(request);
        request = 0;
        previous = 0;
    }
    resume();
}
if (typeof ResizeObserver === 'function') {
    const observer = new ResizeObserver(entries => { for (const entry of entries) {
        const scene = scenes.find(s => s.canvas === entry.target);
        if (scene)
            resize(scene);
    } resume(); });
    scenes.forEach(scene => observer.observe(scene.canvas));
}
else
    window.addEventListener('resize', () => scenes.forEach(resize), { passive: true });
scenes.forEach(resize);
if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(entries => { for (const entry of entries) {
        const scene = scenes.find(s => s.canvas === entry.target);
        if (scene) {
            scene.visible = entry.isIntersecting;
            scene.canvas.parentElement?.classList.toggle('scene-visible', scene.visible);
            if (scene.visible) {
                resize(scene);
            }
        }
    } resume(); }, { rootMargin: '120px' });
    scenes.forEach(scene => visibility.observe(scene.canvas));
}
button?.addEventListener('click', () => { userPaused = !userPaused; syncPause(); });
preference.addEventListener('change', syncPause);
document.addEventListener('visibilitychange', syncPause);
new MutationObserver(() => { colors = readColors(); scenes.forEach(s => draw(s, time)); }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
if (button)
    new MutationObserver(syncPause).observe(button, { attributes: true, attributeFilter: ['data-pause-label', 'data-resume-label'] });
syncPause();
if (!preference.matches && 'IntersectionObserver' in window) {
    const reveals = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveals.unobserve(entry.target);
    } }); }, { rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(target => { target.classList.add('will-reveal'); reveals.observe(target); });
}
