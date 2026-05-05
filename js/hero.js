// js/hero.js
document.addEventListener('DOMContentLoaded', () => {
  const triggerHeroAnimations = (nav) => {
    const eyebrow = document.querySelector('.hero-eyebrow');
    const titleLines = document.querySelectorAll('.hero-title .line span');
    const subtext = document.querySelector('.hero-subtext');
    const ctas = document.querySelector('.hero-ctas');
    const scrollInd = document.querySelector('.hero-scroll');
    const stats = document.querySelector('.hero-stats');

    // Fade in Navbar
    if (nav) nav.style.opacity = '1';
    
    // Staggered reveal
    setTimeout(() => {
      if (eyebrow) {
        eyebrow.style.opacity = '1';
        eyebrow.style.transform = 'translate3d(0, 0, 0)';
      }
    }, 200);

    setTimeout(() => {
      titleLines.forEach(line => {
        if (line) line.style.transform = 'translate3d(0, 0, 0)';
      });
    }, 400);

    setTimeout(() => {
      if (subtext) subtext.style.opacity = '1';
    }, 800);

    setTimeout(() => {
      if (ctas) {
        ctas.style.opacity = '1';
        ctas.style.transform = 'translate3d(0, 0, 0)';
      }
    }, 1000);

    setTimeout(() => {
      if (scrollInd) scrollInd.style.opacity = '1';
      if (stats) stats.style.opacity = '1';
    }, 1200);
  };

  const nav = document.getElementById('navbar');
  triggerHeroAnimations(nav);
});
