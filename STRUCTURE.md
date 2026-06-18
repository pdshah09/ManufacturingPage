# STRUCTURE.md — Static Core Reference
> **Last verified:** 2026-06-18 · **Branch:** `main`
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
    │   └── Footer.tsx        ← Site footer with links + legal
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
| Footer | `.s_wd_footer` | Footer layout |
| Utilities | `.container`, `.sr-only` | Shared helpers |

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

---

## Hard Rules (Never Break Without Explicit Instruction)

1. **All CSS in `globals.css`** — no inline styles, no CSS modules, no styled-components
2. **Logo file is `Qvoo_long.png`** — always used; never replaced or renamed
3. **No external UI component libraries** — no shadcn, no MUI, no Radix (raw HTML + Tailwind only)
4. **Container max-width: 1320px** — enforced via `.container` utility class
5. **Navbar height: 72px** — do not change
6. **Fonts loaded in `layout.tsx` only** — Inter + Caveat via `next/font`
7. **No `localStorage` / `sessionStorage`** — use React state only
8. **`data/` folder for all hardcoded content** — no content strings inline in components
9. **`hooks/` folder for all custom hooks** — one hook per file
10. **Component files are flat in `src/components/`** — no subdirectories unless a new domain is added and this document is updated
