---
name: "Sprint Planning Assistant"
description: "Generate sprint plans from backlog items with estimation, load balancing, and capacity planning. Use when the user mentions sprint planning, backlog grooming, story points, capacity, velocity, or iteration planning."
---
# Sprint Planning Assistant
## Process
1. **Input**: Backlog items with descriptions, priorities, and estimates
2. **Capacity check**: Team availability × velocity = sprint capacity
3. **Selection**: Pull highest-priority items up to capacity
4. **Load balancing**: Distribute across team members by skill match
5. **Output**: Sprint plan with assignments, dependencies, and risk flags

## Sprint Plan Template
```
SPRINT [N] PLAN
===============
Duration: [Start — End]
Capacity: [X story points]
Committed: [Y story points] ([Z]% of capacity)

| ID | Story | Points | Assignee | Dependencies | Status |
|----|-------|--------|----------|-------------|--------|
| [ID] | [Title] | [SP] | [Name] | [Blocked by] | To Do |

SPRINT GOAL:
[1-2 sentence objective for this sprint]

RISKS:
- [Risk + mitigation]

CARRYOVER FROM LAST SPRINT:
- [Item] — Reason: [why it wasn't completed]
```
