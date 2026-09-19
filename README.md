# Aura Concept Creator

A production-ready foundation for a digital creative agency website.

## Stack

- Next.js 16 App Router and React 19
- TypeScript with strict type checking
- Tailwind CSS 4
- GPU-friendly CSS animations with reduced-motion support
- React Icons for tree-shakeable icon sets
- React Bits Magic Rings powered by Three.js
- `clsx` + `tailwind-merge` via `src/lib/utils.ts`

## Commands

```bash
npm run dev        # local development
npm run check      # lint and type-check
npm run build      # optimized production build
npm run start      # serve the production build
```

Node.js 20.9 or newer is required. Keep pages as Server Components by default and
add `"use client"` only to interactive components to minimize browser JavaScript.

## Dependency notes

- `.npmrc` sets `legacy-peer-deps=true`. `lightswind` ships stale optional peer
  ranges (`framer-motion ^10–^12`, `tailwind-merge ^2.6.1`) that this project
  intentionally exceeds, so npm's strict peer resolution would abort
  `npm install` with `ERESOLVE` on clean installs (including Vercel builds).
- `package-lock.json` is committed and pins React to 19.2.8 because
  `@react-three/fiber` currently requires `react >=19 <19.3`. Keep the lockfile
  in sync (`npm install`) instead of deleting it.
