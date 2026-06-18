# ManufacturingPage — Static Core Structure (FROZEN)

> **Do not restructure, rename, or reorganise files below without explicit instruction.**
> This document is the canonical reference for the project's architecture.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + `src/app/globals.css` (primary) |
| Fonts | Google Fonts — Inter (body) · Caveat (display/headings) |
| Logo | `public/Qvoo_long.png` (navbar + footer, `h:32–36px w:auto`, inverted in footer) |

---

## Directory Tree

```
ManufacturingPage/
├── public/
│   ├── Qvoo_long.png              ← brand logo (navbar + footer)
│   └── images/                    ← all static image assets
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             ← root layout (html + body wrapper)
│   │   ├── page.tsx               ← root redirect → /(pages)/home
│   │   ├── globals.css            ← ALL styles live here (design tokens, components, animations)
│   │   ├── not-found.tsx          ← 404 page
│   │   └── (pages)/
│   │       └── home/
│   │           └── page.tsx       ← main page — assembles all sections
│   │
│   ├── components/
│   │   ├── Navbar.tsx             ← fixed top nav, mega-menu trigger, Qvoo_long logo
│   │   ├── MegaMenu.tsx           ← full-width dropdown (Finance/Sales/HR/Marketing…)
│   │   ├── HeroSection.tsx        ← hero banner + video play button + persona bubble
│   │   ├── FeatureRow.tsx         ← alternating text+image rows (slide-left/slide-right anim)
│   │   ├── FeaturesGrid.tsx       ← 2-col card grid with staggered fade-in
│   │   ├── RelatedApps.tsx        ← 5-col app icon grid
│   │   ├── Testimonial.tsx        ← quote card + author + logo
│   │   ├── PersonaBubble.tsx      ← floating bubble overlaid on hero image
│   │   ├── VideoModal.tsx         ← full-screen iframe modal (YouTube embed)
│   │   └── Footer.tsx             ← dark footer, Qvoo_long logo, 4-col links grid
│   │
│   ├── data/
│   │   └── (static JSON / TS data files for page content)
│   │
│   └── hooks/
│       └── useAnimateOnScroll.ts  ← IntersectionObserver hook → adds .o_animated class
│
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── package.json
```

---

## CSS Architecture (`src/app/globals.css`)

All styles are co-located in a single CSS file. Sections are clearly delimited:

```
@import Google Fonts (Inter + Caveat)
@import tailwindcss

:root design tokens          — --o-brand, --o-navbar-h, --o-container-max, --o-radius,
                               --o-shadow, --o-shadow-sm, --o-shadow-hero, --o-shadow-lift,
                               --o-transition, --o-text, --o-text-dark, --o-bg-light, --o-border

Reset + base                 — box-sizing, body font, color, background
Layout                       — #wrapwrap, .container (max 1320px, fluid padding)
Skip link                    — .o_skip_to_content
Scroll animations            — .o_animate, .o_animate--slide-left, .o_animate--slide-right,
                               .o_animated (toggled by IntersectionObserver), delay modifiers
Navbar                       — .o_main_header, .o_primary_nav, .o_nav_mega_btn,
                               nav underline ::after, mobile toggle
Mega menu                    — .o_secondary_nav, megaSlideIn @keyframes
Buttons                      — .btn, .btn-primary, .btn-light, .btn-sm, .btn-lg, shimmer CTA
Hero                         — .s_wd_hero_banner, .s_wd_hero_image, doodle bg,
                               .btn_video_play, .x_wd_video_play_icon, .s_wd_persona
Text highlights              — .x_wd_green_highlight_03, .x_wd_blue_highlight_02,
                               .x_wd_red_highlight_scribble_01, .x_wd_display_circle,
                               .x_wd_display_underline, .x_wd_display_sup
Typography                   — .display-1 (Caveat hero), .display-2 (Caveat section),
                               .display-5 (label caps), .lead
Sections                     — .o_section (5.5rem padding-block), .row, .row-feature,
                               .col-text, .col-media, .paperless-float overlapping images
Features grid                — .s_wd_features_item (hover lift -4px), .features-grid (2-col)
Related apps                 — .x_wd_app_horizontal (hover lift -2px)
Users section                — .s_wd_users (bg image + brand overlay)
Testimonial                  — .testimonial-card (max-w 860px, hover shadow)
CTA                          — .s_wd_call_to_action (dark bg, shimmer btn)
Video modal                  — .video-modal-overlay, modalScale @keyframes
Footer                       — .o_footer (dark), .o_footer_grid (4-col), .o_footer_bottom
```

---

## Scroll Animation System

All scroll reveals are driven by `src/hooks/useAnimateOnScroll.ts`:

- Selects all `.o_animate`, `.o_animate--slide-left`, `.o_animate--slide-right` elements
- Uses `IntersectionObserver` with `threshold: 0.12`, fires once per element
- Adds `.o_animated` class → CSS transitions handle opacity + clip-path
- Delay variants: `--delay-1` through `--delay-4` (0.08s steps)
- Respects `prefers-reduced-motion` via CSS `@media` override

---

## Naming Conventions

| Prefix | Scope |
|---|---|
| `o_` | Odoo-origin layout / nav / footer classes |
| `s_wd_` | Odoo "website design" section classes |
| `x_wd_` | Odoo custom widget/decoration classes |
| `btn` | Button variants |
| `display-` | Caveat display typography |
| `o_animate` | Scroll animation entry classes |

---

## Page Assembly Order (`home/page.tsx`)

```
1. <Navbar />              — fixed, z-index 1030
2. <HeroSection />         — headline + CTA + video thumbnail
3. <FeatureRow />          × N  — alternating image/text sections
4. <FeaturesGrid />        — "All the features done right" 2-col cards
5. <RelatedApps />         — "One need, one app" 5-col grid
6. Users section           — 15M users full-bleed bg
7. <Testimonial />         — quote card
8. CTA section             — "On the way to Industry 4.0"
9. <Footer />              — dark 4-col links
```

---

## Rules for Future Edits

1. **All CSS lives in `globals.css`** — no inline styles, no CSS modules, no styled-components.
2. **Logo is always `Qvoo_long.png`** — never revert to any other logo file.
3. **Fonts are Inter + Caveat** — loaded via Google Fonts `@import` at top of `globals.css`.
4. **Design tokens are prefixed `--o-`** — add new tokens here, never hardcode hex values.
5. **Scroll animations via `.o_animate` classes** — do not use JS-inline style transitions.
6. **Component files are flat under `src/components/`** — no subdirectory nesting.
7. **Page content order** (section assembly) matches the Odoo reference page layout above.
8. **Container max-width is `1320px`** (`--o-container-max`) — do not widen.
9. **Navbar height is `72px`** (`--o-navbar-h`) — all hero padding-top is offset by this value.
10. **No external UI libraries** (no Ionic, no MUI, no Chakra) — Tailwind utilities + globals.css only.
