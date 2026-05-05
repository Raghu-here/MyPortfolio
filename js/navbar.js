// js/navbar.js
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const btnMenu = document.querySelector('.btn-menu');
  const body = document.body;

  if (!navbar || !btnMenu) return;

  // Scroll Handler with debouncing
  let isScrolled = false;
  const handleScroll = () => {
    const shouldScroll = window.scrollY > 60;
    if (shouldScroll !== isScrolled) {
      isScrolled = shouldScroll;
      navbar.classList.toggle('scrolled', isScrolled);
    }
    
    // Progress Bar Update
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 1;
      progressBar.style.transform = `scaleX(${scrolled})`;
    }
  };

  window.addEventListener('scroll', () => {
    requestAnimationFrame(handleScroll);
  }, { passive: true });

  // Mobile Menu Toggle
  btnMenu.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    btnMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('menu-open');
      btnMenu.setAttribute('aria-expanded', 'false');
    });
  });
});
