---
name: "Data Migration Agent"
description: "Plan and script data migrations between databases, APIs, or file formats with validation and rollback. Use when the user mentions data migration, database migration, data transfer, schema migration, or data conversion."
---
# Data Migration Agent
## Migration Plan Template
```
DATA MIGRATION PLAN
====================
Source: [System/format]
Destination: [System/format]
Records: [Estimated count]
Downtime window: [If required]

PRE-MIGRATION:
1. [ ] Backup source data
2. [ ] Validate source data quality
3. [ ] Create destination schema
4. [ ] Test migration script on sample data
5. [ ] Estimate migration duration

MIGRATION STEPS:
1. [ ] [Step with validation criteria]
2. [ ] [Step]
3. [ ] [Step]

VALIDATION:
- [ ] Record count matches (source vs destination)
- [ ] Spot-check [N] random records
- [ ] Verify referential integrity
- [ ] Run application smoke tests

ROLLBACK PLAN:
1. [ ] Restore from backup
2. [ ] Revert schema changes
3. [ ] Verify rollback integrity
```
