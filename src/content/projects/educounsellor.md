---
title: "EduCounsellor"
subtitle: "White-Label Student Application Management Dashboard"
category: "EdTech / SaaS"
role: "Full-Stack Developer & Product Designer"
year: "2025–2026"
tech:
  - Next.js
  - React
  - Supabase
  - Tailwind CSS
status: "Built — Seeking first agency partner"
thumbnail: "../../assets/projects/educounsellor/Educounselor.png"
order: 3
heroTagline: "Replacing WhatsApp threads and scattered spreadsheets with a centralized platform for educational counseling agencies."
problem: "Educational counseling agencies — businesses that help students apply to universities abroad — typically manage their entire workflow over WhatsApp. Student documents (transcripts, recommendation letters, visa paperwork) are shared as chat attachments. Application statuses live in the counselor's memory or a messy spreadsheet. Commission tracking from partner universities is manual. When an agency scales past 20–30 active students, this workflow collapses: documents get lost in chat history, deadlines are missed, and there's no audit trail."
solution: "A white-label SaaS dashboard designed to slot into any counseling agency's workflow without forcing them to change how they operate — just where they operate.\n\nThe Admin Dashboard gives agency managers a master view of all applications across all counselors, with status tracking (Preparing → Submitted → Under Review → Accepted), commission calculations, student assignment, and CSV export for reporting.\n\nThe Student Portal gives each applicant a personal dashboard to view their application statuses, upload required documents (with type classification and size validation), and track deadlines — eliminating the need to ask their counselor for updates over chat.\n\nThe platform is white-label by design: agency name, branding, and domain are configurable per deployment, so each organization presents it as their own tool."
technicalDecisions: "Supabase row-level security handles multi-tenancy — each agency's data is isolated at the database level, not just the application layer. The document vault uses Supabase Storage with signed URLs for secure, time-limited access. The system is designed for independent deployment per agency rather than a shared multi-tenant instance, keeping data sovereignty simple and avoiding the compliance complexity of shared infrastructure."
whereItStands: "Feature-complete and deployment-ready. Currently seeking a first agency partner for pilot deployment and feedback iteration."
---
