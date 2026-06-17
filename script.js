/**
 * VitalTrace Landing Page — Interactions
 */

(function () {
  'use strict';

  const THEME_KEY = 'vitaltrace-theme';

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    updateThemeIcons(isDark);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
  }

  function updateThemeIcons(isDark) {
    document.querySelectorAll('.icon-sun, .icon-moon').forEach((el) => {
      el.style.display = 'none';
    });
    document.querySelectorAll(isDark ? '.icon-sun' : '.icon-moon').forEach((el) => {
      el.style.display = 'block';
    });
  }

  function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('menu-close');
    const links = menu?.querySelectorAll('a') ?? [];

    function open() {
      menu?.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      menu?.classList.remove('open');
      document.body.style.overflow = '';
    }

    btn?.addEventListener('click', open);
    closeBtn?.addEventListener('click', close);
    links.forEach((link) => link.addEventListener('click', close));
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.dataset.section === id);
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
  }

  function initNavbarScroll() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    window.addEventListener(
      'scroll',
      () => nav.classList.toggle('shadow-lg', window.scrollY > 20),
      { passive: true }
    );
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight ?? 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix ?? '';
          const decimals = parseInt(el.dataset.decimals ?? '0', 10);
          const duration = 1800;
          const start = performance.now();

          function animate(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          }

          requestAnimationFrame(animate);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => observer.observe(c));
  }

  function initTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('timeline-active');
        });
      },
      { threshold: 0.4 }
    );
    items.forEach((item) => observer.observe(item));
  }

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
    if (!lightbox || !lightboxImg) return;

    function open(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    document.querySelectorAll('.diagram-img').forEach((img) => {
      img.addEventListener('click', () => open(img.src, img.alt));
    });

    closeBtn?.addEventListener('click', close);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initReveal();
    initScrollSpy();
    initNavbarScroll();
    initSmoothScroll();
    initCounters();
    initTimeline();
    initLightbox();
    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.addEventListener('click', toggleTheme);
    });
  });
})();
