// Hero staggered load animation
window.addEventListener('load', () => {
  const delays = [
    ['heroEyebrow', 100],
    ['heroLine1', 280],
    ['heroLine2', 440],
    ['heroSub', 600],
    ['heroDivider', 750],
    ['heroCtas', 900],
    ['heroStats', 1100],
    ['scrollIndicator', 1400],
  ];
  delays.forEach(([id, delay]) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.classList.add('visible');
    }, delay);
  });
});
