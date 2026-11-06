# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing site for **Iris by Halion** AR glasses — positioned as "assistive technology built around privacy by design" (no longer a "personal secretary"; don't reintroduce that framing). A minimalist single-page site: a pinned scroll-animated hero plus About / Team / Press / Contact sections. No backend, no database, no API routes — everything is static/client-rendered. Contact is plain `mailto:` links (there is no form backend).

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # next lint
```

There is no test suite.

## Stack

- **Next.js** (App Router) + **React 19**, TypeScript, strict mode
- **Tailwind CSS v4** — configured entirely in `src/app/globals.css` via `@import "tailwindcss"` and the `@theme` block (no `tailwind.config.js`)
- **`motion`** (`motion/react`) for all animation, `lucide-react` for icons
- `three`, `ogl`, `gsap` are installed but currently unused (kept in `next.config.mjs` `transpilePackages`)

## Architecture

One route (`src/app/page.tsx`) composing:

- **`src/components/sections/HeroSection.tsx`** — the signature pinned scroll hero: a `h-[280vh]` section with a `sticky top-0 h-svh` stage. Glasses render (`public/images/glasses.png`) sits centered under a CSS spotlight cone; scrolling drives a springed `useScroll` progress that raises the "HALION" wordmark letter-by-letter from behind the product (per-letter `useTransform` windows in `HalionLetter`). Letter timing: `start = 0.18 + index * 0.05`; pin length is the `h-[280vh]`.
- **`src/components/sections/HomeSections.tsx`** — About (statement + 75g/60°/4hr spec stats), Team (name + role rows), Contact (mailto rows), each with `useInView` entrance animations and anchor ids (`#about`, `#team`, `#contact`) that the Navbar links to.
- **`Navbar.tsx`** / **`Footer.tsx`** — fixed header with anchor links + slim single-row footer.
- **`src/components/reactbits/Noise.tsx`** — the one remaining vendored reactbits component (grain overlay), loaded with `dynamic(..., { ssr: false })`.

## Hard-won constraints (do not regress)

- **Never put `overflow-x-hidden` (or any overflow) on `<main>` or other ancestors of the hero** — it silently breaks the `position: sticky` pin. Horizontal clipping is handled by `body { overflow-x: hidden }` in `globals.css`.
- **Scroll-linked motion values must be mount-gated** (see `useMounted()` in `HeroSection.tsx`): motion serializes them into SSR markup but computes different initial values client-side, tripping React hydration. Pre-mount, static styles equal to the scroll-position-zero state are rendered instead.

## Conventions

- Everything is a client component (`'use client'`).
- Import alias `@/*` maps to `src/*`.
- Monochrome silver-on-black design system: tokens in the `@theme` block of `globals.css`; display face is `.font-podium` (JetBrains Mono, tight tracking); metallic headline fill is `.text-silver`; hero lighting is `.spotlight`, `.spotlight-beam`, `.stage-floor`, and `.glasses-img` (all in `globals.css`). Reuse these rather than inventing new colors — the palette is white/black with opacity steps (`text-white/55`, `border-white/[0.08]`, etc.).
- Sharp corners (no rounded buttons), uppercase tracked micro-labels, thin `border-white/[0.06-0.08]` dividers between sections.
