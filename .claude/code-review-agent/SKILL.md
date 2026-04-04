---
name: "Code Review Agent"
description: "Review code for security vulnerabilities, performance issues, maintainability, and convention adherence with severity-rated findings. Use when the user mentions code review, security audit, code quality, pull request review, or technical debt assessment."
---

# Code Review Agent

## What This Skill Does
Analyzes code for security, performance, maintainability, and style. Produces a structured report with severity-rated findings and fix suggestions.

## Review Categories

### Security (Critical)
- SQL injection, XSS, CSRF vulnerabilities
- Hardcoded secrets, API keys, credentials
- Missing input validation/sanitization
- Insecure authentication/authorization patterns
- Exposed error details in production

### Performance (High)
- N+1 query patterns
- Missing database indexes for frequent queries
- Unnecessary re-renders (React)
- Unoptimized loops, redundant computations
- Missing caching where applicable
- Large payload sizes without pagination

### Maintainability (Medium)
- Functions exceeding 50 lines
- Deep nesting (>3 levels)
- Magic numbers/strings without constants
- Missing error handling
- Duplicated logic (DRY violations)
- Poor naming (single-letter variables, ambiguous names)

### Style & Convention (Low)
- Inconsistent formatting
- Missing/outdated comments
- Unused imports/variables
- Inconsistent naming convention (camelCase vs snake_case)

## Output Format
```
CODE REVIEW REPORT
==================
File(s): [paths]
Language: [language]
Lines Reviewed: [count]

FINDINGS:
[CRITICAL] Line XX: [Description]
  → Fix: [Specific recommendation]

[HIGH] Line XX: [Description]
  → Fix: [Specific recommendation]

[MEDIUM] Lines XX-YY: [Description]
  → Fix: [Specific recommendation]

SUMMARY:
Critical: [N] | High: [N] | Medium: [N] | Low: [N]
Overall: [Ship / Ship with fixes / Block]
```
