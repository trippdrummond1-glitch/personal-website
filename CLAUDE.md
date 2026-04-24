@AGENTS.md

# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

The public-facing home for Tripp Drummond's AI + YouTube build-in-public channel — **not** a portfolio of past work, but a landing page for an ongoing mission. It shares who Tripp is, what he's making, the honest numbers, and the learnings along the way.

Design reference: [dennissnellenberg.com](https://dennissnellenberg.com) (editorial, type-forward, scroll-driven motion).

## Stack

Next.js 16 App Router · React 19 · Tailwind CSS v4 · [Motion](https://motion.dev) (`motion/react`) for animation · [Lenis](https://lenis.darkroom.engineering) for smooth scroll.

## Commands

- `npm run dev` — dev server with Turbopack at http://localhost:3000.
- `npm run lint` — ESLint (strict; passes must be clean). Run before committing.
- `npm run build` / `npm run start` — production build + serve.

No test suite.

## Project layout

- `app/page.tsx` composes sections in order: `Nav → Hero → Manifesto → About → Journey → Videos → Learnings → Footer`.
- `app/layout.tsx` wires fonts (Inter, Instrument Serif, Geist Mono), `<SmoothScroll>` (Lenis), and `<Cursor>`.
- **`app/content.ts` is the single source of editable content** — site config, the `making` rotation list, journey targets/numbers, video cards, learning cards. **Edit here first, not in components**, unless you're changing layout or behavior.
- `app/components/` holds each section + primitives (`Section`, `SmoothScroll`, `Cursor`).
- `public/tripp-portrait.jpg` is the canonical portrait (820×820, circle-cropped from a phone screenshot). Reuse it; don't regenerate.

## Design language

- Palette: `--background #f5f4ef` · `--foreground #0a0a0a` · `--muted #6b6860` · `--accent #c2410c` (amber) · `--rule` hairline at 12% foreground. Defined in `app/globals.css` via Tailwind v4 `@theme`.
- Typography: `font-display` (Instrument Serif italic, tight tracking) for hero/section headlines; Inter for body; `.mono` (Geist Mono, uppercase, letter-spaced) for labels and metadata.
- Every section uses the `<Section>` wrapper with `index="(0X)"` + `label` for the consistent hairline-separator header. Keep the numbering contiguous when adding/removing sections.
- Motion easing is `[0.22, 1, 0.36, 1]` (quart-out). Reveals use `whileInView` with `once: true, margin: "-10% 0px"`.
- The About portrait is styled via `.portrait-duotone` (grayscale base) + a `mix-blend-mode: color` amber→espresso gradient overlay. Scoped to the large About portrait only; the Nav avatar stays natural.

## Conventions

- Anything with state, effects, motion, or browser APIs needs `"use client"` at the top — default is Server Component.
- For time-derived values (days-since, etc.), use `useSyncExternalStore` not `useEffect + setState`. The React Compiler in Next 16 flags `setState` inside effects and impure functions like `Date.now()` at render.
- Channel is English-only — **don't reintroduce multilingual cycling text** on public surfaces. If borrowing a rotating-type pattern, cycle through on-mission English words (see `making` in `content.ts`).
- Screenshots saved during dev verification go to `/screenshots/` which is gitignored.

## Gotchas

- Lenis hijacks programmatic scroll; `window.scrollTo` behaves oddly in DevTools — use element `.scrollIntoView` or hash nav.
- `useScroll({ target: ref })` requires the target element to have non-static position (add `relative`), or the console warns.
- Tailwind v4 config lives in CSS (`@theme` block in `globals.css`), not a `tailwind.config.ts` — don't create one.

## Git workflow

Public repo: `trippdrummond1-glitch/personal-website`. After finishing a logical unit of edits, commit the touched files (explicit paths, no `git add .`) and push to `origin/main`. See `~/.claude/projects/C--Users-Lillian/memory/feedback_auto_push_personal_website.md` for the standing instruction.
