// js/cursor.js
class CustomCursor {
  constructor() {
    this.dot = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    this.mouseX = 0;
    this.mouseY = 0;
    this.ringX = 0;
    this.ringY = 0;
    this.isHovering = false;
    
    this.init();
  }

  init() {
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', e => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        // Immediate dot movement
        this.dot.style.transform = `translate3d(${this.mouseX - 4}px, ${this.mouseY - 4}px, 0)`;
      });

      this.animate();
      this.addEventListeners();
    }
  }

  animate() {
    // Lerp for the ring
    this.ringX += (this.mouseX - this.ringX) * 0.15;
    this.ringY += (this.mouseY - this.ringY) * 0.15;
    
    this.ring.style.transform = `translate3d(${this.ringX - 20}px, ${this.ringY - 20}px, 0)`;
    
    requestAnimationFrame(() => this.animate());
  }

  addEventListeners() {
    const hoverElements = 'a, button, .skill-pill, .bento-card, #copy-email, .project-card';
    document.querySelectorAll(hoverElements).forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new CustomCursor());
