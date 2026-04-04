---
name: "Contract and Legal Document Reviewer"
description: "Flag risky clauses, missing protections, and unusual terms in freelance contracts, NDAs, and service agreements. Use when the user mentions contract review, legal review, clause analysis, NDA review, agreement check, or red flag detection. Not legal advice — risk flagging only."
---
# Contract and Legal Document Reviewer
## Review Checklist
### Red Flags (Critical)
- Unlimited liability clause
- Non-compete broader than project scope or lasting >12 months
- IP assignment of pre-existing work (not just deliverables)
- Automatic renewal without notice period
- Unilateral termination by client without payment for completed work
- Indemnification without cap
- Jurisdiction in unfavorable location
- Confidentiality that prevents using work in portfolio

### Yellow Flags (Negotiate)
- Payment terms >30 days
- No late payment penalties
- Scope defined vaguely ("and other tasks as needed")
- No change request process
- No termination clause or exit terms
- No limitation of liability cap
- Exclusive engagement clause

### Must-Have Protections
- [ ] Payment terms clearly stated (amount, currency, schedule)
- [ ] Scope of work explicitly defined
- [ ] IP transfer only upon full payment
- [ ] Termination clause with notice period
- [ ] Change request / scope change process
- [ ] Limitation of liability (capped at contract value)
- [ ] Dispute resolution mechanism
- [ ] Governing law specified

## Output
```
CONTRACT REVIEW
===============
Document: [Title]
Parties: [Names]
Date: [Date]

🔴 RED FLAGS:
1. [Clause reference]: [Issue] — [Risk] — [Suggested change]

🟡 YELLOW FLAGS:
1. [Clause reference]: [Issue] — [Risk] — [Suggested change]

✅ ADEQUATE:
- [Areas that are well-drafted]

MISSING CLAUSES:
- [Protection that should be added]

DISCLAIMER: This is a risk-flagging analysis, not legal advice. Consult a lawyer for binding legal decisions.
```
