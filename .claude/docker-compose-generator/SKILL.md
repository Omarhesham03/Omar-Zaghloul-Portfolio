---
name: "Docker Compose Generator"
description: "Generate docker-compose.yml files with networking, volumes, and health checks from project stack descriptions. Use when the user mentions Docker, docker-compose, container setup, containerization, or multi-service deployment."
---
# Docker Compose Generator
## Template
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/appdb
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d appdb"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    restart: unless-stopped

volumes:
  pgdata:

networks:
  default:
    name: app-network
```
## Rules
- Always include health checks for databases
- Use named volumes for persistent data
- Pin image versions (no `latest` in production)
- Use `depends_on` with condition for startup order
- Set `restart: unless-stopped` for production services
