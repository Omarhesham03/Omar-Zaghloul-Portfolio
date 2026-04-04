---
name: "Monitoring and Alerting Setup Agent"
description: "Configure uptime monitoring, error tracking, and alert rules for web applications. Use when the user mentions monitoring, alerting, uptime, Sentry, health checks, or application observability."
---
# Monitoring and Alerting Setup Agent
## Monitoring Stack
| Layer | Tool | Purpose |
|-------|------|---------|
| Uptime | UptimeRobot / Healthchecks.io | Is the site up? |
| Errors | Sentry | What errors are happening? |
| Performance | Web Vitals / Lighthouse CI | Is it fast? |
| Logs | Application logging | What happened? |
| Infrastructure | Render/Vercel dashboard | Resource usage |

## Alert Rules
| Condition | Severity | Channel | Action |
|-----------|----------|---------|--------|
| Site down >2 min | Critical | SMS + Email | Investigate immediately |
| Error rate >1% | High | Slack + Email | Check within 1 hour |
| Response time >3s | Medium | Slack | Review within 24 hours |
| SSL expiry <14 days | Medium | Email | Renew certificate |
| Disk >80% | Medium | Email | Clean up or scale |

## Health Check Endpoint
```javascript
app.get('/health', (req, res) => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    checks: {
      database: checkDb(),
      redis: checkRedis(),
      memory: process.memoryUsage()
    }
  };
  res.json(health);
});
```
