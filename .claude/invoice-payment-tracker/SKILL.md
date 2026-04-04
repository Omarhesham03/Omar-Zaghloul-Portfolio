---
name: "Invoice and Payment Tracker"
description: "Generate invoices from SOW milestones, track payment status, and draft follow-up emails for overdue payments. Use when the user mentions invoice, billing, payment tracking, overdue payment, accounts receivable, or financial tracking for client projects."
---

# Invoice and Payment Tracker

## What This Skill Does
Generates professional invoices from SOW milestone data, maintains payment status tracking, and produces follow-up communications for overdue accounts.

## Invoice Template
```
INVOICE
=======
Invoice #: [RUNEX-YYYY-NNN]
Date: [Issue date]
Due Date: [Issue date + 14 days]

FROM:
[Agency Name]
[Address]
[Tax ID if applicable]

TO:
[Client Name]
[Client Company]
[Client Address]

PROJECT: [Project Name]
SOW Reference: [SOW ID]
Milestone: [M# — Description]

| Item | Description | Amount |
|------|-------------|--------|
| [Milestone deliverable] | [Brief description] | [Currency] [Amount] |
| | | |
| **Subtotal** | | [Amount] |
| VAT/Tax ([X]%) | | [Amount] |
| **Total Due** | | **[Amount]** |

PAYMENT DETAILS:
Bank: [Bank name]
Account: [Account number]
IBAN: [IBAN]
SWIFT: [SWIFT code]
Reference: [Invoice number]

TERMS: Payment due within 14 days. Late payments subject to [X]% monthly interest.
```

## Payment Status Tracker
```
| Invoice # | Client | Amount | Issued | Due | Status | Days Overdue |
|-----------|--------|--------|--------|-----|--------|-------------|
| RUNEX-2026-001 | Client A | $3,000 | Mar 1 | Mar 15 | PAID | — |
| RUNEX-2026-002 | Client B | $2,500 | Mar 10 | Mar 24 | OVERDUE | 6 |
```

## Overdue Follow-up Sequence
- **Day 1 overdue**: Friendly reminder email
- **Day 7 overdue**: Firm reminder with invoice re-attached
- **Day 14 overdue**: Final notice — work pauses, late fee applied
- **Day 30 overdue**: Formal demand letter
