# Agent Handover: Untouchable Smoke Shop

## Project Overview
This is a high-conversion, SEO-optimized landing page for **Untouchable Smoke Shop** located in Midtown Atlanta (533 Peachtree St NE). The primary goal is to drive foot traffic and capture leads via SMS marketing.

## Tech Stack
- **Framework:** Astro 5.4.2 (Static Site Generation)
- **Styling:** Tailwind CSS (Utility-first)
- **Deployment:** Netlify (Configured via `netlify.toml`)
- **Node Version:** 20 (Specified in `.nvmrc`)

## Key Features & SEO Strategy
1. **Local SEO:** Targeted keywords for Midtown ATL, Georgia Tech, and Old Fourth Ward are baked into the copy and metadata.
2. **Schema.org:** JSON-LD `SmokeShop` schema is implemented in `Layout.astro` for enhanced Google Maps visibility.
3. **Age Gate:** Mandatory 21+ verification script in `index.astro`.
4. **SMS Opt-in:** Lead capture form with honeypot protection.
5. **Mobile-First:** Floating "Call Now" button and large touch targets.
6. **Performance:** Zero-JS overhead where possible, utilizing Astro's static nature.

## Critical Instructions for Future Agents
- **Maintain Performance:** Do not add heavy client-side libraries unless strictly necessary.
- **SEO First:** Any content changes must consider local SEO keywords.
- **Netlify Compatibility:** Keep `NPM_FLAGS = "--legacy-peer-deps"` in `netlify.toml` to avoid peer dependency conflicts with Astro 5/Tailwind.
- **Validation:** Always run `npm run lint` (Astro check) before finishing.

## Current Status
- [x] Astro 5 Conversion
- [x] Netlify Deployment Fixes
- [x] Local SEO Keywords Injected
- [x] Floating Call Button Added
- [x] robots.txt SEO Fix Implemented
