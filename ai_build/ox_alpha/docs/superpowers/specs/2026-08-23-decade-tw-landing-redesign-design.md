# Design: decade.tw Landing Page Redesign (one-page, theme-switchable)

Date: 2026-08-23
Location: `ai_build/ox_alpha/` (new static project)
Source of content: existing `decade.tw` React site (`PAGEX_HOME`, `PAGE_WORKS`, `PAGEX_ABOUT`, `PAGEX_CONTACT`) plus live site at https://decade.tw

## Goal

A single-page landing site presenting DECADE.TW (帝凱互動科技) with the full content set of the current site, restyled, with:

- **3 switchable visual themes** (user requirement): Dark+neon glow (default), Light minimal gallery, Red/black brand.
- **zh-TW / EN language toggle** reusing existing bilingual copy where available.
- Zero build step: plain HTML + CSS + JS, hostable on GitHub Pages.

## Non-goals

- No routing/pages other than one `index.html` (anchors only).
- No CMS/backend; content stays in a JS data module.
- Not replacing the existing React site yet; it consumes the same public assets.

## File structure

```
ai_build/ox_alpha/
├── index.html          # semantic skeleton + section containers
├── css/
│   ├── style.css       # layout/components (uses CSS variables only)
│   └── themes.css      # [data-theme="dark"|"light"|"brand"] variable sets
├── js/
│   ├── data.js         # window.DECADE_DATA — all content (single source of truth)
│   ├── i18n.js         # zh/en string dictionary + applyI18n()
│   └── app.js          # render, toggles, observers, lazy video/map loading
└── docs/superpowers/specs/… (this file)
```

## Theming (approach A — CSS variables)

`themes.css` defines three variable sets applied via `<html data-theme="dark|light|brand">`:

| var | dark | light | brand |
|---|---|---|---|
| --bg | #000 | #fff | #0a0a0a |
| --surface | #111 | #f7f7f7 | #141414 |
| --text | #eee | #111 | #eee |
| --accent | #00e5a0 (neon green, echoes current #00b96b) | #00875a | #d0021b / #ff2d2d glow |
| --border | rgba(255,255,255,.12) | rgba(0,0,0,.10) | rgba(255,80,80,.25) |

- Theme picker = 3 swatch buttons in navbar; persists `localStorage['decade-theme']`; default `dark`; falls back gracefully when localStorage unavailable (try/catch).
- All components must reference variables only — no hardcoded colors outside `themes.css`.

## Sections (top → bottom)

1. **Navbar** (sticky): logo (https://decade.tw/images/logo/decade_logo.png), anchor links (服務 Works 關於 聯繫), language toggle 中/EN, theme picker. Hamburger below 900px.
2. **Hero** (full viewport): headline 「互動科技解決方案」/ "Interactive Technology Solutions", subline since 2008 · 聲／光／機／神控制 · 軟硬體整合, CTAs → 案例 / 聯繫. Background: slow crossfade of 3–4 slide images from https://decade.tw/images/slide/*.png over dark gradient overlay; disabled under `prefers-reduced-motion`.
3. **Stats bar**: 成立 2009 / 18 年經驗 / 100+ 專案 / 數千裝置中控 — values computed from data where possible.
4. **Services grid**: 6 cards from 服務項目 (展場導覽系統、互動裝置設計製作、產品原型、軟體設計、電子電路開發、諮詢與演講/Arduino.TW), each icon + zh/en label.
5. **Featured works**: curated subset (~8) of the 21 YouTube projects. Cards show thumbnail `https://i.ytimg.com/vi/<id>/hqdefault.jpg` + title; **click-to-load iframe** (fixes current 21 always-on iframes). Filter tag row: 全部／燈節主燈／中控系統／機械手臂／公共藝術.
6. **Timeline**: vertical timeline from works data (2027→2006), each year a collapsible `<details>`-like block (open by default for latest year); items rendered as list entries.
7. **About brief**: condensed 公司簡介 (zh/en from PAGEX_ABOUT) + compact lists: 媒體報導 highlights, 出版品.
8. **Contact footer**: 公司資訊 (address EN/中文, 統編, victoria@decade.tw, LINE @ecz7450a, FB), social icons (FB/YT/GitHub/Mail as in current footer), Google Map iframe loaded only on scroll into view, 加入好友 LINE button, copyright + 隱私權政策 placeholder text as current. Bank account info omitted from landing (kept on old 聯繫 page).

## Data model (`js/data.js`)

```js
window.DECADE_DATA = {
  stats: {...},
  services: [{id, icon, zh, en}],
  filters: [{id, zh, en}],
  videos: [{id:'GGZHxkKLopg', zh:'', en:'', tags:['lantern','control']}],
  works: [{year: 2027, items: ['…']}],        // zh strings; EN via i18n dict where translated
  about: {zh: '…', en: '…'},
  media: [...], books: [...],
  contact: {addrZh, addrEn, vat, email, line, fb, github, mapEmbedUrl}
}
```

Video IDs extracted from existing embed URLs. EN titles provided for well-known works (台北燈節→Taipei Lantern Festival 主燈 etc.); untranslated items fall back to zh.

## i18n

- Static chrome (nav labels, buttons, headings): `data-i18n="key"` attributes + dictionary in `i18n.js`.
- Data-driven content: objects carry `{zh, en}`; render picks active lang, falls back to zh.
- Toggle sets `<html lang>`, persists `localStorage['decade-lang']`, defaults zh-TW.

## Behavior & UX

- IntersectionObserver reveal animations (fade-up), disabled with `prefers-reduced-motion`.
- Smooth anchor scrolling; sticky nav offset via `scroll-margin-top`.
- Back-to-top floating button (parity with current FloatButton.BackTop).
- Responsive: 1200/900/600 breakpoints; masonry → single column on mobile.

## Error handling

- Images: `onerror` → hide wrapper / show gradient placeholder (hero keeps gradient so failure is invisible).
- Video iframe: injected only on click; card remains clickable thumbnail with play badge; failed embed shows direct YouTube link.
- localStorage wrapped in try/catch (Safari private mode).
- Map iframe: `loading="lazy"` + only mounted when section intersects.

## Accessibility & SEO

- Semantic landmarks (`header/nav/main/section/footer`), h1 unique in hero.
- Toggle buttons have `aria-label` + `aria-pressed`.
- Visible focus outlines themed via `--accent`.
- Meta description (bilingual), Open Graph tags, canonical https://decade.tw/, favicon = logo.

## Verification plan

1. `python3 -m http.server` smoke test in `ai_build/ox_alpha/`.
2. Manual matrix: {dark, light, brand} × {zh, en} — check every section readable, no hardcoded-color leakage.
3. Mobile 390px & desktop 1440px pass (nav hamburger, grids stack).
4. Click-to-load video works; filter chips work; year collapse works.
5. `npx eslint` not applicable (no framework) — instead `node --check js/*.js` syntax check.
