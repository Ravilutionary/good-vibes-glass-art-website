# Development Log: Untouchable Smoke Shop

## [2026-03-31] - Initial Conversion & SEO Optimization
- **Converted to Astro 5:** Migrated from React/Vite to Astro 5 for superior SEO performance and minimal JS overhead.
- **Netlify Deployment Fixes:**
  - Added `netlify.toml` with `dist` as publish directory.
  - Added `.nvmrc` for Node 20 compatibility.
  - Added `NPM_FLAGS = "--legacy-peer-deps"` to resolve peer dependency conflicts between Astro 6 and Tailwind integration.
- **Marketing Audit & Fixes:**
  - Injected local SEO keywords: "Midtown ATL," "Georgia Tech," "Old Fourth Ward."
  - Added floating mobile "Call Now" button for direct conversion.
  - Enhanced "Get Directions" CTA for native map app integration.
- **SEO Fixes (Lighthouse):**
  - Created `public/robots.txt` to fix "Syntax not understood" error caused by server serving HTML for `/robots.txt`.
  - Added `public/favicon.svg` to prevent asset missing errors.
- **Handover Documentation:**
  - Created `agents.md` for project context and future AI agent instructions.
  - Created `devlog.md` (this file) for change tracking.

## [2026-03-31] - Performance Optimization (PSI Fixes)
- **Google Maps Lazy Loading:** Implemented "Click-to-Load" pattern for the map to eliminate 350KB+ of unused JS on initial load.
- **Font Optimization:** Added `&display=swap` and preloaded the primary Inter font file to reduce LCP element delay.
- **Non-Blocking CSS:** Deferred FontAwesome loading to remove it from the critical rendering path.
- **Resource Hints:** Added preloads and optimized preconnects for faster asset discovery.
