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
- **Font Optimization:** Added `&display=swap` and preloaded the primary Inter font file to reduce LCP element delay. Made Google Fonts CSS non-blocking.
- **Non-Blocking CSS:** Deferred FontAwesome loading to remove it from the critical rendering path. Inlined Astro's main CSS bundle via `build.inlineStylesheets: 'always'` to eliminate the final render-blocking request.
- **Resource Hints:** Added preloads and optimized preconnects for faster asset discovery.
- **FontAwesome Override:** Added global `@font-face` declarations to force `font-display: swap` on Cloudflare CDN fonts, eliminating the final 20ms Lighthouse warning.

## [2026-03-31] - Accessibility Fixes (PSI)
- **Color Contrast:** Improved text contrast across the site to meet WCAG AA standards. Changed `text-gray-500` and `text-gray-600` to `text-gray-400` or `text-gray-300` on dark backgrounds. Changed `text-electric-blue` to `text-blue-400` for better visibility on charcoal backgrounds.
- **Heading Order:** Fixed non-sequential heading levels in the footer by changing `<h4>` tags to `<h3>` tags.

## [2026-04-01] - Architecture Refactoring (Phase 1)
- **Component Extraction:** Extracted `AgeGate`, `Navbar`, and `Footer` from `index.astro` into isolated components under `src/components/global/`.
- **Responsive Optimization:** Added `4xl` (2560px) breakpoints to the extracted components to ensure optimal display on extra-large presentation TVs and ultra-wide monitors.
- **Script Isolation:** Moved the Age Gate verification logic into the `AgeGate.astro` component to encapsulate its functionality.
- **Hot List Section:** Replaced the old Inventory section with a dynamic "Hot List" featuring category filtering (Vapes, Glass, All) and animated badges.
- **Peachtree Pulse Calendar:** Added a new event calendar section to showcase upcoming drops, art shows, and pop-ups.
- **Tailwind Config:** Added `purple-vibe` color to the Tailwind configuration.
- **Navigation & Hero:** Updated navigation links and hero section copy to align with the new features.
- **Footer:** Updated copyright year to 2026.

## [2026-04-01] - Architecture Refactoring (Phase 2 & 3)
- **UI Primitives:** Created `SectionHeader.astro` for reusable, consistent section titles with `4xl` responsive scaling.
- **Section Extraction:** Extracted `Hero`, `Stats`, `HotList`, `Calendar`, `LocationMap`, `Reviews`, and `VIPForm` into `src/components/sections/`.
- **Script Encapsulation:** Moved category filtering logic into `HotList.astro`, map lazy-loading into `LocationMap.astro`, and SMS validation into `VIPForm.astro`.
- **Composition Root:** Refactored `index.astro` to act solely as a composition root, importing and rendering the new components, drastically reducing its line count and complexity.
- **Comprehensive Responsiveness:** Applied `4xl` breakpoints across all newly extracted section components to guarantee a flawless experience on ultra-wide displays and presentation TVs.

## [2026-04-01] - Architecture Refactoring (Phase 4: Final Polish)
- **Floating CTA:** Updated the floating "Call Now" button in `index.astro` to include `4xl` responsive scaling, ensuring it remains visible and usable on presentation TVs.
- **Audit Complete:** The entire codebase has been successfully audited and refactored into a highly modular, maintainable, scalable, and reusable component-based architecture.
- **Responsiveness Verified:** All components and sections have been verified to support mobile, tablet, laptop, desktop, and extra-large presentation TVs (`4xl` breakpoint).
