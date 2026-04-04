---
name: "Pricing Calculator"
description: "Calculate project pricing from parameters like pages, features, integrations, and timeline using a configurable rate card. Use when the user mentions pricing, quote, cost estimate, rate card, project cost, or how much to charge."
---
# Pricing Calculator
## Rate Card (Default — adjust per market)
| Service | Unit | Rate (USD) | Rate (EGP) | Rate (SAR) |
|---------|------|-----------|------------|------------|
| Static page | per page | $150-300 | — | — |
| Dynamic page (CMS) | per page | $300-500 | — | — |
| Custom feature | per feature | $500-2000 | — | — |
| API integration | per integration | $300-800 | — | — |
| AI chatbot | per bot | $800-2000 | — | — |
| UI/UX design | per page | $200-400 | — | — |
| Multilingual setup | per language | $200-500 | — | — |
| Maintenance retainer | per month | $200-500 | — | — |

## Calculation
```
Base cost = Σ (unit × rate)
Complexity multiplier = 1.0 (simple) / 1.3 (moderate) / 1.6 (complex)
Rush multiplier = 1.0 (standard) / 1.25 (<4 weeks) / 1.5 (<2 weeks)
Total = Base × Complexity × Rush
Margin = Total × 1.2 (20% margin minimum)
```
## Output
```
PRICING ESTIMATE
================
Project: [Name]
Client: [Name]

| Item | Qty | Unit Rate | Subtotal |
|------|-----|-----------|----------|
| [Item] | [N] | $[X] | $[Total] |
| **Base Total** | | | **$[X]** |
| Complexity ([level]) | | ×[X] | $[X] |
| Rush ([if applicable]) | | ×[X] | $[X] |
| **Final Quote** | | | **$[X]** |

Payment: [Milestone schedule]
Valid until: [Date + 14 days]
```
