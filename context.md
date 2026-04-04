# Portfolio Context

## Project Objective
Building a professional, high-performance portfolio for Omar Zaghloul using Astro, GSAP, and Tailwind.

## Architecture & Frameworks
- **Framework**: Astro (v4+)
- **Styling**: Tailwind CSS with custom HSL variables and Clash Display font
- **Animations**: GSAP (ScrollTrigger, matchMedia, quickTo)
- **Content**: Astro Content Collections with MDX support

## Built Features
1. **Hero Section**: Full-screen dynamic hero with custom noise overlay, radial glow, and sequenced entrance animations.
2. **Project Showcase**: Pinned horizontal scroll section for desktop (GSAP ScrollTrigger) with a seamless 2-column vertical grid fallback for mobile.
3. **About Section**: Professional bio with a detailed capabilities grid using minimalist SVG icons.
4. **Project Detail Pages**: Dynamic routing (`[slug].astro`) featuring:
   - Parallax project heroes
   - Reading progress scrollbar
   - Structured content sections (Problem, Solution, Technical Decisions)
   - Next Project navigation loop
5. **Astro View Transitions**: Morphing project thumbnails between list and detail views.
6. **Micro-interactions**: 
   - Lerped Custom Cursor (circles expanding on hover)
   - Sliding link underlines
7. **Performance & SEO**:
   - WebP image optimization pipeline via `astro:assets`
   - Preloaded fonts and deferred GSAP execution
   - Comprehensive Meta Tags, JSON-LD Person Schema, Sitemap, and Robots.txt

## Tech Stack Registry
- Astro
- Tailwind CSS
- GSAP
- TypeScript

## Roadmap & Progress
- [x] Content Collection Configuration
- [x] Homepage Layout & Sections
- [x] Project Detail Template
- [x] Animations & Micro-interactions
- [x] SEO & Performance Optimization
- [x] GitHub Initialization & Push
- [x] Inject Case Study MDX Content (Final Step)

## Key Files
- `src/pages/index.astro`: Homepage
- `src/pages/projects/[slug].astro`: Project Template
- `src/layouts/BaseLayout.astro`: Core Wrapper
- `src/content/config.ts`: Schema Definition
