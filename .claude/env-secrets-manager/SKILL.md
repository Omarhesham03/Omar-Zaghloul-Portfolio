---
name: "Environment and Secrets Manager"
description: "Generate .env templates, document required secrets, and flag exposed credentials. Use when the user mentions environment variables, .env file, secrets management, API keys, credentials, or configuration management."
---
# Environment and Secrets Manager
## .env Template Generator
```env
# ==========================================
# [Project Name] Environment Configuration
# ==========================================
# Copy to .env and fill in values
# NEVER commit this file to git

# App
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Authentication
JWT_SECRET=          # Generate: openssl rand -hex 32
JWT_EXPIRY=24h

# External APIs
APOLLO_API_KEY=
OPENAI_API_KEY=

# Email
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
```

## Security Checklist
- [ ] .env in .gitignore
- [ ] No hardcoded secrets in source code
- [ ] Different credentials per environment (dev/staging/prod)
- [ ] Secrets rotated on team member departure
- [ ] Production secrets in vault (not .env files)
- [ ] CI/CD secrets in platform's secret manager
