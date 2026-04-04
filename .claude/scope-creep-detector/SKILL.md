---
name: "Scope Creep Detector"
description: "Analyze client messages against signed SOW to identify out-of-scope requests and draft change request responses. Use when the user mentions scope creep, out of scope, change request, additional work, or client asking for extras."
---
# Scope Creep Detector
## What This Skill Does
Compares client requests against the signed SOW deliverables and flags items that fall outside agreed scope. Generates diplomatic responses with change request documentation.
## Detection Rules
- Any feature, page, or integration not listed in SOW deliverables = out of scope
- "Small changes" that require >2 hours of work = scope change
- Design revisions beyond the agreed round count = scope change
- New user roles, languages, or platforms not specified = scope change
- Timeline acceleration requests = requires resource reallocation discussion
## Response Template
```
Hi [Client],

Thanks for the suggestion regarding [requested change]. This falls outside our current SOW scope (specifically, [reference SOW section]).

I'd be happy to accommodate this. Here's what it would involve:

- Additional effort: [X hours/days]
- Cost: [Amount]
- Timeline impact: [Extends delivery by X days / No impact]

If you'd like to proceed, I'll prepare a formal change request for your approval.

Best,
[Name]
```
