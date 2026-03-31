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
