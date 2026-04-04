# Portfolio Case Studies — Draft v1
## Omar Zaghoul | RuneX

---

## PROJECT 1: OncoFlow

**Frontmatter:**
```yaml
title: "OncoFlow"
subtitle: "Oncology Clinical Pharmacist Platform"
slug: "oncoflow"
category: "Healthcare / SaaS"
role: "Full-Stack Developer & Product Designer"
year: "2025–2026"
tech:
  - Next.js
  - React
  - Supabase
  - Tailwind CSS
status: "Prototype — Actively seeking clinical partners"
thumbnail: "/projects/oncoflow/hero.png"
order: 1
```

**Hero Tagline:**
Replacing spreadsheets and paper trails in oncology wards with a unified clinical dashboard.

**The Problem:**
Oncology pharmacists track chemotherapy cycles, lab results, drug interactions, and patient timelines — often across disconnected spreadsheets, paper forms, and hospital systems that don't talk to each other. A missed lab value or a scheduling conflict in a treatment cycle isn't just inefficiency — it's a patient safety risk. The existing workflow depends on manual cross-referencing and institutional memory rather than structured, accessible data.

**The Solution:**
OncoFlow is a web-based clinical dashboard purpose-built for oncology pharmacists. It centralizes patient management into three core modules:

A **Master Calendar** that maps every patient's chemotherapy cycles, pre-medications, lab reviews, and follow-ups onto a single timeline — color-coded by event type, filterable by protocol. When a pharmacist assigns a treatment protocol to a patient, the system automatically generates the full cycle schedule, associated medications, expected symptoms, and treatment timeline — eliminating manual calendar entry and reducing scheduling errors.

A **Lab Values Tracker** organized by clinical category (hematology, renal, hepatic, coagulation, electrolytes) with historical trending and flag-worthy thresholds, so pharmacists can assess treatment readiness at a glance rather than digging through paper records.

A **Patient Registry** with search, protocol tagging (CHOP, FOLFOX, etc.), and admission tracking — giving pharmacists a structured, filterable view of their active caseload instead of a mental list.

The platform also generates printable patient reports and lab summaries — bridging the gap between the digital dashboard and the physical documentation that hospitals still require.

**Technical Decisions:**
The stack is Next.js with Supabase for auth, database, and row-level security — chosen for rapid prototyping speed without sacrificing a real permission model. The calendar uses a custom implementation rather than a third-party library, allowing treatment cycle logic (21-day CHOP cycles, dose-day mapping) to be encoded directly into the scheduling layer. Supabase's real-time subscriptions keep the dashboard current across concurrent sessions.

**Where It Stands:**
Built in collaboration with a clinical pharmacy graduate as a working prototype. Currently being refined for proposal to oncology departments and private clinics as a lightweight alternative to full-scale hospital information systems.

---

## PROJECT 2: Altinkapi

**Frontmatter:**
```yaml
title: "Altınkapı"
subtitle: "Hajj & Umrah Booking Platform"
slug: "altinkapi"
category: "Travel / E-Commerce"
role: "Full-Stack Developer"
year: "2025"
tech:
  - Next.js
  - React
  - Firebase
  - Tailwind CSS
status: "Built & delivered — Client operations currently paused"
thumbnail: "/projects/altinkapi/hero.png"
order: 2
```

**Hero Tagline:**
A premium booking platform for Hajj and Umrah pilgrimage packages, built for a travel operator serving multi-country clientele.

**The Problem:**
Altınkapı is a travel company specializing in Hajj and Umrah pilgrimage tours, serving clients across multiple countries and languages. Their booking process was entirely manual — inquiries via phone and WhatsApp, package details shared as PDFs, and no way for customers to compare options, check availability, or self-serve. For a business handling high-value, time-sensitive religious travel, the lack of a digital storefront meant lost conversions and an overwhelming operational load on a small team.

**The Solution:**
A bilingual (English/Turkish) booking platform that lets customers browse curated Hajj and Umrah packages, filter by departure city, class of service, and date, and view transparent pricing with itemized inclusions (flights, visa, hotel tiers, guided tours).

The package display system breaks down each offering with hotel proximity ratings, night splits between Makkah and Medina, and service tiers — giving customers the information density they need to make a decision without a phone call.

The platform includes dark mode, a custom package request flow for non-standard itineraries, and an admin backend for the operator to manage package inventory, pricing, and seasonal promotions.

**Technical Decisions:**
Next.js with Firebase was chosen for its hosting simplicity and real-time database — the client needed to update package availability and pricing frequently without developer intervention. Internationalization was implemented at the routing level (not just string replacement) to support proper RTL-ready architecture for potential Arabic expansion. The UI uses a gold-and-black palette drawn from the client's existing brand identity.

**Where It Stands:**
Delivered and operational. The client's business operations are currently paused for reasons unrelated to the platform. The codebase and infrastructure remain deployment-ready.

---

## PROJECT 3: EduCounsellor

**Frontmatter:**
```yaml
title: "EduCounsellor"
subtitle: "White-Label Student Application Management Dashboard"
slug: "educounsellor"
category: "EdTech / SaaS"
role: "Full-Stack Developer & Product Designer"
year: "2025–2026"
tech:
  - Next.js
  - React
  - Supabase
  - Tailwind CSS
status: "Built — Seeking first agency partner"
thumbnail: "/projects/educounsellor/hero.png"
order: 3
```

**Hero Tagline:**
Replacing WhatsApp threads and scattered spreadsheets with a centralized platform for educational counseling agencies.

**The Problem:**
Educational counseling agencies — businesses that help students apply to universities abroad — typically manage their entire workflow over WhatsApp. Student documents (transcripts, recommendation letters, visa paperwork) are shared as chat attachments. Application statuses live in the counselor's memory or a messy spreadsheet. Commission tracking from partner universities is manual. When an agency scales past 20–30 active students, this workflow collapses: documents get lost in chat history, deadlines are missed, and there's no audit trail.

**The Solution:**
A white-label SaaS dashboard designed to slot into any counseling agency's workflow without forcing them to change how they operate — just where they operate.

The **Admin Dashboard** gives agency managers a master view of all applications across all counselors, with status tracking (Preparing → Submitted → Under Review → Accepted), commission calculations, student assignment, and CSV export for reporting.

The **Student Portal** gives each applicant a personal dashboard to view their application statuses, upload required documents (with type classification and size validation), and track deadlines — eliminating the need to ask their counselor for updates over chat.

The platform is white-label by design: agency name, branding, and domain are configurable per deployment, so each organization presents it as their own tool.

**Technical Decisions:**
Supabase row-level security handles multi-tenancy — each agency's data is isolated at the database level, not just the application layer. The document vault uses Supabase Storage with signed URLs for secure, time-limited access. The system is designed for independent deployment per agency rather than a shared multi-tenant instance, keeping data sovereignty simple and avoiding the compliance complexity of shared infrastructure.

**Where It Stands:**
Feature-complete and deployment-ready. Currently seeking a first agency partner for pilot deployment and feedback iteration.

---

## PROJECT 4: Spotter

**Frontmatter:**
```yaml
title: "Spotter"
subtitle: "AI-Powered Nutrition & Fitness Companion"
slug: "spotter"
category: "Health & Fitness / Mobile"
role: "Mobile Developer & UI Designer"
year: "2025"
tech:
  - Flutter
  - Dart
  - Firebase
status: "In development — Startup currently paused"
thumbnail: "/projects/spotter/hero.png"
order: 4
```

**Hero Tagline:**
A mobile fitness companion that combines AI-driven workout recommendations with nutrition tracking and personalized dashboards.

**The Problem:**
Most fitness apps force users into one lane: either workout tracking or nutrition logging, rarely both in a way that feels integrated. Users who want a holistic view of their health — calories consumed vs. burned, workout recommendations based on their body metrics, hydration tracking, sleep patterns — end up juggling 3–4 separate apps. For casual fitness users (not bodybuilders or athletes), this fragmentation is the barrier to consistency.

**The Solution:**
Spotter is a mobile application designed as a single-surface fitness companion. The onboarding flow collects body metrics (age, weight, goals) and uses them to generate a personalized dashboard that ties together:

**Workout Discovery** — curated exercise categories (fat burning, strength, flexibility) with difficulty ratings and video guidance, plus a challenge system to maintain engagement.

**Nutrition & Hydration Tracking** — daily calorie monitoring, water intake tracking with visual progress, and macro breakdowns.

**Personal Dashboard** — a unified daily report showing active calories, water consumption, sleep quality, and recommended workouts, all derived from the user's profile data.

**AI Chat Assistant** — a built-in conversational chatbot that answers fitness and nutrition questions contextually, using the user's profile data and activity history to give personalized guidance rather than generic advice.

The UI follows a dark-mode-first mobile design language with high-contrast green accents for actionability — "Get Started," progress bars, and achievement markers all use the accent color to guide attention.

**Technical Decisions:**
Flutter was chosen for cross-platform deployment from a single codebase — critical for a startup with limited resources targeting both iOS and Android. Firebase provides auth, user data storage, and the foundation for future AI recommendation features (workout personalization based on usage patterns and progress data).

**Where It Stands:**
Core UI and onboarding flow are built. Backend integration and AI recommendation engine are in progress. The startup behind Spotter is currently paused; the project remains in active development as part of the portfolio.

---

## PROJECT 5: Reverse Swing

**Frontmatter:**
```yaml
title: "Reverse Swing"
subtitle: "Cricket Analysis & Stories Platform"
slug: "reverse-swing"
category: "Sports / Content Platform"
role: "Full-Stack Developer"
year: "2025"
tech:
  - Next.js
  - React
  - Supabase
  - Tailwind CSS
status: "Built — Pre-launch"
thumbnail: "/projects/reverse-swing/hero.png"
order: 5
```

**Hero Tagline:**
A content platform for cricket analysis, player profiles, and long-form sports writing — built for writers who care about the craft.

**The Problem:**
Cricket content online lives in two extremes: mass-market news aggregators (ESPNcricinfo, Cricbuzz) that prioritize speed and scores, and social media threads that disappear in hours. There's a gap for long-form cricket writing — tactical analysis, player career retrospectives, bowling mechanics breakdowns — presented in a reading experience that respects both the writer and the reader. Medium works but offers no sport-specific structure. WordPress works but looks like 2012.

**The Solution:**
Reverse Swing is a purpose-built publishing platform for cricket content. It combines a public-facing article site with a custom admin dashboard for content management.

The **Public Site** features a cinematic dark-themed reading experience with article cards, category filtering (Stories & Analysis), player profiles with contextual statistics, and a mobile-responsive layout designed for long reading sessions.

The **Admin Dashboard** provides a content management interface with article creation, draft/publish workflow, media file management, and per-article analytics (view tracking over time). It's built as a lightweight CMS rather than a bloated general-purpose solution — every feature exists because cricket writers need it.

**Technical Decisions:**
Supabase handles content storage, auth, and real-time analytics. The architecture is intentionally simple — no static site generation complexity, no build-time content compilation. Articles are fetched at request time from Supabase, keeping the publishing workflow instant (write → publish → live) without waiting for rebuilds. Image optimization is handled at the edge via Next.js image component and Vercel's CDN.

**Where It Stands:**
Fully functional with the admin dashboard and public reading experience complete. Currently in pre-launch — pending custom domain setup and initial content seeding before public release.

---

## NOTES FOR REVIEW:

1. **Ordering rationale:** OncoFlow first (most impressive domain + UI complexity), Altinkapi second (only project with a real paying client), EduCounsellor third (strong problem/solution narrative), Spotter fourth (mobile diversity but unfinished), Reverse Swing fifth (personal project, lowest B2B signal).

2. **Every "Where It Stands" section is honest** without being self-deprecating. No project claims users it doesn't have. No project claims to be "launched" if it isn't.

3. **Tech stack is consistent** across 4/5 projects (Next.js + React + Supabase). This is actually a strength for B2B positioning — it signals a focused, opinionated stack rather than scattered experimentation. The Flutter outlier (Spotter) adds mobile breadth.

4. **Word counts per project:** ~300-350 words each. Enough for a case study page, short enough to not feel like padding.
