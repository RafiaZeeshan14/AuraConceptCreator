# Aura Concept Creator

A production-ready foundation for a digital creative agency website.

## Stack

- Next.js 16 App Router and React 19
- TypeScript with strict type checking
- Tailwind CSS 4
- Motion for intentional UI animation
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
