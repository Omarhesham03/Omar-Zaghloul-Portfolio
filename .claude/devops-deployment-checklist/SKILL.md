---
name: "DevOps and Deployment Checklist Generator"
description: "Generate deployment checklists, CI/CD configs, and rollback procedures per stack. Use when the user mentions deployment, CI/CD, Docker, production release, rollback plan, or infrastructure setup."
---
# DevOps and Deployment Checklist Generator
## Pre-Deployment Checklist
- [ ] All tests passing (unit, integration, e2e)
- [ ] Environment variables configured for production
- [ ] Database migrations tested against production-like data
- [ ] SSL/TLS certificates valid and configured
- [ ] CORS settings updated for production domains
- [ ] Rate limiting and DDoS protection configured
- [ ] Error tracking (Sentry) configured with correct DSN
- [ ] Monitoring and health checks active
- [ ] Backup strategy verified
- [ ] Rollback plan documented and tested
- [ ] Team notified of deployment window

## Post-Deployment Checklist
- [ ] Smoke tests passing on production
- [ ] No error spike in monitoring
- [ ] Performance metrics within acceptable range
- [ ] DNS propagation complete (if applicable)
- [ ] Client/stakeholder notified

## Rollback Procedure
```
1. Identify issue (monitoring alert / user report)
2. Decision: rollback or hotfix? (if fix > 30 min → rollback)
3. Execute: [platform-specific rollback command]
4. Verify: smoke tests on rolled-back version
5. Communicate: notify stakeholders
6. Post-mortem: document what happened + prevention
```
