---
name: "Log Analyzer"
description: "Analyze application logs to identify error patterns, frequency, and root causes. Use when the user mentions log analysis, error logs, log parsing, debugging logs, or application errors."
---
# Log Analyzer
## Process
1. Parse log format (detect: JSON, structured, unstructured)
2. Extract errors, warnings, exceptions
3. Cluster by error type/message
4. Rank by frequency and recency
5. Identify root cause patterns
6. Suggest fixes

## Output
```
LOG ANALYSIS REPORT
===================
Period: [Start — End]
Total entries: [N]
Errors: [N] | Warnings: [N] | Info: [N]

TOP ERRORS (by frequency):
| # | Error | Count | First Seen | Last Seen | Trend |
|---|-------|-------|-----------|-----------|-------|
| 1 | [Error message] | [N] | [Date] | [Date] | [↑↓→] |

ROOT CAUSE ANALYSIS:
Error cluster 1: [Pattern]
  Likely cause: [Diagnosis]
  Suggested fix: [Action]
  Affected: [Components/endpoints]

ANOMALIES:
- [Unusual pattern detected]
```
