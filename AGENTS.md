# Agent Instructions

This file governs how AI agents (Codex, Claude, Copilot, Perplexity, etc.) should treat this codebase.

## Core Rule

**Read `STRUCTURE.md` before making any changes.**
That file is the canonical frozen architecture reference. Do not restructure, rename, or move files without explicit user instruction.

---

## What is allowed
- Editing component content (text, images, data)
- Adding new CSS rules to `globals.css` (append only — preserve all existing rules)
- Adding new `<FeatureRow />` sections or adjusting their props
- Updating files in `src/data/`
- Bug fixes
- Editing link hrefs, social URLs, or locale list inside `Footer.tsx` data arrays

## What is NOT allowed without explicit instruction
- Renaming any file in `src/components/`
- Changing the logo from `logo.webp` or `Qvoo_long.png`
- Changing fonts (Inter + Caveat)
- Adding new npm packages or UI libraries
- Moving files between directories
- Changing CSS architecture (do not introduce CSS modules, styled-components, etc.)
- Changing the page section assembly order in `home/page.tsx`
- Modifying `--o-*` design token names or values without approval
- Adding inline `style={{}}` to any element (use `globals.css` instead)
- Restructuring the Footer DOM hierarchy (see Footer Pattern in `STRUCTURE.md`)
- Removing or renaming footer class names (`o_footer*`, `o_colored_level`, `o_cc`, `o_footer_slideout`)

---

## Footer-specific rules
- To add/remove social icons: edit the `SOCIAL_LINKS` array at the top of `Footer.tsx`
- To add/remove languages: edit the locale array inside the `.map()` in the language dropdown
- To change footer link text or hrefs: edit directly inside the relevant `<ul>` block
- Do NOT add inline styles to footer links or list items — style in `globals.css` under `.o_footer_links a`
- Do NOT change the `<li className="divider" />` pattern — it is styled in CSS

---

## Commit message format
`<type>: <short description>`
Types: `feat`, `fix`, `content`, `style`, `docs`, `refactor`
