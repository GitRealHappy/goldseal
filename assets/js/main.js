/**
 * Gold Seal Mechanical - Main JavaScript
 * Interactive elements and enhancements
 */

(function() {
  'use strict';

  // Mobile menu toggle is handled inline in default layout for immediate availability

  // Hero text parallax: moves opposite to cursor
  function initHeroParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var hero = document.querySelector('.hero-band');
    var inner = hero && hero.querySelector('.hero-band__inner');
    if (!hero || !inner) return;

    var intensity = 44; // max px offset

    hero.addEventListener('mousemove', function(e) {
      var rect = hero.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var x = (e.clientX - centerX) / rect.width;
      var y = (e.clientY - centerY) / rect.height;
      // Opposite direction: cursor right -> text left (negative translateX)
      var tx = -x * intensity;
      var ty = -y * intensity;
      inner.style.transform = 'translate(' + tx + 'px, ' + ty + 'px)';
    });

    hero.addEventListener('mouseleave', function() {
      inner.style.transform = 'translate(0, 0)';
    });
  }

  // Service card content parallax: moves opposite to cursor within each card
  function initServiceCardParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var cards = document.querySelectorAll('.services-grid .service-card');
    if (!cards.length) return;

    var intensity = 8; // max px offset (smaller than hero since cards are smaller)

    cards.forEach(function(card) {
      var inner = card.querySelector('.service-card__inner');
      if (!inner) return;

      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        var x = (e.clientX - centerX) / rect.width;
        var y = (e.clientY - centerY) / rect.height;
        var tx = -x * intensity;
        var ty = -y * intensity;
        inner.style.transform = 'translate(' + tx + 'px, ' + ty + 'px)';
      });

      card.addEventListener('mouseleave', function() {
        inner.style.transform = 'translate(0, 0)';
      });
    });
  }

  // Scroll-triggered animations: add .in-view when element enters viewport
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    elements.forEach(function(el) {
      observer.observe(el);
    });
  }

  function init() {
    initHeroParallax();
    initServiceCardParallax();
    initScrollAnimations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
