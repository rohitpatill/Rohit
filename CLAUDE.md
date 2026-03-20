# CLAUDE.md — NeuralForge AI Website

> This document is the single source of truth for understanding the NeuralForge AI frontend codebase. It covers project architecture, tech stack, every component, routing, styling, configuration, and the full changelog of content updates applied.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Routing](#routing)
5. [Page Breakdown](#page-breakdown)
6. [Component Reference](#component-reference)
7. [UI Component Library (shadcn/ui)](#ui-component-library-shadcnui)
8. [Styling Architecture](#styling-architecture)
9. [Configuration Files](#configuration-files)
10. [Custom Hooks & Utilities](#custom-hooks--utilities)
11. [External Dependencies & Services](#external-dependencies--services)
12. [Section ID Map (Anchor Navigation)](#section-id-map-anchor-navigation)
13. [Content Changelog](#content-changelog)
14. [Known Issues & Notes](#known-issues--notes)

---

## Project Overview

**NeuralForge AI** is a single-page marketing/portfolio website for an enterprise AI consultancy. The site showcases services (autonomous AI agents, RAG systems, MCP servers, context engineering, LLM evaluation, AI strategy), a process workflow, portfolio of delivered projects, LLM benchmarking metrics, and contact information.

- **Brand:** NeuralForge AI
- **Tagline:** Engineering Intelligence. Deploying Impact.
- **Contact:** rohitp2001k@gmail.com
- **Location:** Pune, Maharashtra, India
- **Socials:** [GitHub](https://github.com/rohitpatill) | [LinkedIn](https://linkedin.com/in/rohitpatill)

---

## Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | React | 18.3.1 |
| **Language** | TypeScript | 5.8.3 |
| **Bundler** | Vite (SWC plugin) | 5.4.19 |
| **Routing** | React Router DOM | 6.30.1 |
| **Styling** | Tailwind CSS | 3.4.17 |
| **UI Components** | shadcn/ui (Radix UI primitives) | — |
| **Animation** | Framer Motion | 11.0.0 |
| **Icons** | Lucide React | 0.462.0 |
| **Variant Management** | class-variance-authority (CVA) | 0.7.1 |
| **Class Merging** | tailwind-merge + clsx | 2.6.0 / 2.1.1 |
| **Toasts** | Sonner | 1.7.4 |
| **Charts** | Recharts | 2.15.4 |
| **Server State** | @tanstack/react-query | 5.83.0 |
| **Form State** | react-hook-form + zod | 7.61.1 / 3.25.76 |
| **Unit Testing** | Vitest + Testing Library | 3.2.4 / 16.0.0 |
| **E2E Testing** | Playwright | 1.57.0 |
| **Linting** | ESLint + typescript-eslint | 9.32.0 / 8.38.0 |
| **Fonts** | DM Sans (body), Space Grotesk (display) | Google Fonts |

---

## Project Structure

```
nexus-ai-solutions/
├── index.html                          # HTML entry — SEO meta tags live here
├── package.json                        # Dependencies & scripts
├── vite.config.ts                      # Vite config — dev server port 8080, @ alias
├── tailwind.config.ts                  # Tailwind theme, custom animations, fonts
├── tsconfig.json                       # Base TS config with @ path alias
├── tsconfig.app.json                   # App-specific TS config (ES2020, react-jsx)
├── tsconfig.node.json                  # Node-specific TS config
├── components.json                     # shadcn/ui configuration
├── postcss.config.js                   # PostCSS + autoprefixer
├── eslint.config.js                    # ESLint flat config
├── playwright.config.ts                # Playwright E2E config
├── WEBSITE-CONTENT.md                  # Content spec document (source of truth for copy)
├── CLAUDE.md                           # This file — project documentation
│
└── src/
    ├── main.tsx                        # React DOM entry point
    ├── App.tsx                         # Root component — QueryClient, Router, Toasters
    ├── App.css                         # Legacy CSS (unused, can be removed)
    ├── index.css                       # Tailwind directives, CSS variables, font imports
    ├── vite-env.d.ts                   # Vite environment type declarations
    │
    ├── assets/
    │   ├── hero-illustration.png       # Hero section illustration
    │   └── banner-person.png           # Banner section image (currently unused)
    │
    ├── pages/
    │   ├── Index.tsx                   # Home page — assembles all landing sections
    │   ├── Explained.tsx               # "How it Works" page — flowchart + services
    │   └── NotFound.tsx                # 404 catch-all page
    │
    ├── components/
    │   ├── Navbar.tsx                  # Fixed pill navbar — anchor links, mobile menu
    │   ├── HeroSection.tsx             # Hero — heading, subtext, CTAs, stats, illustration
    │   ├── LogoStrip.tsx               # Infinite scrolling tech stack carousel
    │   ├── FeaturesSection.tsx         # 6-service grid (3 columns) — id="services"
    │   ├── ProcessSection.tsx          # 4-step workflow with connecting lines — id="process"
    │   ├── BannerSection.tsx           # MCP architecture showcase with code mockup
    │   ├── ModelEvaluationSection.tsx   # LLM benchmarking + About stats — id="about"
    │   ├── ActivitySection.tsx         # Portfolio projects with sidebar filter — id="work"
    │   ├── ExplainedFlowchart.tsx      # 5-step RAG/MCP visual flow (Explained page)
    │   ├── Footer.tsx                  # Footer — brand, links, socials, email — id="contact"
    │   ├── NavLink.tsx                 # React Router NavLink wrapper (unused by Navbar now)
    │   │
    │   └── ui/                         # shadcn/ui component library (60+ components)
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx              # CVA-based — variants: default, destructive, outline, etc.
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       ├── tooltip.tsx
    │       └── use-toast.ts
    │
    ├── hooks/
    │   ├── use-mobile.tsx              # useIsMobile() — returns true if viewport < 768px
    │   └── use-toast.ts               # useToast() — toast notification state management
    │
    ├── lib/
    │   └── utils.ts                    # cn() — clsx + tailwind-merge utility
    │
    └── test/
        ├── setup.ts                    # Vitest setup (imports @testing-library/jest-dom)
        └── example.test.ts             # Sample test placeholder
```

---

## Routing

Defined in `src/App.tsx` using React Router DOM v6:

| Route | Page Component | Description |
|---|---|---|
| `/` | `Index.tsx` | Main landing page — all sections |
| `/how-it-works` | `Explained.tsx` | RAG/MCP explanation + simplified services |
| `*` | `NotFound.tsx` | 404 catch-all |

**Navigation Model:** The Navbar uses **anchor links** (`#services`, `#about`, `#process`, `#work`, `#contact`) for same-page scrolling on the home page. The `/how-it-works` route is a separate page.

---

## Page Breakdown

### Home Page (`/` — Index.tsx)

Renders sections in this order:

```
Navbar
HeroSection          — Hero banner with heading, CTAs, stats, floating badges, illustration
LogoStrip            — Scrolling tech stack carousel (OpenAI, Anthropic, Google AI, Neo4j, etc.)
FeaturesSection      — 6 services in 3-column grid (id="services")
ProcessSection       — 4-step workflow (id="process")
BannerSection        — MCP architecture showcase with code terminal mockup
ModelEvaluationSection — LLM benchmarking bars + About stats (id="about")
ActivitySection      — 3 portfolio projects with sidebar categories (id="work")
Footer               — Brand, links, socials, email input (id="contact")
```

### How It Works Page (`/how-it-works` — Explained.tsx)

```
Navbar
ExplainedFlowchart   — 5-step visual flow: User → RAG → Reasoning → MCP → Result
                       + RAG/MCP "in 10 seconds" explainer cards
Services Grid        — 4 simplified services (Chat, Shortcuts, Smart Tools, Privacy)
CTA Section          — Dark card with "Let's Talk Business" mailto link
Footer
```

### 404 Page (`*` — NotFound.tsx)

Minimal centered layout: "404" heading, message, and link back to `/`.

---

## Component Reference

### Navbar (`src/components/Navbar.tsx`)

- **Logo:** "N" icon + "NeuralForge" text
- **Links:** Services | About | Process | Work | Contact (anchor `#` links)
- **CTA:** "Start a Project" button → `#contact`
- **Behavior:** Fixed position, pill-shaped, backdrop blur, scroll-aware padding, mobile hamburger menu
- **Mobile:** Full dropdown with all links + CTA button

### HeroSection (`src/components/HeroSection.tsx`)

- **Badge:** "AI Consultancy & Automation"
- **Heading:** "Engineering Intelligence. Deploying Impact."
- **Subtext:** "We build autonomous AI agents, enterprise RAG systems, and intelligent automation..."
- **CTAs:** "Start a Project" (solid) + "Explore Services" (outline)
- **Stats:** 40+ LLMs Evaluated | 15+ MCP Servers | 20+ AI Agents Built
- **Visual:** Hero illustration with animated rotating rings, floating badges (Autonomous Agents, LLM Orchestration, Graph RAG, MCP Servicing), Context Engineering mockup card
- **Background:** Animated gradient blobs, dot grid pattern, radial gradient

### LogoStrip (`src/components/LogoStrip.tsx`)

Infinite horizontal scroll of tech stack items:
OpenAI, Anthropic, Google AI, Neo4j, LangChain, MCP Protocol, RAG Systems, GenAI Pipelines

Uses CSS `animate-scroll-logos` keyframe (defined in `tailwind.config.ts`).

### FeaturesSection (`src/components/FeaturesSection.tsx`) — `id="services"`

- **Label:** "What We Do"
- **Heading:** "AI Solutions That Deliver"
- **Subtitle:** "From autonomous agents to enterprise knowledge systems..."
- **Grid:** 3 columns, 6 cards:
  1. **Autonomous AI Agents** (highlighted/dark) — Cpu icon
  2. **Enterprise RAG & Knowledge Graphs** — Database icon
  3. **MCP Server & Tool Orchestration** — Code2 icon
  4. **Context Engineering** — BrainCircuit icon
  5. **LLM Evaluation & MLOps** — BarChart3 icon
  6. **AI Strategy & Training** — GraduationCap icon
- First card gets dark bg with white text (highlighted variant)

### ProcessSection (`src/components/ProcessSection.tsx`) — `id="process"`

- **Label:** "How We Work"
- **Heading:** "From Concept to Production"
- **Subtitle:** "A proven methodology that turns AI ambitions into deployed, optimized systems."
- **Steps** (4-column grid with connecting lines):
  1. Discovery & Audit (Search icon)
  2. Architecture & Design (Layers icon)
  3. Development & Testing (PenTool icon, dark card)
  4. Deployment & Optimization (Rocket icon)

### BannerSection (`src/components/BannerSection.tsx`)

3-column layout:
- **Left:** Unsplash tech image (`photo-1550751827-4bd374c3f58b`) with Code2 icon overlay
- **Middle:** "Specialized MCP Architectures" heading + description + "Explore MCP Solutions" CTA
- **Right:** Dark terminal mockup showing MCP connection, tool abstraction, Neo4j context, code snippets, mini bar chart

### ModelEvaluationSection (`src/components/ModelEvaluationSection.tsx`) — `id="about"`

- **Left panel:** Dark terminal showing animated progress bars:
  - Claude-3.5-Sonnet: 94% Precision
  - GPT-4o Reasoning: 89% Accuracy
  - Gemini-1.5-Pro: 92% Contextual
- **Right panel:**
  - Label: "Deep Expertise"
  - Heading: "LLM Performance Benchmarking"
  - Description about 40+ LLM evaluation expertise
  - Stats grid (2x2): 40+ LLMs Evaluated | 20+ AI Agents Built | 15+ MCP Servers | 30+ GenAI Pipelines

### ActivitySection (`src/components/ActivitySection.tsx`) — `id="work"`

- **Label:** "Our Work"
- **Heading:** "Solutions We've Engineered"
- **Subtitle:** "Real-world AI systems delivering measurable impact for enterprise clients."
- **Sidebar:** Category filter (All Projects, RAG Systems, MCP Architecture, AI Agents)
- **Project cards** (table-like rows):
  1. **Enterprise Document Intelligence** — RAG-powered, 10,000+ docs daily, 95%+ accuracy | Tag: RAG | Delivered
  2. **Hierarchical MCP Architecture** — 95.4% complexity reduction, 120+ tools, 6 service interfaces | Tag: MCP | Delivered
  3. **Multi-Agent Workflow Platform** — Drag-and-drop builder, 20+ agents, 30+ pipelines | Tag: Agents | Delivered

### ExplainedFlowchart (`src/components/ExplainedFlowchart.tsx`)

5-step visual flow (only on `/how-it-works`):
1. You Ask a Question (MessageSquare)
2. RAG: Search Your Knowledge (Database)
3. Reasoning: Thinking (Brain)
4. MCP: Taking Action (Wrench)
5. Smart Result (CheckCircle)

Plus two explainer cards: "RAG in 10 Seconds" and "MCP in 10 Seconds".

### Footer (`src/components/Footer.tsx`) — `id="contact"`

4-column grid:
1. **Brand:** "NeuralForge AI" + tagline + Location (Pune) + Email
2. **Quick Links:** Services, About, Process, Work, Contact (anchor links)
3. **Services:** AI Agents, RAG Systems, MCP Servers, Context Engineering, AI Strategy
4. **Stay Updated:** Description + email input + arrow button

Bottom bar: GitHub, LinkedIn, Mail social icons + "© 2026 NeuralForge AI. All rights reserved."

### NavLink (`src/components/NavLink.tsx`)

React Router `NavLink` wrapper with `className`/`activeClassName` support. Currently unused by Navbar (which switched to anchor `<a>` tags) but retained for potential future use.

---

## UI Component Library (shadcn/ui)

60+ pre-built components in `src/components/ui/`. Built on Radix UI primitives with Tailwind styling and CVA variants. Configured via `components.json`:

- **Style:** default
- **Base color:** slate
- **CSS variables:** enabled
- **Path aliases:** `@/components`, `@/lib/utils`, `@/hooks`

**Actively used:** `button.tsx`, `toaster.tsx`, `sonner.tsx`, `tooltip.tsx`, `toast.tsx`, `use-toast.ts`

**Available but unused:** The majority of ui/ components (accordion, dialog, form, select, etc.) are installed but not currently referenced. They remain available for future feature development (e.g., contact form, testimonials section).

---

## Styling Architecture

### Approach
- **Primary:** Tailwind CSS utility classes inline in JSX
- **Theme:** CSS custom properties (HSL format) in `src/index.css`
- **Dark mode:** Class-based (`.dark`), configured but not toggled in UI
- **Fonts:** DM Sans (body via `font-sans`), Space Grotesk (headings via `font-display`)

### Color Palette
| Token | Usage |
|---|---|
| `#9effa9` | Accent green — CTAs, highlights, badges, active states |
| `slate-900/950` | Primary dark — text, dark cards, navbar logo |
| `blue-500/600` | Secondary — icons, links, highlighted text |
| `#eef8ff` | Light background sections (process, footer, sidebar) |
| `purple-500` | Tertiary — progress bars, category icons |
| `pink-500` | Accent — progress bars, category icons |

### Custom Animations (tailwind.config.ts)
- `accordion-down` / `accordion-up` — Radix accordion expand/collapse
- `scroll-logos` — Infinite horizontal scroll for LogoStrip (`translateX(0)` → `translateX(-50%)`, 20s linear)
- `animate-float` — Referenced in HeroSection (defined externally or via Framer Motion)

### Framer Motion Patterns
Used consistently across all section components:
- `initial={{ opacity: 0, y: 20 }}` + `whileInView={{ opacity: 1, y: 0 }}` — Fade-in on scroll
- `initial={{ opacity: 0, x: -50 }}` + `whileInView={{ opacity: 1, x: 0 }}` — Slide-in from left
- `animate={{ rotate: 360 }}` with `repeat: Infinity` — Hero rotating rings
- `animate={{ scale: [1, 1.2, 1] }}` — Pulsing data points
- `viewport={{ once: true }}` — Animate only on first scroll into view

---

## Configuration Files

### vite.config.ts
```
- Dev server: host "::", port 8080
- HMR overlay: disabled
- Plugins: @vitejs/plugin-react-swc, lovable-tagger (dev only)
- Path alias: @ → ./src
```

### tailwind.config.ts
```
- Dark mode: class-based
- Container: centered, 2rem padding, max 1400px
- Fonts: DM Sans (sans), Space Grotesk (display)
- Extended colors: sidebar-*, feature-dark, feature-dark-foreground
- Custom keyframes: accordion-down/up, scroll-logos
- Plugin: tailwindcss-animate
```

### tsconfig.json / tsconfig.app.json
```
- Target: ES2020
- Module: ESNext
- JSX: react-jsx
- Strict: false (relaxed type checking)
- Path alias: @/* → ./src/*
- skipLibCheck: true
```

### components.json (shadcn/ui)
```
- Style: default
- RSC: false (not using React Server Components)
- TSX: true
- Tailwind: enabled with CSS variables
- Aliases: @/components, @/components/ui, @/lib, @/hooks
```

### Scripts (package.json)
```
npm run dev          # Start Vite dev server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # ESLint
npm run test         # Vitest (run once)
npm run test:watch   # Vitest (watch mode)
```

---

## Custom Hooks & Utilities

### `useIsMobile()` — `src/hooks/use-mobile.tsx`
Returns `boolean` — `true` when viewport width < 768px. Uses `window.matchMedia` with event listener for responsive logic.

### `useToast()` — `src/hooks/use-toast.ts`
Toast notification state management. Provides `toast()` function and `toasts` array for rendering notifications.

### `cn()` — `src/lib/utils.ts`
Combines `clsx` + `tailwind-merge` for safe Tailwind class merging. Used across all shadcn/ui components and custom components.

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

---

## External Dependencies & Services

| Resource | Type | URL/Details |
|---|---|---|
| Google Fonts | CDN | DM Sans + Space Grotesk (imported in index.css) |
| Unsplash | Image | `photo-1550751827-4bd374c3f58b` in BannerSection |
| GitHub | Social link | `github.com/rohitpatill` |
| LinkedIn | Social link | `linkedin.com/in/rohitpatill` |
| Email | Contact | `rohitp2001k@gmail.com` |

**No backend API integrations.** React Query is configured but no endpoints are called. React Hook Form and Zod are installed but unused. The newsletter/email input in the footer has no submission logic.

---

## Section ID Map (Anchor Navigation)

These IDs enable smooth scrolling from the Navbar anchor links:

| Anchor | Section Component | Element |
|---|---|---|
| `#services` | FeaturesSection | `<section id="services">` |
| `#about` | ModelEvaluationSection | `<section id="about">` |
| `#process` | ProcessSection | `<section id="process">` |
| `#work` | ActivitySection | `<section id="work">` |
| `#contact` | Footer | `<footer id="contact">` |

---

## Content Changelog

### Update: Personal Brand → NeuralForge AI (Applied 2026-03-20)

All content was updated from "Rohit Patil" personal branding to "NeuralForge AI" company branding per `WEBSITE-CONTENT.md`. UI/styling remained untouched.

#### index.html
- Title: `"rohit App"` → `"NeuralForge AI - Engineering Intelligence"`
- Meta description: `"Lovable Generated Project"` → `"NeuralForge AI - Enterprise AI Consultancy & Automation Solutions..."`
- OG title/description updated to match
- Author: `"Lovable"` → `"NeuralForge AI"`

#### Navbar.tsx
- Logo: `"R"` icon + `"Rohit Patil"` → `"N"` icon + `"NeuralForge"`
- Nav links: `How it Works | Solutions | Portfolio | Contact (mailto)` → `Services | About | Process | Work | Contact` (all anchor `#` links)
- CTA: `"Get Started"` (mailto) → `"Start a Project"` (#contact)
- Removed `react-router-dom` `Link` dependency — all navigation is now anchor-based
- Mobile menu updated to match

#### HeroSection.tsx
- Badge: `"Agentic AI Architect"` → `"AI Consultancy & Automation"`
- Heading: `"Architecting the Future of Enterprise AI with Agentic Precision"` → `"Engineering Intelligence. Deploying Impact."`
- Subtext: personal specialization → company-focused ("We build autonomous AI agents...")
- Added two CTA buttons: "Start a Project" + "Explore Services"
- Stats: added third stat "20+ AI Agents Built", changed "LLMs Tested" → "LLMs Evaluated"

#### FeaturesSection.tsx
- Label: `"Features"` → `"What We Do"`
- Heading: `"We are Excited to Present Our World Class Digital Solution"` → `"AI Solutions That Deliver"`
- Added subtitle paragraph
- Services: expanded from 4 to 6 (added Context Engineering + AI Strategy & Training)
- All service titles and descriptions updated per WEBSITE-CONTENT.md
- Grid: changed from 4 columns to 3 columns for better layout with 6 items
- Added `id="services"` for anchor navigation
- Added new icon imports: `BrainCircuit`, `GraduationCap`

#### LogoStrip.tsx
- Tech stack: `RAG, LangChain, MCP Protocol, Neo4j Graph, InfluxDB, Node/Express, AWS S3, GenAI Pipeline` → `OpenAI, Anthropic, Google AI, Neo4j, LangChain, MCP Protocol, RAG Systems, GenAI Pipelines`

#### ProcessSection.tsx
- Label: `"Our Workflow"` → `"How We Work"`
- Heading: `"How We Build Intelligence"` → `"From Concept to Production"`
- Added subtitle paragraph
- Steps updated:
  - `Discovery & Strategy` → `Discovery & Audit` (expanded description)
  - `Architecture Design` → `Architecture & Design` (expanded description)
  - `Custom Implementation` → `Development & Testing` (new description)
  - `Deployment & Scaling` → `Deployment & Optimization` (new description)
- Added `id="process"` for anchor navigation

#### ModelEvaluationSection.tsx
- Metrics updated: `AI Platforms: 10+` → `AI Agents Built: 20+`, reordered to match About stats
- Added `id="about"` for anchor navigation

#### ActivitySection.tsx
- Label: `"Portfolio"` → `"Our Work"`
- Heading: `"Featured Projects & AI Architectures"` → `"Solutions We've Engineered"`
- Added subtitle paragraph
- Categories: `MCP Ecosystem | Vibe Coding | Memory RAG | MedSymptomGPT | POC Gallery` → `All Projects | RAG Systems | MCP Architecture | AI Agents`
- Projects completely replaced:
  - `Hierarchical MCP Server` → `Enterprise Document Intelligence` (RAG, 10K+ docs, 95%+ accuracy)
  - `CodeCrafter MCP` → `Hierarchical MCP Architecture` (95.4% complexity reduction)
  - `Google Suite MCP` → `Multi-Agent Workflow Platform` (20+ agents, 30+ pipelines)
  - `Memory MCP` → removed (3 projects now, matching content doc)
- Default selected category: `"MCP Ecosystem"` → `"All Projects"`
- Added `id="work"` for anchor navigation

#### Footer.tsx
- Brand: `"Rohit Patil"` → `"NeuralForge AI"`
- Tagline: personal bio → `"Engineering intelligence. Deploying impact..."`
- Column 2: `"Solutions"` links → `"Quick Links"` with anchor navigation
- Column 3: `"Portfolio"` (NeoPilot, CodeCrafter, etc.) → `"Services"` (AI Agents, RAG Systems, etc.)
- Column 4: updated description text
- Removed Twitter social icon (not in content doc)
- Copyright: `"© 2025 Rohit Patil — AI/ML Engineer"` → `"© 2026 NeuralForge AI. All rights reserved."`
- Removed unused `Twitter` and `Instagram` imports
- Added `id="contact"` for anchor navigation

#### BannerSection.tsx
- **No changes** — MCP architecture content already aligned with WEBSITE-CONTENT.md

---

## Known Issues & Notes

1. **No backend integration** — React Query, React Hook Form, and Zod are installed but unused. No API calls exist anywhere in the codebase.
2. **Newsletter form has no submission logic** — The email input in the Footer is purely visual.
3. **Contact form not implemented** — WEBSITE-CONTENT.md specifies a full contact form (name, email, company, budget, message). This does not exist yet — only mailto links and the footer email input.
4. **Testimonials section not implemented** — WEBSITE-CONTENT.md includes 3 testimonials (Priya Sharma, Akira Tanaka, Rajesh Mehta). No testimonials component exists.
5. **About section is repurposed** — The `id="about"` is attached to ModelEvaluationSection, which shows LLM benchmarks + stats. The full About section content from WEBSITE-CONTENT.md (3 paragraphs about NeuralForge's founding) is not rendered anywhere.
6. **TypeScript strict mode disabled** — `strict: false`, `noImplicitAny: false` in tsconfig.
7. **No code splitting** — All pages load eagerly. No `React.lazy()` or dynamic imports.
8. **No error boundaries** — No React error boundary components exist.
9. **One external image hotlinked** — BannerSection uses an Unsplash URL directly. Should be downloaded to assets for reliability.
10. **Test coverage is minimal** — Only `example.test.ts` exists as a placeholder.
11. **`App.css` is unused** — Can be safely deleted.
12. **`NavLink.tsx` is unused** — Navbar switched from React Router Links to anchor tags. Component retained but not imported anywhere.
13. **60+ shadcn/ui components installed** — Most are unused. Only button, toast, toaster, sonner, and tooltip are actively referenced.
14. **Category sidebar filtering in ActivitySection is visual only** — Clicking categories updates `selected` state but doesn't filter the project list.
15. **Smooth scrolling not enabled** — Anchor links jump instantly. Add `scroll-behavior: smooth` to `html` in CSS or use `scrollIntoView({ behavior: 'smooth' })` for smooth transitions.
