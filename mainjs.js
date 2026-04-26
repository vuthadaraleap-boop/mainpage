/* === ITZONE JS === */

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initFadeIn();
  initNavLinks();
});

/* === FADE IN ON SCROLL === */
function initFadeIn() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .hcard').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease, border-color .35s, box-shadow .35s';
    io.observe(el);
  });
}

/* === NAV LINKS === */
function initNavLinks() {
  document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });
}

/* === BADGE PULSE ANIMATION === */
function initBadgePulse() {
  const badges = document.querySelectorAll('.badge-pulse');
  badges.forEach(badge => {
    badge.style.animation = 'badgePulse 2s ease-in-out infinite';
  });
}

/* === SMOOTH SCROLL === */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* === PARALLAX EFFECT === */
function initParallax() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-glow-top, .hero-glow-bottom');

  parallaxElements.forEach(el => {
    const speed = 0.3;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

// Throttle scroll events
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      initParallax();
      ticking = false;
    });
    ticking = true;
  }
});