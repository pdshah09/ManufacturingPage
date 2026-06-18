# Agent Instructions

This file governs how AI agents (Codex, Claude, Copilot, etc.) should treat this codebase.

## Core Rule

**Read `STRUCTURE.md` before making any changes.**
That file is the canonical frozen architecture reference. Do not restructure, rename, or move files without explicit user instruction.

## What is allowed
- Editing component content (text, images, data)
- Adding new CSS rules to `globals.css` (append only, preserve existing rules)
- Adding new `<FeatureRow />` sections or adjusting their props
- Updating `src/data/` files
- Bug fixes

## What is NOT allowed without explicit instruction
- Renaming any file in `src/components/`
- Changing the logo from `Qvoo_long.png`
- Changing fonts (Inter + Caveat)
- Adding new npm packages / UI libraries
- Moving files between directories
- Changing CSS architecture (do not introduce CSS modules, styled-components, etc.)
- Changing the page section assembly order in `home/page.tsx`
- Modifying `--o-*` design token names or values without approval

## Commit message format
`<type>: <short description>`
Types: `feat`, `fix`, `content`, `style`, `docs`, `refactor`
