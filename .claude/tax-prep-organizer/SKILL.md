---
name: "Tax Preparation Organizer"
description: "Categorize expenses, generate income summaries, and flag deductible items for tax filing. Use when the user mentions tax preparation, tax filing, deductions, income summary, tax categories, or annual tax report."
---
# Tax Preparation Organizer
## Income Summary
```
TAX YEAR: [Year]
INCOME BY SOURCE:
| Source | Type | Annual Amount | Currency | Tax Jurisdiction |
|--------|------|---------------|----------|-----------------|
| [RA Salary] | Employment | [X] | TRY | Turkey |
| [RuneX] | Self-employment | [X] | USD/TRY | Turkey |
| [Freelance] | Contract | [X] | Various | [Jurisdiction] |
```
## Deductible Expense Categories
- Business tools and software subscriptions
- Hosting and cloud services
- Home office (proportional if applicable)
- Professional development (courses, books, conferences)
- Travel for business
- Equipment (laptop, peripherals — depreciation rules apply)
- Professional services (accounting, legal)
- Communication (phone, internet — business portion)

## Output
```
TAX PREPARATION PACKAGE
========================
Total gross income: [X]
Total deductible expenses: [X]
Estimated taxable income: [X]
Documents needed: [Checklist]
Filing deadline: [Date]
Action items: [What to gather/submit]
```
**Note**: Claude provides organizational structure only. Consult a tax professional for jurisdiction-specific advice.
