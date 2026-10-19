/* ==========================================================================
   AURA EVENTS & CONSULTING — script.js
   Vanilla JS, no dependencies. Progressive enhancement only:
   the site remains fully usable with JavaScript disabled.
   ========================================================================== */
(function () {
  "use strict";

  /* Flag JS availability — enables scroll-reveal styles in CSS */
  document.documentElement.classList.add("js");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------
     1. Sticky header shadow
  --------------------------------------------------------------- */
  var header = document.querySelector(".site-header");

  function onScrollHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  /* ---------------------------------------------------------------
     2. Mobile navigation
  --------------------------------------------------------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  function closeNav() {
    document.body.classList.remove("nav-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    /* Close menu when a link inside it is clicked */
    navMenu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    /* Close with Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  /* ---------------------------------------------------------------
     3. Scroll reveal (IntersectionObserver)
  --------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------------------------------------------------------
     4. Animated stat counters
  --------------------------------------------------------------- */
  var counters = document.querySelectorAll("[data-count]");

  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (prefersReducedMotion) { el.textContent = String(target); return; }
    var duration = 1400;
    var start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); /* ease-out cubic */
      el.textContent = String(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window && counters.length) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ---------------------------------------------------------------
     5. Active nav link highlighting
  --------------------------------------------------------------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---------------------------------------------------------------
     6. Contact form (demo submission)
     NOTE: wire this form to Formspree / EmailJS / your backend
     before going live. See README.md for instructions.
  --------------------------------------------------------------- */
  var form = document.getElementById("enquiry-form");
  var success = document.getElementById("form-success");

  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      /* Native validation check (form has novalidate; we run it manually) */
      if (typeof form.reportValidity === "function" && !form.reportValidity()) {
        return;
      }

      /* Demo behaviour: show confirmation. Replace with a fetch() to
         your form endpoint when a real mailbox is connected. */
      success.hidden = false;
      form.reset();
      success.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
    });
  }

  /* ---------------------------------------------------------------
     7. Back-to-top button
  --------------------------------------------------------------- */
  var toTop = document.getElementById("to-top");

  function onScrollToTop() {
    if (!toTop) return;
    toTop.classList.toggle("is-visible", window.scrollY > 640);
  }

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------------------------------------------------------
     8. Shared scroll listener + footer year
  --------------------------------------------------------------- */
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      onScrollHeader();
      onScrollToTop();
      ticking = false;
    });
  }, { passive: true });

  onScrollHeader();
  onScrollToTop();

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
