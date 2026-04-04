---
name: "Time Zone Meeting Scheduler"
description: "Find optimal meeting times across time zones and generate calendar invite text. Use when the user mentions time zone, scheduling across zones, international meeting, what time is it in, or meeting time coordination."
---
# Time Zone Meeting Scheduler
## Process
1. Input: participant locations/time zones + preferred hours
2. Calculate overlapping windows
3. Rank by convenience (minimize early/late meetings)
4. Generate meeting invite text

## Output
```
MEETING TIME FINDER
===================
Participants:
- [Name]: [City/TZ] — Available [HH:MM-HH:MM local]
- [Name]: [City/TZ] — Available [HH:MM-HH:MM local]

BEST OPTIONS:
| Option | [TZ1] | [TZ2] | [TZ3] | Convenience Score |
|--------|-------|-------|-------|-------------------|
| 1 | [Time] | [Time] | [Time] | [Score] |
| 2 | [Time] | [Time] | [Time] | [Score] |

RECOMMENDED: Option [N] — [Reason]

CALENDAR INVITE TEXT:
Subject: [Meeting topic]
When: [Date, Time + timezone]
(That's [Time TZ1] / [Time TZ2] / [Time TZ3])
Where: [Link]
```

## Common Reference
| City | UTC Offset | DST |
|------|-----------|-----|
| Istanbul | UTC+3 | No DST |
| Cairo | UTC+2 | No DST |
| London | UTC+0/+1 | Mar-Oct |
| Dubai | UTC+4 | No DST |
| New York | UTC-5/-4 | Mar-Nov |
| San Francisco | UTC-8/-7 | Mar-Nov |
