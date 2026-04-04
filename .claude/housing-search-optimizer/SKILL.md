---
name: "Housing Search Criteria Optimizer"
description: "Evaluate housing listings against requirements and budget, generate search queries, and score options. Use when the user mentions apartment hunting, housing search, rental comparison, property evaluation, or moving."
---
# Housing Search Criteria Optimizer
## Criteria Template
```
HOUSING SEARCH
==============
Location: [City / neighborhoods]
Budget: [Monthly rent max]
Type: [Apartment / Studio / Shared]
Move-in date: [Date]

MUST-HAVES:
- [ ] [Criterion — e.g., 1+ bedroom]
- [ ] [Criterion — e.g., within 30 min of work]
- [ ] [Criterion — e.g., allows pets]

NICE-TO-HAVES (weighted):
| Feature | Weight | Score if present |
|---------|--------|-----------------|
| [Feature] | [%] | [Points] |

DEAL-BREAKERS:
- [Absolute no-go — e.g., no elevator above 4th floor]
```
## Listing Evaluation
```
| Listing | Rent | Location Score | Size | Must-Haves Met | Nice-to-Have Score | Total |
```
