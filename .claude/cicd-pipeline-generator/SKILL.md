---
name: "CI/CD Pipeline Generator"
description: "Generate GitHub Actions, GitLab CI, or Bitbucket Pipelines configs for test, build, and deploy workflows. Use when the user mentions CI/CD, GitHub Actions, pipeline, automated deployment, continuous integration, or continuous delivery."
---
# CI/CD Pipeline Generator
## GitHub Actions Template
```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build

  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        run: echo "Deploy step here"
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
```
## Pipeline Stages
1. **Lint**: Code style and static analysis
2. **Test**: Unit + integration tests
3. **Build**: Compile/bundle
4. **Security**: Dependency audit, SAST
5. **Deploy to staging**: Auto on main
6. **Deploy to production**: Manual approval gate
