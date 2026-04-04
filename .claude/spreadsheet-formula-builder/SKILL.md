---
name: "Spreadsheet Formula Builder"
description: "Generate Excel and Google Sheets formulas from natural language descriptions with explanations. Use when the user mentions Excel formula, Google Sheets formula, VLOOKUP, pivot table, spreadsheet calculation, or conditional formatting."
---
# Spreadsheet Formula Builder
## Process
1. User describes the calculation in plain language
2. Claude generates the formula for Excel and/or Google Sheets
3. Claude explains each component
4. Claude identifies edge cases (empty cells, errors, data types)

## Output Format
```
FORMULA: =[formula]
PLATFORM: [Excel / Google Sheets / Both]

EXPLANATION:
[Step-by-step breakdown of what each function does]

EXAMPLE:
Input: [Sample data]
Output: [Expected result]

EDGE CASES:
- If cell is empty: [What happens]
- If text instead of number: [What happens]
- Error handling: [IFERROR wrapper if needed]

ALTERNATIVE:
[Simpler or more robust version if applicable]
```

## Common Formula Patterns
| Need | Formula | Notes |
|------|---------|-------|
| Lookup | `=VLOOKUP(key, range, col, FALSE)` | Use INDEX/MATCH for flexibility |
| Conditional count | `=COUNTIFS(range1, criteria1, range2, criteria2)` | Multiple conditions |
| Conditional sum | `=SUMIFS(sum_range, criteria_range1, criteria1)` | Multiple conditions |
| Text extract | `=MID(cell, start, length)` | Or LEFT/RIGHT |
| Date diff | `=DATEDIF(start, end, "d")` | Days between dates |
| Running total | `=SUM($A$1:A1)` | Lock start, float end |
