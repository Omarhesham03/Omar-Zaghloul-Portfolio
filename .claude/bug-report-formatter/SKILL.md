---
name: "Bug Report and Issue Formatter"
description: "Standardize bug reports with reproduction steps, expected vs actual behavior, severity, and environment details. Use when the user mentions bug report, issue template, defect report, QA documentation, or bug tracking."
---
# Bug Report and Issue Formatter
## Template
```
BUG REPORT
==========
ID: [BUG-YYYY-NNN]
Title: [Short descriptive title]
Severity: [Critical / High / Medium / Low]
Priority: [P1 / P2 / P3 / P4]
Reporter: [Name]
Date: [Date]
Environment: [Browser, OS, device, API version]

DESCRIPTION:
[1-2 sentence summary]

STEPS TO REPRODUCE:
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED BEHAVIOR:
[What should happen]

ACTUAL BEHAVIOR:
[What actually happens]

SCREENSHOTS/LOGS:
[Attached or linked]

ADDITIONAL CONTEXT:
[Frequency, workaround if any, related issues]
```
## Severity Definitions
- **Critical**: System down, data loss, security breach, no workaround
- **High**: Major feature broken, significant user impact, workaround exists but painful
- **Medium**: Feature partially broken, minor user impact, easy workaround
- **Low**: Cosmetic, typo, minor UX inconvenience
