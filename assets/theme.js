(function() {
  const animateElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  };

  const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  };

  const parallaxHero = () => {
    const heroBg = document.querySelector('.hero .background');
    if (!heroBg) return;
    window.addEventListener('scroll', () => {
      const offset = window.pageYOffset;
      heroBg.style.transform = `translateY(${offset * 0.2}px)`;
    });
  };

  const searchToggle = () => {
    const search = document.querySelector('.search-bar');
    if (!search) return;
    const btn = search.querySelector('.icon-btn');
    btn?.addEventListener('click', () => search.classList.toggle('active'));
    document.addEventListener('click', (e) => {
      if (!search.contains(e.target)) search.classList.remove('active');
    });
  };

  const mobileNav = () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    if (!toggle || !drawer) return;
    toggle.addEventListener('click', () => drawer.classList.toggle('open'));
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) drawer.classList.remove('open');
    });
  };

  const miniCart = () => {
    const trigger = document.querySelector('[data-mini-cart-trigger]');
    const drawer = document.querySelector('[data-mini-cart]');
    const close = drawer?.querySelector('[data-mini-cart-close]');
    trigger?.addEventListener('click', () => drawer?.classList.toggle('open'));
    close?.addEventListener('click', () => drawer?.classList.remove('open'));
  };

  document.addEventListener('DOMContentLoaded', () => {
    animateElements();
    smoothScroll();
    parallaxHero();
    searchToggle();
    mobileNav();
    miniCart();
  });
})();
