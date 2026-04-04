---
name: "Cron Job and Scheduler Manager"
description: "Generate cron expressions, systemd timers, and cloud scheduler configs. Use when the user mentions cron job, scheduled task, crontab, systemd timer, periodic execution, or task scheduling."
---
# Cron Job and Scheduler Manager
## Cron Expression Reference
```
┌───────── minute (0-59)
│ ┌───────── hour (0-23)
│ │ ┌───────── day of month (1-31)
│ │ │ ┌───────── month (1-12)
│ │ │ │ ┌───────── day of week (0-7, 0=Sun)
│ │ │ │ │
* * * * *
```
## Common Expressions
| Schedule | Expression | Description |
|----------|-----------|-------------|
| Every minute | `* * * * *` | Testing only |
| Every 5 min | `*/5 * * * *` | Health checks |
| Every hour | `0 * * * *` | Data sync |
| Daily at midnight | `0 0 * * *` | Backups |
| Daily at 9am | `0 9 * * *` | Reports |
| Weekdays at 9am | `0 9 * * 1-5` | Business tasks |
| Every Monday | `0 0 * * 1` | Weekly cleanup |
| 1st of month | `0 0 1 * *` | Monthly billing |

## Monitoring
- Log stdout/stderr: `* * * * * /path/to/script >> /var/log/cron.log 2>&1`
- Alert on failure: pipe to health check service (Healthchecks.io, Cronitor)
- Dead man's switch: alert if cron DOESN'T run within expected window
