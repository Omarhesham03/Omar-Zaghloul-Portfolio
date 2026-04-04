---
name: "Meeting Notes and Action Item Extractor"
description: "Extract summaries, decisions, and action items from meeting notes or transcripts. Use when the user mentions meeting notes, action items, meeting summary, transcript extraction, or follow-up email from a meeting."
---
# Meeting Notes and Action Item Extractor
## Output Template
```
MEETING SUMMARY
===============
Date: [Date]
Attendees: [Names]
Duration: [Time]

SUMMARY (3-5 sentences):
[Key discussion points and outcomes]

DECISIONS MADE:
1. [Decision] — Decided by: [Who]
2. [Decision]

ACTION ITEMS:
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | [Task] | [Name] | [Date] | Open |
| 2 | [Task] | [Name] | [Date] | Open |

OPEN QUESTIONS:
- [Unresolved question that needs follow-up]

NEXT MEETING: [Date/time if scheduled]
```

## Follow-Up Email Draft
```
Subject: Meeting Notes — [Topic] — [Date]

Hi all,

Here's a summary of today's discussion:

[2-3 sentence summary]

Action items:
• [Name]: [Task] by [Date]
• [Name]: [Task] by [Date]

Next steps: [What happens next]

Let me know if I missed anything.

Best,
[Name]
```
