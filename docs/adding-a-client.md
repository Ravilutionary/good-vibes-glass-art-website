# 🚀 Onboarding a New Smoke Shop Client (10-Minute Guide)

This monorepo allows you to launch a brand new, SEO-optimized, WCAG AA compliant smoke shop website for any client in **under 10 minutes**.

---

## Step 1: Run the CLI Generator
In your terminal, execute:
```bash
npm run new-client
```
Fill out the interactive prompts (Store Name, Address, Phone, Site URL, Theme Palette).

---

## Step 2: Test Locally
To start the local development server for your new client:
```bash
SITE_ID=your-client-slug npm run dev
```
Open `http://localhost:3000` in your browser to preview the live site.

---

## Step 3: Available Color Themes
Select from one of our pre-built high-converting color palettes in `src/clients/<slug>/config.ts`:
- `neon-cyberpunk` (Teal glow, electric cyan, deep black)
- `luxury-gold` (Rich gold, warm black, bronze accents)
- `herbal-emerald` (Emerald green, forest black, mint accents)

---

## Step 4: Toggle Feature Flags
Customize which pages and components appear for the client in `config.ts`:
```typescript
features: {
  hasGlassGallery: true,
  hasVapes: true,
  hasCigars: false,
  hasHookah: false,
  hasEventsCalendar: true,
  hasBlog: true,
  hasVendorProgram: false,
  hasCareersCta: false,
}
```

---

## Step 5: Deploy
To build all clients sequentially:
```bash
npm run build:all
```
Or to build a single client for deployment:
```bash
SITE_ID=your-client-slug npm run build
```
Upload the generated `dist/` directory to Netlify, Vercel, Cloudflare Pages, or AWS S3.
