# Agent Guidelines & Architecture: Smoke Shop Monolith Engine

## Project Overview
This repository is a reusable, production-grade **Smoke Shop Monolith Template** built with **Astro 5**, **Tailwind CSS**, and **TypeScript**. It serves as both the live web platform for **Good Vibes Glass Art** (Loveland, CO) and a turnkey template for rapidly deploying new smoke shop clients.

---

## 🏗️ Core Architecture & Principles

### 1. Single Source of Truth (`src/config/store.ts`)
- **NEVER hardcode brand names, phone numbers, addresses, coordinates, hours, or promotional copy directly in `.astro` components or pages.**
- Always import and consume `STORE_CONFIG` from `src/config/store.ts`.
- When rebranding the site for a new client, modifying `STORE_CONFIG` must update the entire website seamlessly (Navbar, Hero, Footer, StickyBar, Map, Schema.org, AgeGate, Meta tags).

### 2. Type-Safe Content Collections (`src/content/`)
- Content is managed via Astro Content Collections configured in `src/content/config.ts`:
  - `products`: JSON schema for featured items (HotList).
  - `reviews`: JSON schema for customer testimonials.
  - `events`: Markdown files with frontmatter for local calendar drops.
  - `blog`: Markdown files with frontmatter for educational SEO guides.
- Always use `getCollection('collectionName')` to fetch content.

### 3. Compliance & Age Verification (`AgeGate.astro`)
- Smoke shops require strict 21+ age verification compliance.
- `AgeGate.astro` is paired with an inline pre-flight check in `Layout.astro` that checks `localStorage` (`store_age_verified_<id>`) to prevent layout flash.
- Must support keyboard navigation (focus trap on Enter/Escape/Tab) and modal accessibility standards.

### 4. Schema.org & Local SEO (`Layout.astro`)
- LocalBusiness / SmokeShop JSON-LD is dynamically generated in `Layout.astro` from `STORE_CONFIG`.
- Canonical URLs, OpenGraph tags, Twitter cards, and Geo-coordinates are automated.

---

## 🛠️ Development & Validation Workflow

### Dependencies
When installing packages, always use legacy peer deps flag if needed:
```bash
npm install --legacy-peer-deps
```

### Build & Typecheck Commands
Always verify your code before marking any task as complete:
```bash
npm run lint    # Runs astro check (Type validation & template syntax)
npm run build   # Validates static page compilation and sitemap generation
```

---

## 🎯 Code Quality Guidelines
- **Zero Client Bloat**: Keep UI static and performant. Use lightweight vanilla JS scripts with `define:vars` or content collection queries.
- **Accessibility**: Include skip-to-content links, ARIA attributes (`aria-expanded`, `aria-label`, `aria-hidden`), and contrast ratios.
- **Design Consistency**: Utilize the Tailwind color tokens (`deep-black`, `charcoal`, `teal-glow`, `bright-cyan`, `purple-vibe`, `gold-accent`).
