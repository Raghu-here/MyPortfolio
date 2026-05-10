// Smooth hover deceleration for infinite scroll marquee
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.stack-scroll');
    if (!section) return;
    let raf;

    function getAnims() {
      return Array.from(section.querySelectorAll('.stack-row'))
        .flatMap(row => row.getAnimations());
    }

    function ease(targetRate, step) {
      cancelAnimationFrame(raf);
      function tick() {
        const anims = getAnims();
        let settled = true;
        anims.forEach(a => {
          const current = a.playbackRate;
          const diff = targetRate - current;
          if (Math.abs(diff) > 0.004) {
            a.updatePlaybackRate(current + diff * step);
            settled = false;
          } else {
            a.updatePlaybackRate(targetRate);
          }
        });
        if (!settled) raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
    }

    section.addEventListener('mouseenter', () => ease(0.06, 0.12));
    section.addEventListener('mouseleave', () => ease(1.00, 0.10));
  });
})();
