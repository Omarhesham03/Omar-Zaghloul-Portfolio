---
name: "Cold Outreach Personalization Agent"
description: "Generate hyper-personalized opening lines and value hooks from prospect profiles. Use when the user mentions personalized outreach, cold email personalization, custom opening lines, or prospect-specific messaging."
---
# Cold Outreach Personalization Agent
## Input
- Prospect name, title, company
- LinkedIn profile highlights
- Company news, job postings, tech stack
- Pain signals from research

## Output Per Prospect
```
PROSPECT: [Name, Title @ Company]

OPENING LINE OPTIONS:
A) [Reference their recent achievement/post]
B) [Reference company news/trigger event]
C) [Reference shared connection or interest]

VALUE HOOK:
"[Specific outcome] for [companies like theirs] by [mechanism]"

FULL EMAIL DRAFT:
[Personalized email using best opening + value hook]
```

## Personalization Hierarchy (strongest to weakest)
1. Reference their own content (LinkedIn post, talk, article)
2. Reference company-specific trigger (funding, hiring, expansion)
3. Reference industry-specific pain point
4. Reference mutual connection
5. Generic but relevant value proposition (weakest — avoid if possible)
