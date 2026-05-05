// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Debounced scroll listener for better performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(handleScroll);
  });

  // Mobile Menu Toggle
  const btnMenu = document.querySelector('.btn-menu');
  const body = document.body;
  
  btnMenu.addEventListener('click', () => {
    body.classList.toggle('menu-open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => body.classList.remove('menu-open'));
  });

  // Reveal Logic using Intersection Observer
  const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Copy Email Functionality
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'raghurajsingh152007@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const span = copyBtn.querySelector('span');
        const originalText = span.textContent;
        span.textContent = 'Copied! ✓';
        setTimeout(() => span.textContent = originalText, 2000);
      });
    });
  }

  // Hero Load Animations
  const triggerHeroAnimations = () => {
    const navbar = document.getElementById('navbar');
    const eyebrow = document.querySelector('.hero-eyebrow');
    const titleLines = document.querySelectorAll('.hero-title .line span');
    const subtext = document.querySelector('.hero-subtext');
    const ctas = document.querySelector('.hero-ctas');
    const scrollInd = document.querySelector('.hero-scroll');
    const stats = document.querySelector('.hero-stats');

    navbar.style.opacity = '1';
    
    setTimeout(() => {
      eyebrow.style.opacity = '1';
      eyebrow.style.transform = 'translate3d(0, 0, 0)';
    }, 200);

    setTimeout(() => {
      titleLines.forEach(line => line.style.transform = 'translate3d(0, 0, 0)');
    }, 400);

    setTimeout(() => {
      subtext.style.opacity = '1';
    }, 800);

    setTimeout(() => {
      ctas.style.opacity = '1';
      ctas.style.transform = 'translate3d(0, 0, 0)';
    }, 1000);

    setTimeout(() => {
      if (scrollInd) scrollInd.style.opacity = '1';
      if (stats) stats.style.opacity = '1';
    }, 1200);
  };

  triggerHeroAnimations();
});
