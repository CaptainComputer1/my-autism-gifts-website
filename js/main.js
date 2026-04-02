/**
 * My Autism Gifts — main.js
 * Mobile navigation toggle + footer year + scroll-behaviour enhancements
 */

/* ─── Footer: auto-fill current year ─────────────────────────────────────── */
(function setFooterYear() {
  const yearSpans = document.querySelectorAll('#footer-year');
  const year = new Date().getFullYear();
  yearSpans.forEach(function (el) {
    el.textContent = year;
  });
})();

/* ─── Mobile navigation toggle ───────────────────────────────────────────── */
(function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.primary-nav');

  if (!toggle || !nav) return;

  // Close nav helper
  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  }

  // Open nav helper
  function openNav() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
  }

  // Toggle on button click
  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('is-open');
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close when a nav link is clicked (single-page feel; also good for in-page anchors)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeNav();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav();
      toggle.focus(); // return focus to the button
    }
  });

  // Close when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('is-open') &&
      !nav.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeNav();
    }
  });
})();

/* ─── Sticky header: add shadow on scroll ────────────────────────────────── */
(function initHeaderScroll() {
  var header = document.querySelector('.site-header');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // run once on load
})();

/* ─── Smooth scroll for anchor links (polyfill for Safari) ───────────────── */
(function initSmoothScroll() {
  // Only add if native smooth scroll isn't supported
  if ('scrollBehavior' in document.documentElement.style) return;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

/* ─── Simple contact / intake form validation feedback ───────────────────── */
(function initFormValidation() {
  var forms = document.querySelectorAll('.contact-form, .intake-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // remove when a real form endpoint is wired up

      var firstInvalid = null;

      form.querySelectorAll('[required]').forEach(function (field) {
        var isCheckbox = field.type === 'checkbox';
        var isEmpty    = isCheckbox ? !field.checked : field.value.trim() === '';

        if (isEmpty) {
          field.classList.add('field-error');
          if (!firstInvalid) firstInvalid = field;

          // Create or update error message
          var errorId  = field.id + '-error';
          var errorMsg = document.getElementById(errorId);
          if (!errorMsg) {
            errorMsg = document.createElement('p');
            errorMsg.id = errorId;
            errorMsg.className = 'field-error-msg';
            errorMsg.setAttribute('role', 'alert');
            field.parentNode.appendChild(errorMsg);
          }
          errorMsg.textContent = isCheckbox
            ? 'Please check this box to continue.'
            : 'This field is required.';

          field.setAttribute('aria-describedby',
            (field.getAttribute('aria-describedby') || '') + ' ' + errorId
          );
        } else {
          field.classList.remove('field-error');
          var existingError = document.getElementById(field.id + '-error');
          if (existingError) existingError.remove();
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      // ── Placeholder success state ──────────────────────────────────────
      // Replace this block with real form submission (e.g. fetch to Netlify Forms,
      // Formspree, or a WP REST endpoint) when the backend is ready.
      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = '✓ Message sent — Rob will be in touch soon!';
        submitBtn.disabled    = true;
        submitBtn.classList.add('btn--success');
      }
    });

    // Clear error state on input
    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        this.classList.remove('field-error');
        var errorMsg = document.getElementById(this.id + '-error');
        if (errorMsg) errorMsg.remove();
      });
      if (field.type === 'checkbox') {
        field.addEventListener('change', function () {
          this.classList.remove('field-error');
          var errorMsg = document.getElementById(this.id + '-error');
          if (errorMsg) errorMsg.remove();
        });
      }
    });
  });
})();
