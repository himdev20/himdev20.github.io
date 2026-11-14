/* Himanshu Mahale — site script. No dependencies. */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---------- Theme toggle (remembers your choice) ---------- */
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector(".menu-toggle");
  var links = document.getElementById("nav-links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
      }
    });
  }

  /* ---------- Nav border on scroll + current-section highlight ---------- */
  var nav = document.querySelector(".site-nav");
  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window && links) {
    var navMap = {};
    links.querySelectorAll('a[href^="#"]').forEach(function (a) { navMap[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = navMap[en.target.id];
        if (a && en.isIntersecting) {
          Object.keys(navMap).forEach(function (k) { navMap[k].classList.remove("active"); });
          a.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(navMap).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- Copy email ---------- */
  document.querySelectorAll(".copy-email").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var email = btn.getAttribute("data-email");
      var done = function () {
        var old = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = old; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () { window.location.href = "mailto:" + email; });
      } else {
        window.location.href = "mailto:" + email;
      }
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); });

})();
