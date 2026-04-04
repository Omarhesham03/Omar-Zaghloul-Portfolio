---
name: "Boilerplate Project Scaffolder"
description: "Generate project boilerplate with preferred configs, linting, folder structure, and development setup. Use when the user mentions project setup, starter template, boilerplate, scaffold, new project, or project initialization."
---
# Boilerplate Project Scaffolder
## Supported Stacks
| Stack | Framework | Includes |
|-------|-----------|----------|
| Frontend | Next.js / React / Vue / Svelte | TypeScript, Tailwind, ESLint, Prettier |
| Backend | Express / FastAPI / Django / NestJS | TypeScript/Python, ORM, validation, auth |
| Full-stack | Next.js + Prisma / T3 Stack | Full type safety, DB, auth, deployment |
| API | FastAPI / Express | OpenAPI docs, validation, error handling |
| Static | Astro / Hugo / 11ty | MDX, SEO, sitemap |

## Generated Structure
```
[project-name]/
├── src/
│   ├── [framework-specific structure]
├── tests/
├── .env.example
├── .gitignore
├── .eslintrc.js / .flake8
├── .prettierrc
├── Dockerfile
├── docker-compose.yml
├── README.md
├── package.json / requirements.txt
└── tsconfig.json / pyproject.toml
```

## Checklist (every scaffold includes)
- [ ] TypeScript / type hints configured
- [ ] Linting and formatting configured
- [ ] .env.example with documented variables
- [ ] .gitignore (comprehensive for stack)
- [ ] README with setup instructions
- [ ] Basic test setup
- [ ] Docker support
- [ ] CI/CD template (GitHub Actions)
- [ ] Health check endpoint (backend)
- [ ] Error handling middleware (backend)
