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
npm run dev:clean  # reset the .next cache, then start local development
npm run clean      # reset the .next cache only
npm run check      # lint and type-check
npm run build      # optimized production build
npm run start      # serve the production build
```

Node.js 20.9 or newer is required. Keep pages as Server Components by default and
add `"use client"` only to interactive components to minimize browser JavaScript.

## Troubleshooting

### Links stop navigating (for example `/about` does nothing)

This is a stale dev-server state, not a routing bug: after a broken/saved
intermediate import the running `next dev` keeps a corrupt module graph in
`.next`, so the RSC payload for the target route keeps failing and the client
router silently falls back to a full page load that never renders.

Recover with:

```bash
# stop the current dev server (Ctrl+C), then:
npm run dev:clean
```

If a browser tab is still open on the broken session, hard-refresh it once
(Ctrl+Shift+R) so the old client runtime is discarded.


## Dependency notes

- `.npmrc` sets `legacy-peer-deps=true`. `lightswind` ships stale optional peer
  ranges (`framer-motion ^10–^12`, `tailwind-merge ^2.6.1`) that this project
  intentionally exceeds, so npm's strict peer resolution would abort
  `npm install` with `ERESOLVE` on clean installs (including Vercel builds).
- `package-lock.json` is committed and pins React to 19.2.8 because
  `@react-three/fiber` currently requires `react >=19 <19.3`. Keep the lockfile
  in sync (`npm install`) instead of deleting it.
