---
name: "Project Status Report Generator"
description: "Generate client-facing weekly updates with progress, blockers, and next steps from task lists or Kanban state. Use when the user mentions status report, weekly update, progress report, client update, or project report."
---
# Project Status Report Generator
## What This Skill Does
Takes current task state (completed, in-progress, blocked) and generates a professional client-facing status report.
## Report Template
```
PROJECT STATUS REPORT
=====================
Project: [Name]
Period: [Date range]
Overall Status: [🟢 On Track / 🟡 At Risk / 🔴 Blocked]

COMPLETED THIS PERIOD:
✓ [Task 1] — [brief outcome]
✓ [Task 2] — [brief outcome]

IN PROGRESS:
→ [Task 1] — [% complete, ETA]
→ [Task 2] — [% complete, ETA]

BLOCKED / AT RISK:
⚠ [Issue] — [impact] — [what's needed to unblock]

UPCOMING (NEXT PERIOD):
• [Task 1]
• [Task 2]

CLIENT ACTION ITEMS:
☐ [Action needed from client] — due [date]

METRICS:
- Sprint velocity: [X points completed / Y planned]
- Milestone progress: [M# — X% complete]
- Budget consumed: [X% of total]
```
