(function () {
  "use strict";

  var D = window.DECADE_DATA;
  var I = window.DECADE_I18N;

  var state = {
    lang: "zh",
    theme: "dark",
    filter: "all"
  };

  /* ---------- storage helpers (Safari private mode safe) ---------- */
  function storeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function storeSet(key, val) {
    try { localStorage.setItem(key, val); } catch (e) { /* ignore */ }
  }

  function t(key) {
    return (I[state.lang] && I[state.lang][key]) || I.zh[key] || key;
  }
  function pick(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.zh || "";
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- theme & language ---------- */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-picker button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.themeOpt === theme));
    });
    storeSet("decade-theme", theme);
  }
  function applyLang(lang) {
    state.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-TW" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    var btn = document.querySelector(".lang-toggle");
    if (btn) btn.textContent = lang === "zh" ? "EN" : "中";
    renderDynamic();
    storeSet("decade-lang", lang);
  }

  /* ---------- hero slides ---------- */
  function initHero() {
    var bg = document.querySelector(".hero-bg");
    if (!bg) return;
    D.heroSlides.forEach(function (src, i) {
      var div = document.createElement("div");
      div.className = "slide" + (i === 0 ? " active" : "");
      div.style.backgroundImage = "url('" + src + "')";
      div.onerror = function () { div.style.display = "none"; };
      bg.appendChild(div);
    });
    var slides = bg.querySelectorAll(".slide");
    if (slides.length < 2) return;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    var idx = 0;
    setInterval(function () {
      slides[idx].classList.remove("active");
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add("active");
    }, 5000);
  }

  /* ---------- stats ---------- */
  function renderStats() {
    var wrap = document.getElementById("stats-grid");
    if (!wrap) return;
    wrap.innerHTML = D.stats.map(function (s) {
      return '<div class="stat reveal"><div class="stat-value">' + esc(s.value) +
        '</div><div class="stat-label">' + esc(t(s.labelKey)) + "</div></div>";
    }).join("");
  }

  /* ---------- services ---------- */
  function renderServices() {
    var wrap = document.getElementById("services-grid");
    if (!wrap) return;
    wrap.innerHTML = D.services.map(function (s) {
      return '<div class="service-card reveal"><div class="service-icon">' + s.icon +
        "</div><h3>" + esc(s.zh) + "</h3><p>" + esc(pick({ zh: "", en: "" }) || "") +
        "</p></div>";
    }).join("");
  }

  /* ---------- videos ---------- */
  function videoCard(v) {
    return '<div class="video-card reveal" data-tags="' + v.tags.join(",") + '" data-ytid="' + esc(v.id) + '" role="button" tabindex="0" aria-label="' + esc(pick(v)) + '">' +
      '<div class="video-thumb">' +
      '<img loading="lazy" alt="' + esc(pick(v)) + '" src="https://i.ytimg.com/vi/' + esc(v.id) + '/hqdefault.jpg" onerror="this.style.display=\'none\'">' +
      '<span class="play-badge">▶</span>' +
      "</div>" +
      '<div class="video-title">' + esc(pick(v)) + "</div>" +
      "</div>";
  }
  function renderVideos() {
    var wrap = document.getElementById("videos-grid");
    if (!wrap) return;
    var list = state.filter === "all" ? D.videos : D.videos.filter(function (v) {
      return v.tags.indexOf(state.filter) !== -1;
    });
    if (!list.length) {
      wrap.innerHTML = '<p class="video-empty">' + (state.lang === "zh" ? "此分類暫無影片" : "No videos in this category") + "</p>";
      return;
    }
    wrap.innerHTML = list.map(videoCard).join("");
  }
  function activateVideo(card) {
    if (card.dataset.loaded) return;
    card.dataset.loaded = "1";
    var id = card.getAttribute("data-ytid");
    var thumb = card.querySelector(".video-thumb");
    thumb.outerHTML =
      '<iframe class="video-frame" src="https://www.youtube.com/embed/' + encodeURIComponent(id) +
      '?autoplay=1&rel=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  }
  function renderFilters() {
    var row = document.getElementById("filter-row");
    if (!row) return;
    row.innerHTML = D.filters.map(function (f) {
      return '<button class="filter-chip" aria-pressed="' + String(f.id === state.filter) +
        '" data-filter="' + esc(f.id) + '">' + esc(pick(f)) + "</button>";
    }).join("");
  }

  /* ---------- timeline ---------- */
  function renderTimeline() {
    var wrap = document.getElementById("timeline");
    if (!wrap) return;
    wrap.innerHTML = D.works.map(function (w, i) {
      return '<div class="year-block' + (i === 0 ? " open" : "") + ' reveal">' +
        '<button class="year-toggle" aria-expanded="' + String(i === 0) + '">' +
        "<span>" + w.year + '<span class="year-count">' + w.items.length +
        (state.lang === "zh" ? " 項" : (w.items.length === 1 ? " project" : " projects")) + "</span></span>" +
        '<span class="chev">▸</span>' +
        "</button>" +
        '<ul class="year-list">' + w.items.map(function (it) { return "<li>" + esc(it) + "</li>"; }).join("") + "</ul>" +
        "</div>";
    }).join("");
  }

  /* ---------- about ---------- */
  function renderAbout() {
    var text = document.getElementById("about-text");
    if (text) text.innerHTML = D.about[state.lang === "zh" ? "zh" : "en"].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    var media = document.getElementById("about-media");
    if (media) media.innerHTML = D.media.map(function (m) { return "<li>" + esc(m) + "</li>"; }).join("");
    var books = document.getElementById("about-books");
    if (books) books.innerHTML = D.books.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
  }

  /* ---------- contact ---------- */
  function renderContact() {
    var c = D.contact;
    var info = document.getElementById("contact-info");
    if (!info) return;
    var addr = state.lang === "zh" ? c.addrZh : c.addrEn;
    info.innerHTML =
      "<dl class=\"contact-info\">" +
      "<dt>" + esc(t("contact.company")) + "</dt><dd>" + esc(c.nameZh) + "</dd>" +
      "<dt>" + esc(t("contact.address")) + "</dt><dd>" + esc(addr) + ' · <a href="' + esc(c.mapLink) + '" target="_blank" rel="noopener noreferrer">Google Map</a></dd>' +
      "<dt>" + esc(t("contact.vat")) + "</dt><dd>" + esc(c.vat) + "</dd>" +
      '<dt>' + esc(t("contact.email")) + '</dt><dd><a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a></dd>" +
      "<dt>" + esc(t("contact.line")) + "</dt><dd>" + esc(c.line) + '</dd>' +
      "</dl>" +
      '<a class="line-btn" href="' + esc(c.lineBtn) + '" target="_blank" rel="noopener noreferrer"><img height="36" decoding="async" alt="LINE" src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"></a>';
    document.title = state.lang === "zh"
      ? "帝凱互動科技 DECADE.TW — 互動科技解決方案"
      : "DECADE.TW — Interactive Technology Solutions";
  }

  function renderFooter() {
    var el = document.getElementById("footer-copy");
    if (!el) return;
    var tpl = state.lang === "zh" ? D.contact.copyrightZh : D.contact.copyrightEn;
    el.textContent = tpl.replace("{year}", String(new Date().getFullYear()));
  }

  /* dynamic sections re-rendered when language/filter changes */
  function renderDynamic() {
    renderStats();
    renderServices();
    renderFilters();
    renderVideos();
    renderTimeline();
    renderAbout();
    renderContact();
    renderFooter();
    observeReveals();
  }

  /* ---------- scroll reveal ---------- */
  var observer = null;
  function observeReveals() {
    if (observer) observer.disconnect();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { observer.observe(el); });
  }

  /* ---------- lazy map ---------- */
  function initMap() {
    var wrap = document.getElementById("map-wrap");
    if (!wrap || wrap.dataset.mounted) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var f = document.createElement("iframe");
        f.src = D.contact.mapUrl;
        f.loading = "lazy";
        f.title = "Google Map";
        f.allowFullscreen = true;
        wrap.appendChild(f);
        wrap.dataset.mounted = "1";
        io.disconnect();
      });
    }, { rootMargin: "200px" });
    io.observe(wrap);
  }

  /* ---------- events ---------- */
  function bindEvents() {
    document.querySelector(".lang-toggle").addEventListener("click", function () {
      applyLang(state.lang === "zh" ? "en" : "zh");
    });
    document.querySelectorAll(".theme-picker button").forEach(function (b) {
      b.addEventListener("click", function () { applyTheme(b.dataset.themeOpt); });
    });
    var burger = document.querySelector(".nav-burger");
    var links = document.getElementById("nav-links");
    burger.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });

    var main = document.getElementById("main");
    main.addEventListener("click", function (e) {
      var chip = e.target.closest(".filter-chip");
      if (chip) {
        state.filter = chip.dataset.filter;
        renderFilters();
        renderVideos();
        observeReveals();
        return;
      }
      var yearBtn = e.target.closest(".year-toggle");
      if (yearBtn) {
        var block = yearBtn.parentElement;
        block.classList.toggle("open");
        yearBtn.setAttribute("aria-expanded", String(block.classList.contains("open")));
        return;
      }
      var card = e.target.closest(".video-card");
      if (card) activateVideo(card);
    });
    main.addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("video-card")) {
        e.preventDefault();
        activateVideo(e.target);
      }
    });

    var backTop = document.querySelector(".back-top");
    window.addEventListener("scroll", function () {
      backTop.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ---------- boot ---------- */
  function boot() {
    applyTheme(storeGet("decade-theme") || "dark");
    bindEvents();
    applyLang(storeGet("decade-lang") || "zh");
    initHero();
    initMap();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
