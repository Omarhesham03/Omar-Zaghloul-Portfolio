---
name: "CRM Data Hygiene Agent"
description: "Analyze contact and lead lists for duplicates, missing fields, and stale records with cleanup recommendations. Use when the user mentions CRM cleanup, data quality, duplicate contacts, stale leads, or database hygiene."
---
# CRM Data Hygiene Agent
## Checks
1. **Duplicates**: Match on email (exact), company+name (fuzzy), phone (normalized)
2. **Missing fields**: Flag records missing: email, company, title, phone, source
3. **Stale records**: No activity in 90+ days → review or archive
4. **Invalid data**: Malformed emails, disconnected phones, defunct companies
5. **Inconsistent formatting**: Title variations ("VP" vs "Vice President"), country codes

## Output
```
CRM HYGIENE REPORT
==================
Total records: [N]
Duplicates found: [N] ([N] merge candidates)
Missing critical fields: [N] records
Stale (90+ days): [N] records
Invalid data: [N] records

RECOMMENDED ACTIONS:
1. Merge [N] duplicate sets
2. Enrich [N] records (missing email/title)
3. Archive [N] stale records
4. Remove [N] invalid records
Net clean records: [N]
```
