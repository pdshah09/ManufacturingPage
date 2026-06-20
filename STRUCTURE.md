# STRUCTURE.md — Static Core Reference
> **Last verified:** 2026-06-20 · **Branch:** `main`
> This file is the single source of truth for the project's core architecture.
> Do NOT rename files, move components, or change the stack without updating this document.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + `src/app/globals.css` |
| Fonts | Inter (body) · Caveat (accent/handwritten) |
| State | React hooks only — no external state library |
| Animations | Custom `useAnimateOnScroll` hook → IntersectionObserver |
| Package manager | npm (`package-lock.json` present) |

---

## Directory Tree

```
ManufacturingPage/
├── STRUCTURE.md              ← THIS FILE — do not delete
├── AGENTS.md                 ← AI agent rules
├── CLAUDE.md                 ← Claude-specific instructions
├── README.md
├── .gitignore
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── package.json
├── package-lock.json
│
├── public/                   ← Static assets (images, logos, favicon)
│   └── images/
│       ├── logo.webp         ← Primary logo (NEVER rename or replace)
│       └── Qvoo_long.png     ← Long-form logo variant (ALWAYS use this, never swap)
│
└── src/
    ├── app/
    │   ├── layout.tsx        ← Root layout — fonts, metadata, <body>
    │   ├── globals.css       ← ALL styles (Tailwind + custom CSS)
    │   └── home/
    │       └── page.tsx      ← Home page — assembles all sections in order
    │
    ├── components/           ← One file per UI component
    │   ├── Navbar.tsx        ← Sticky top nav, 72px height, logo + links + CTA
    │   ├── MegaMenu.tsx      ← Dropdown mega menu triggered from Navbar
    │   ├── HeroSection.tsx   ← Full-width hero with headline, subtext, CTAs
    │   ├── FeaturesGrid.tsx  ← Grid of feature cards
    │   ├── FeatureRow.tsx    ← Alternating image+text row (reusable)
    │   ├── PersonaBubble.tsx ← Floating persona/avatar UI element
    │   ├── Testimonial.tsx   ← Single testimonial card
    │   ├── RelatedApps.tsx   ← Horizontal scroll of related app tiles
    │   ├── VideoModal.tsx    ← Lightbox video modal
    │   └── Footer.tsx        ← Site footer — see Footer Pattern below
    │
    ├── data/                 ← Static data files (JSON / TS constants)
    │
    └── hooks/
        └── useAnimateOnScroll.ts  ← IntersectionObserver scroll animation hook
```

---

## Page Assembly Order (`src/app/home/page.tsx`)

Components render in this exact sequence — do not reorder:

1. `<Navbar />`
2. `<HeroSection />`
3. `<FeaturesGrid />`
4. `<FeatureRow />` (repeatable — alternates image side)
5. `<PersonaBubble />`
6. `<Testimonial />`
7. `<RelatedApps />`
8. `<VideoModal />`
9. `<Footer />`

---

## Scroll Animation System

```
useAnimateOnScroll.ts
  └── attaches IntersectionObserver to elements with class .o_animate
        └── adds class .o_animated when element enters viewport
              └── CSS in globals.css drives the actual transition
```

- Add `o_animate` to any element you want to animate on scroll.
- CSS defines the before/after states; the hook only toggles the class.
- Respect `prefers-reduced-motion` — the hook already checks this.

---

## CSS Architecture (`src/app/globals.css`)

All styles live here. Sections are named with block comments:

| Section | Class namespace | Purpose |
|---|---|---|
| Tailwind directives | — | `@tailwind base/components/utilities` |
| Design tokens | `:root` variables | Colors, spacing, radius, font refs |
| Base resets | `html, body, *` | Box-sizing, smoothing, scroll |
| Scroll animations | `.o_animate` / `.o_animated` | IntersectionObserver state |
| Navbar | `.s_wd_navbar`, `.x_wd_navbar` | Nav layout + sticky behaviour |
| Hero | `.s_wd_hero`, `.x_wd_hero` | Hero section layout |
| Feature grid | `.s_wd_features` | Grid cards |
| Feature row | `.s_wd_feature_row` | Alternating rows |
| Buttons | `.btn`, `.btn-primary`, `.btn-ghost` | CTA button variants |
| Typography | `.display-*` | Heading display sizes |
| Footer | `.o_footer`, `.o_footer_container`, `.o_footer_row`, `.o_footer_col`, `.o_footer_incol`, `.o_footer_side`, `.o_footer_title`, `.o_footer_links`, `.o_footer_social_media`, `.o_footer_copyright`, `.o_footer_logo_img`, `.o_colored_level`, `.o_cc`, `.o_footer_slideout` | Footer layout + all subparts |
| Utilities | `.container`, `.sr-only` | Shared helpers |

---

## Footer Pattern (`src/components/Footer.tsx`)

The footer is structured as follows — do not restructure this DOM hierarchy:

```
<footer id="bottom" .o_footer>
  <div id="footer" .o_footer_container.container>
    <Image logo />                        ← logo.webp, inverted, centered
    <div .o_footer_row.row>

      <!-- LEFT: link columns -->
      <div .o_footer_col.col-12.col-lg-7.col-xl-6>
        <div .o_footer_row.row>
          <div .o_footer_incol.col-12.col-md-4>   ← Community + Open Source (nested row)
          <div .col-6.col-md-4>                   ← Services
          <div .col-6.col-md-4>                   ← About us
        </div>
      </div>

      <!-- RIGHT: lang selector + description + social -->
      <div .o_footer_side.col-12.col-lg-5.col-xl-5.offset-xl-1>
        language dropdown (.js_language_selector)
        <hr />
        description <p> blocks
        social icons (.o_footer_social_media) — SOCIAL_LINKS array mapped
      </div>

    </div>
  </div>

  <!-- COPYRIGHT BAR -->
  <div .o_footer_copyright>
    Powered-by link + logo
  </div>
</footer>
```

**Footer constants (top of file):**
- `SOCIAL_LINKS` array — icon + href pairs; edit here to add/remove socials
- Language dropdown — rendered via `.map()` over a locale array; add/remove locales in that array only

**Footer rules:**
- No inline `style={{}}` on links or list items — all styles in `globals.css` under `.o_footer_links a`
- `Image` (Next.js) for top logo only; plain `<img>` for flag images and copyright logo
- `aria-expanded="false"` on the language button by default
- `<li className="divider" />` used as a visual spacer between link groups (styled in CSS, not inline)

---

## Naming Conventions

| Prefix | Meaning | Example |
|---|---|---|
| `s_wd_` | Section wrapper | `s_wd_navbar` |
| `x_wd_` | Element inside section | `x_wd_navbar_logo` |
| `btn` | Button | `btn btn-primary` |
| `display-` | Display heading size | `display-xl` |
| `o_animate` | Animate-on-scroll trigger | `o_animate` |
| `o_animated` | State after animation fires | `o_animated` |
| `o_footer*` | Footer subparts | `o_footer_title`, `o_footer_links` |
| `o_colored_level` / `o_cc` | Footer theme modifiers | (do not remove) |

---

## Hard Rules (Never Break Without Explicit Instruction)

1. **All CSS in `globals.css`** — no inline styles, no CSS modules, no styled-components
2. **Logo file is `logo.webp`** — always used; never replaced or renamed
3. **No external UI component libraries** — no shadcn, no MUI, no Radix (raw HTML + Tailwind only)
4. **Container max-width: 1320px** — enforced via `.container` utility class
5. **Navbar height: 72px** — do not change
6. **Fonts loaded in `layout.tsx` only** — Inter + Caveat via `next/font`
7. **No `localStorage` / `sessionStorage`** — use React state only
8. **`data/` folder for all hardcoded content** — no content strings inline in components
9. **`hooks/` folder for all custom hooks** — one hook per file
10. **Component files are flat in `src/components/`** — no subdirectories unless a new domain is added and this document is updated
11. **Footer DOM structure is frozen** — do not restructure the footer hierarchy; only edit content (links, text, socials) inside the existing nodes
12. **Footer styles live in `globals.css`** — no inline `style={{}}` on footer links, list items, or containers
