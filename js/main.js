/**
 * HAKA SOLUTIONS — Master JavaScript (js/main.js)
 * Vanilla JavaScript — No backend dependencies, 100% frontend
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------------
     1. Navigation Sticky Header & Scroll Effect
     ------------------------------------------------------------- */
  const navWrapper = document.querySelector('.nav-wrapper');
  
  function handleNavScroll() {
    if (!navWrapper) return;
    if (window.scrollY > 40) {
      navWrapper.classList.add('nav-scrolled');
    } else {
      navWrapper.classList.remove('nav-scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* -------------------------------------------------------------
     2. Active Navigation Link Highlighting
     ------------------------------------------------------------- */
  function setActiveNavLinks() {
    const currentPath = window.location.pathname;
    let pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    if (pageName === '') pageName = 'index.html';

    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const targetPage = href.split('#')[0].split('?')[0];
      if (targetPage === pageName) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setActiveNavLinks();

  /* -------------------------------------------------------------
     3. Responsive Mobile Menu & Accessibility Controls
     ------------------------------------------------------------- */
  const mobileMenuBtn = document.querySelector('.nav-mobile-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    if (mobileMenuClose) mobileMenuClose.focus();
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.focus();
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  /* -------------------------------------------------------------
     4. Scroll Reveal Animations (IntersectionObserver)
     ------------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('visible'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  /* -------------------------------------------------------------
     5. Smooth Scrolling for Internal Anchor Links
     ------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  /* -------------------------------------------------------------
     6. Back to Top Button
     ------------------------------------------------------------- */
  const backToTopBtn = document.querySelector('.back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  /* -------------------------------------------------------------
     7. Dynamic Footer Year
     ------------------------------------------------------------- */
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* -------------------------------------------------------------
     8. Demo Contact Form Validation & State
     ------------------------------------------------------------- */
  const contactForms = document.querySelectorAll('.contact-form');

  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const messageInput = form.querySelector('[name="message"]');

      function validateField(input, condition, errorMsg) {
        if (!input) return true;
        const group = input.closest('.form-group');
        let errorEl = group ? group.querySelector('.form-error') : null;

        if (!condition) {
          input.classList.add('error');
          if (errorEl) {
            errorEl.textContent = errorMsg;
            errorEl.classList.add('show');
          }
          return false;
        } else {
          input.classList.remove('error');
          if (errorEl) {
            errorEl.classList.remove('show');
          }
          return true;
        }
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (nameInput) {
        if (!validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your full name (minimum 2 characters).')) {
          isValid = false;
        }
      }

      if (emailInput) {
        if (!validateField(emailInput, emailRegex.test(emailInput.value.trim()), 'Please enter a valid business email address.')) {
          isValid = false;
        }
      }

      if (messageInput) {
        if (!validateField(messageInput, messageInput.value.trim().length >= 10, 'Please enter your message (at least 10 characters).')) {
          isValid = false;
        }
      }

      if (!isValid) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const successMsg = form.querySelector('.form-success-msg');

      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Processing...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          if (successMsg) {
            successMsg.classList.add('show');
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          form.reset();
        }, 1200);
      }
    });
  });

  /* -------------------------------------------------------------
     9. Demo Careers Application Form Validation
     ------------------------------------------------------------- */
  const appForms = document.querySelectorAll('.application-form');

  appForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      const requiredInputs = form.querySelectorAll('[required]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      requiredInputs.forEach(input => {
        const group = input.closest('.form-group');
        const errorEl = group ? group.querySelector('.form-error') : null;
        let fieldValid = true;

        if (input.type === 'email') {
          fieldValid = emailRegex.test(input.value.trim());
        } else if (input.type === 'file') {
          fieldValid = input.files && input.files.length > 0;
        } else {
          fieldValid = input.value.trim().length > 0;
        }

        if (!fieldValid) {
          input.classList.add('error');
          if (errorEl) errorEl.classList.add('show');
          isValid = false;
        } else {
          input.classList.remove('error');
          if (errorEl) errorEl.classList.remove('show');
        }
      });

      if (!isValid) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const successMsg = form.querySelector('.form-success-msg');

      if (submitBtn) {
        const origText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Submitting Application...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
          if (successMsg) {
            successMsg.classList.add('show');
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          form.reset();
        }, 1500);
      }
    });
  });

});
