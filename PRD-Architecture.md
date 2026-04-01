# Product Requirements Document (PRD): Component-Driven Architecture Refactoring

## 1. Executive Summary
**Project:** Untouchable Smoke Shop (Astro 5 + Tailwind CSS)
**Objective:** Transition the current monolithic codebase into a highly modular, maintainable, scalable, and reusable component-based architecture.
**Current State:** The application currently relies on a massive `index.astro` file (~480 lines) containing all page sections, global elements (Navbar, Footer, Age Gate), and inline scripts. 
**Future State:** A clean, component-driven structure where UI primitives, page sections, and global elements are isolated, easily testable, and reusable across future pages.

## 2. Goals & Success Metrics
- **Modularity:** Break down `index.astro` into isolated, single-responsibility components.
- **Reusability:** Create a library of UI primitives (Buttons, Cards, Badges) that can be reused without duplicating Tailwind classes.
- **Maintainability:** Ensure any developer can locate and update a specific section (e.g., the Calendar) without navigating unrelated code.
- **Scalability:** Lay the groundwork for adding new pages (e.g., `/about`, `/products`, `/contact`) by reusing global layouts and components.
- **Success Metric:** `index.astro` should be reduced to < 50 lines of code, acting purely as a composition root. Zero regressions in Lighthouse scores (Performance, Accessibility, SEO).

## 3. Architectural Audit (Current Bottlenecks)
1. **Monolithic Page Structure:** `src/pages/index.astro` contains the Age Gate, Navbar, Hero, Hot List, Calendar, VIP Form, and Footer.
2. **Global CSS Dependency:** `src/layouts/Layout.astro` contains component-specific CSS (`.hot-card`, `.category-pill`) which should ideally be scoped to their respective Astro components.
3. **Script Entanglement:** Client-side JavaScript for the Age Gate, Map Lazy Loading, and Category Filtering are all bundled at the bottom of `index.astro`.
4. **Hardcoded UI Patterns:** Buttons, section headers, and gradients are manually coded in multiple places rather than using a shared component.

## 4. Proposed Directory Structure
We will adopt a structure inspired by Atomic Design and modern Astro best practices:

```text
src/
├── components/
│   ├── ui/                 # Reusable primitives (Atoms/Molecules)
│   │   ├── Button.astro
│   │   ├── SectionHeader.astro
│   │   ├── Badge.astro
│   │   └── Card.astro
│   ├── sections/           # Page-specific sections (Organisms)
│   │   ├── Hero.astro
│   │   ├── HotList.astro
│   │   ├── Calendar.astro
│   │   └── VIPForm.astro
│   └── global/             # Site-wide elements
│       ├── Navbar.astro
│       ├── Footer.astro
│       └── AgeGate.astro
├── layouts/
│   └── Layout.astro        # Base HTML shell, SEO meta tags, global fonts
├── pages/
│   └── index.astro         # Composition of components
└── scripts/                # Shared client-side logic (if needed)
```

## 5. Execution Plan (Phased Approach)

### Phase 1: Global Elements Extraction
- Create `src/components/global/AgeGate.astro` and extract HTML/JS.
- Create `src/components/global/Navbar.astro`.
- Create `src/components/global/Footer.astro`.
- Update `index.astro` to import and use these components.

### Phase 2: UI Primitives (The Design System)
- Create `src/components/ui/SectionHeader.astro` (Title + Subtitle + Gradient styling).
- Create `src/components/ui/Button.astro` (Primary, Secondary, Outline variants).
- Refactor existing HTML to use these primitives.

### Phase 3: Section Components Extraction
- Create `src/components/sections/Hero.astro`.
- Create `src/components/sections/HotList.astro` (Move `.hot-card` and `.category-pill` CSS and filtering JS here).
- Create `src/components/sections/Calendar.astro` (Move `.event-row` CSS here).
- Create `src/components/sections/VIPForm.astro`.

### Phase 4: Script & Style Isolation
- Ensure all `<style>` and `<script>` tags within Astro components are properly scoped.
- Verify that lazy-loading logic (Maps) and state (Age Gate) function correctly in their isolated components.
- Run a final Lighthouse audit to ensure performance remains at 100/100.

## 6. Technical Guidelines
- **Astro Components:** Use `.astro` files for all static and lightly-interactive components to maintain zero-JS-by-default performance.
- **Props:** Use TypeScript interfaces in the frontmatter (`---`) of Astro components to define strict props (e.g., `interface Props { title: string; variant?: 'primary' | 'secondary'; }`).
- **Styling:** Continue using Tailwind CSS. For complex component styles, use the `<style>` tag within the `.astro` file to keep styles scoped and maintainable.
- **Client Directives:** If any React/Preact/Solid components are introduced later, strictly use `client:load`, `client:idle`, or `client:visible` to manage hydration. (Currently, vanilla JS in `<script>` tags is sufficient).
