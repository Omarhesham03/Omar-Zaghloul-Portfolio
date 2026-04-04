---
name: "Game Wiki and Data Scraper"
description: "Pull and structure game data including patch notes, item stats, and tier lists from game wikis. Use when the user mentions patch notes, item stats, tier list, game data, champion stats, or game wiki information."
---
# Game Wiki and Data Scraper
## Data Types
- **Patch notes**: Changes per version, organized by category (champions, items, systems)
- **Item stats**: Cost, stats, passives, build paths
- **Character stats**: Base stats, scaling, abilities, cooldowns
- **Tier lists**: Current meta rankings with context

## Output Format
```
[GAME] DATA EXTRACT — Patch [Version]
======================================

CHARACTER: [Name]
Role: [Role]
Tier: [S/A/B/C/D]
Win Rate: [%] | Pick Rate: [%] | Ban Rate: [%]

BASE STATS:
| Stat | Value | Per Level |
|------|-------|-----------|

ABILITIES:
| Key | Name | Cooldown | Description |
|-----|------|----------|-------------|

RECOMMENDED BUILD:
| Slot | Item | Cost | Key Stat |
|------|------|------|----------|

RECENT CHANGES:
- Patch [X]: [Change description]
```
