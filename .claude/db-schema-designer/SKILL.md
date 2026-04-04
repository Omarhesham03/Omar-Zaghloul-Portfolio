---
name: "Database Schema Designer"
description: "Generate ERDs, SQL schemas, migration scripts, and index strategies from requirements. Use when the user mentions database design, schema, ERD, data model, migrations, normalization, or table structure."
---
# Database Schema Designer
## What This Skill Does
Takes application requirements and outputs: entity-relationship design, SQL DDL, indexes, migration scripts, and normalization analysis.
## Process
1. Identify entities from requirements
2. Define relationships (1:1, 1:N, M:N)
3. Normalize to 3NF (denormalize intentionally with justification)
4. Add indexes for query patterns
5. Generate DDL + migration scripts

## Output Format
```sql
-- Schema: [project_name]
-- Generated: [date]
-- Engine: [PostgreSQL / MySQL / SQLite]

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);

-- Migration: 001_create_users.sql
-- Rollback: DROP TABLE IF EXISTS users;
```
## Checklist
- [ ] All entities have primary keys (UUID preferred for distributed systems)
- [ ] Foreign keys with ON DELETE behavior specified
- [ ] Indexes on all foreign keys and frequent WHERE/JOIN columns
- [ ] created_at / updated_at on all tables
- [ ] Soft delete (deleted_at) where applicable
- [ ] Check constraints for enums and ranges
- [ ] Migration scripts are idempotent
