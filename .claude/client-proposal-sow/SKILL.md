---
name: "Client Proposal and SOW Generator"
description: "Generate professional client proposals, statements of work (SOW), and project scopes with pricing, deliverables, timelines, risk flags, and payment terms. Use when the user mentions proposal, SOW, quote, project scope, pricing breakdown, client deliverables, engagement terms, or freelance/agency project documentation. Supports bilingual (EN/AR) output and agency contexts."
---

# Client Proposal and SOW Generator

## What This Skill Does
Creates structured, professional proposals and SOWs for software development, web design, automation, and consulting engagements. Includes pricing tiers, milestone-based payment schedules, risk matrices, and scope boundaries.

## Prerequisites
- Project requirements (from user or client brief)
- Target currency and market context
- Output format preference (Markdown, DOCX, PDF)

---

## Quick Start

1. User describes the project (e.g., "bilingual website with AI chatbot for a Saudi company").
2. Claude generates a complete SOW with: scope, deliverables, timeline, pricing, payment terms, exclusions, risk flags.
3. Output in requested format.

---

## SOW Template Structure

### 1. Cover / Header
```
[Company Logo Placeholder]
STATEMENT OF WORK
Prepared for: [Client Name]
Prepared by: [Agency Name]
Date: [Date]
Version: [1.0]
Valid until: [Date + 30 days]
```

### 2. Executive Summary
2-3 sentences: what will be delivered, core value proposition, and timeline overview.

### 3. Scope of Work

**In-Scope Deliverables Table:**

| # | Deliverable | Description | Milestone |
|---|-------------|-------------|-----------|
| 1 | Discovery & Requirements | Stakeholder interviews, technical audit | M1 |
| 2 | UI/UX Design | Wireframes, mockups, 2 revision rounds | M2 |
| 3 | Frontend Development | Responsive implementation | M3 |
| 4 | Backend / Integrations | API, CMS, third-party services | M3 |
| 5 | Testing & QA | Cross-browser, performance, security | M4 |
| 6 | Deployment & Handover | Production deploy, documentation, training | M5 |

**Out-of-Scope (Explicit Exclusions):**
- Content creation / copywriting (unless specified)
- Ongoing hosting and maintenance (separate retainer)
- Third-party license fees
- Hardware procurement
- Scope changes after sign-off (handled via change request process)

### 4. Timeline

```
M1: Discovery          [Week 1-2]
M2: Design             [Week 3-4]
M3: Development        [Week 5-8]
M4: Testing & QA       [Week 9-10]
M5: Launch & Handover  [Week 11-12]
```

**Dependencies / Assumptions:**
- Client provides content/assets by [date]
- Client feedback within 3 business days per review cycle
- Access to client's hosting/domain by M3

### 5. Pricing

**Option A — Fixed Price:**

| Phase | Cost |
|-------|------|
| Discovery | $X |
| Design | $X |
| Development | $X |
| QA & Launch | $X |
| **Total** | **$X** |

**Option B — Tiered Packages:**

| Feature | Basic | Standard | Premium |
|---------|-------|----------|---------|
| Pages | 5 | 10 | 20+ |
| CMS | No | Yes | Yes |
| Chatbot | No | No | Yes |
| Multilingual | No | Yes | Yes |
| Price | $X | $X | $X |

**Pricing Rules Claude Should Follow:**
- Always quote in client's preferred currency
- For Egyptian/MENA market: adjust rates to local purchasing power
- Include VAT/tax note if applicable
- Never quote hourly without a cap estimate
- Flag if client budget seems misaligned with scope

### 6. Payment Terms

**Default milestone-based schedule:**
- 30% upon SOW signing (non-refundable deposit)
- 30% upon design approval (M2 completion)
- 30% upon development completion (M4)
- 10% upon final delivery and acceptance (M5)

**Late payment clause:** Invoices due within 14 days. Work pauses after 7 days overdue.

### 7. Risk Matrix

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Scope creep | High | High | Change request process with written approval |
| Client delays (feedback/assets) | Medium | High | Timeline extends day-for-day; clause in contract |
| Third-party API changes | Low | Medium | Abstract integrations; document fallback |
| Key person unavailability | Low | High | Document all work; cross-train if team |
| Payment default | Medium | High | Milestone-gated delivery; IP transfer on final payment only |

### 8. Terms and Conditions

**IP Ownership:** All deliverables become client property upon final payment. Source code, design files, and documentation transfer on completion.

**Warranty:** 30-day bug-fix warranty post-launch. Does not cover new features, content changes, or third-party service failures.

**Termination:** Either party may terminate with 14 days written notice. Client pays for completed milestones plus work-in-progress.

**Confidentiality:** Both parties agree to keep project details confidential.

---

## Advanced Options

### Bilingual Output (EN/AR)
When client is Arabic-speaking:
- Generate SOW in English (primary) with Arabic summary section
- Use RTL formatting for Arabic blocks
- Currency in SAR/EGP/AED as appropriate

### Discount / Trial Pricing
For new client acquisition or family/referral:
```
Standard rate: $X
Discounted trial (first project): $X * 0.7  (30% discount)
Condition: Discount applies to first engagement only.
Step-up: Standard rates apply from second project onward.
Written agreement required before work begins.
```

### Change Request Process
```
1. Client submits change request in writing
2. Claude/PM assesses impact (time, cost, scope)
3. Revised quote provided within 2 business days
4. Work proceeds only after written approval of revised quote
```

---

## Troubleshooting

### Issue: Client wants fixed price but scope is vague
**Solution:** Propose a paid discovery phase ($X for 1-2 weeks) that produces a detailed spec. Fixed-price quote follows discovery.

### Issue: Budget significantly below market rate
**Solution:** Claude flags the misalignment, suggests scope reduction (fewer pages, no chatbot, template-based), and presents tiered options.

### Issue: Client wants all IP before final payment
**Solution:** Offer escrow arrangement or partial IP transfer at each milestone. Flag risk to user.
