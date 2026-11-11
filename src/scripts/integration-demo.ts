/** Connector demo: one certificate event travels PKI → connector → platform per cycle.
 * CSS owns the choreography; this only picks the event and restarts the cycle.
 * The clock element's animationend marks the end of a cycle, so the landing's pause
 * button (which pauses CSS animations) and off-screen pausing hold the loop for free. */
const EVENTS = 3;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll<HTMLElement>('[data-integration-demo]').forEach((demo) => {
  const clock = demo.querySelector<HTMLElement>('.lp-integration-clock');
  const steps = Array.from(demo.querySelectorAll<HTMLButtonElement>('[data-event-step]'));
  let event = 0;

  const show = (index: number) => {
    event = (index + EVENTS) % EVENTS;
    demo.dataset.event = String(event);
    steps.forEach((step, i) => step.setAttribute('aria-pressed', String(i === event)));
  };

  const restart = () => {
    demo.classList.remove('is-running');
    if (reduced.matches) return;
    void demo.offsetWidth; // Force a style flush so every animation starts from 0%.
    demo.classList.add('is-running');
  };

  clock?.addEventListener('animationend', () => { show(event + 1); restart(); });
  steps.forEach((step, i) => step.addEventListener('click', () => { show(i); restart(); }));
  reduced.addEventListener('change', restart);

  if ('IntersectionObserver' in window) {
    let started = false;
    new IntersectionObserver(([entry]) => {
      demo.classList.toggle('is-inview', entry.isIntersecting);
      if (entry.isIntersecting && !started) { started = true; restart(); }
    }, { threshold: 0.25 }).observe(demo);
  } else {
    demo.classList.add('is-inview');
    restart();
  }
});
