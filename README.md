# 🌿 High-Conversion Smoke Shop Web Template & Monolith Engine

> **Production-grade, ultra-fast, data-driven web engine designed for smoke shops, head shops, glass galleries, and vapor dispensaries.**

Built with **Astro 5**, **Tailwind CSS**, and **TypeScript Content Collections**, this template enables agencies and store owners to deploy fully branded, geo-optimized local smoke shop websites in under 5 minutes by updating a single configuration file (`src/config/store.ts`).

---

## ⚡ Key Architectural Features

- **🎯 100% Parameterized Store Configuration (`src/config/store.ts`)**: Rebrand the entire site—name, address, coordinates, hours, hero copy, trust badges, review count, phone numbers, landmarks, and lead offers—without touching any UI code.
- **🛡️ Synchronized Age Gate Modal (`AgeGate.astro`)**: Compliance-ready, zero-flicker 21+ age verification modal with localStorage synchronization, escape key handling, and ARIA focus trap.
- **📍 Schema.org LocalBusiness JSON-LD & Geo-SEO**: Automated structured data injection with exact geo-coordinates, operating hours, price ranges, and local area service tags.
- **📦 Type-Safe Content Collections (`src/content/`)**:
  - `products/` (JSON schemas for featured hot items, tags, categories, pricing, badges)
  - `reviews/` (JSON schemas for customer testimonials, ratings, platform sources)
  - `events/` (Markdown with frontmatter for community gatherings, 4/20 drops, and showcases)
  - `blog/` (SEO-focused guides, educational content, and buyer checklists)
- **🗺️ Complete Navigation & Route Coverage**:
  - `/events` & `/events/[slug]` (Active community calendar and event details)
  - `/blog` & `/blog/[slug]` (Buyer guides and educational content)
  - `/glass`, `/vapes`, `/cigars`, `/hookah` (High-converting category landing pages)
  - `/vendors` & `/careers` (B2B vendor onboarding and hiring inquiry forms)
  - `/404` (Custom themed error page)
- **🚀 Ultra-Fast Static Site Generation (SSG)**: Zero client-side framework bloat, sub-second TTFB, 100 Lighthouse performance, and automated XML sitemap generation.

---

## 🚀 Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to view the live site with hot module reloading.

### 3. Type Checking & Validation
```bash
npm run lint
```

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ Deploying a New Client in 5 Minutes

To deploy this monolith for a new smoke shop client:

### Step 1: Update Store Config (`src/config/store.ts`)
Open `src/config/store.ts` and customize your client's information:
```typescript
export const STORE_CONFIG: StoreConfig = {
  name: "Your Smoke Shop Name",
  legalName: "Your Smoke Shop LLC",
  tagline: "Premier Glass, Vapes & Botanicals",
  city: "Denver",
  state: "CO",
  phone: "(303) 555-0199",
  address: {
    street: "123 Main Street",
    city: "Denver",
    state: "CO",
    zip: "80202"
  },
  // ... coordinates, hours, hero copy, trust badges, landmarks, and offers
};
```

### Step 2: Update Content (`src/content/`)
- **Products**: Add/edit JSON files in `src/content/products/`
- **Reviews**: Add/edit JSON files in `src/content/reviews/`
- **Events**: Add/edit Markdown files in `src/content/events/`
- **Blog Posts**: Add/edit Markdown files in `src/content/blog/`

### Step 3: Configure Base URL (`astro.config.mjs`)
Set your client's canonical production domain:
```javascript
export default defineConfig({
  site: "https://yourclientdomain.com",
  // ...
});
```

### Step 4: Deploy
Deploy instantly to **Cloudflare Pages**, **Vercel**, **Netlify**, or **AWS S3 + CloudFront**:
- **Build command**: `npm run build`
- **Output directory**: `dist`

---

## 📁 Directory Structure

```
├── astro.config.mjs          # Astro configuration & sitemap integration
├── tailwind.config.mjs       # Custom smoke shop design system tokens
├── src/
│   ├── config/
│   │   └── store.ts          # Central source of truth for store metadata & copy
│   ├── content/              # Type-safe content collections
│   │   ├── blog/             # Educational & SEO articles
│   │   ├── events/           # Local events & drop parties
│   │   ├── products/         # Hot list & featured showcase products
│   │   ├── reviews/          # Local verified Google/Yelp reviews
│   │   └── config.ts         # Zod schemas for all content collections
│   ├── components/
│   │   ├── global/           # Navbar, Footer, AgeGate, MobileStickyBar
│   │   ├── sections/         # Hero, Stats, HotList, Reviews, LocationMap, Calendar, VIPForm
│   │   └── ui/               # Reusable Button, Badge, Card components
│   ├── layouts/
│   │   └── Layout.astro      # Master layout (SEO, Schema.org, AgeGate pre-flight, OpenGraph)
│   └── pages/
│       ├── index.astro       # High-conversion home landing page
│       ├── glass.astro       # Category: American Glass & Heady Rigs
│       ├── vapes.astro       # Category: Disposables & Pods
│       ├── cigars.astro      # Category: Hand-rolled Cigars & Humidor
│       ├── hookah.astro      # Category: Hookahs, Shisha & Coals
│       ├── vendors.astro     # B2B Wholesaler / Artist onboarding
│       ├── careers.astro     # Job application & culture page
│       ├── 404.astro         # Custom branded 404 page
│       ├── blog/             # Blog index & dynamic post templates
│       └── events/           # Events index & dynamic event templates
└── public/
    ├── robots.txt            # Search engine crawl rules & sitemap reference
    └── images/               # Product photos, artist galleries, logos
```

---

## 🎨 Theme & Color Palette

The template uses an electric neon glassblowing aesthetic defined in `tailwind.config.mjs`:
- `deep-black` (`#0B0C10`): Deep obsidian background
- `charcoal` (`#1F2833`): Card & container surface color
- `teal-glow` (`#66FCF1`): Primary interactive neon cyan
- `bright-cyan` (`#45A29E`): Accent teal & badge borders
- `purple-vibe` (`#8A2BE2`): Ambient backlights and neon glow effects
- `gold-accent` (`#FFD700`): 5-star review highlights & awards

---

## 📄 License
MIT © 2026. Built for high-volume local retail scaling.
