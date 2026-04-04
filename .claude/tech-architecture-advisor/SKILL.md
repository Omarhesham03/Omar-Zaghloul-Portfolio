---
name: "Technical Architecture Advisor"
description: "Recommend tech stacks, hosting solutions, and architecture patterns with cost estimates and scaling risk analysis. Use when the user mentions architecture decision, tech stack selection, infrastructure planning, system design, hosting choice, or scalability assessment."
---

# Technical Architecture Advisor

## What This Skill Does
Takes project requirements and produces a technology recommendation with justification, cost estimates, scaling analysis, and risk flags.

## Decision Framework

### Input Required
- Project type (website, SaaS, API, mobile app, automation)
- Expected users/traffic (now and 12-month projection)
- Budget constraints
- Team skills
- Timeline
- Compliance requirements (GDPR, KVKK, HIPAA)

### Output
```
ARCHITECTURE RECOMMENDATION
============================
Project: [Name]

RECOMMENDED STACK:
Frontend: [Framework] — [why]
Backend: [Language/Framework] — [why]
Database: [DB] — [why]
Hosting: [Provider/Plan] — [why]
CI/CD: [Tool] — [why]
Monitoring: [Tool] — [why]

ARCHITECTURE PATTERN: [Monolith / Microservices / Serverless / Hybrid]
Justification: [2-3 sentences]

COST ESTIMATE (monthly):
| Component | Service | Tier | Monthly Cost |
|-----------|---------|------|-------------|
| Hosting | [Provider] | [Plan] | $X |
| Database | [Service] | [Plan] | $X |
| CDN | [Service] | [Plan] | $X |
| **Total** | | | **$X** |

SCALING RISKS:
- [Risk 1]: [Mitigation]
- [Risk 2]: [Mitigation]

ALTERNATIVES CONSIDERED:
| Option | Pros | Cons | Why Not |
```

## Decision Heuristics
- < 1K users, simple CRUD → Monolith (Next.js/Django/Laravel)
- 1K-50K users, moderate complexity → Monolith with clear module boundaries
- 50K+ users or complex domains → Consider microservices (but only if team can handle operational complexity)
- Event-heavy, async workloads → Serverless functions + message queue
- Budget < $50/month → Static site + BaaS (Supabase/Firebase)
