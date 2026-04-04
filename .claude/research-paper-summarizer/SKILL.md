---
name: "Research Paper Summarizer"
description: "Summarize academic papers into structured digests: key contribution, methodology, results, limitations, and relevance. Use when the user mentions paper summary, paper review, reading digest, or wants to quickly understand a paper's content."
---

# Research Paper Summarizer

## What This Skill Does
Takes a paper (PDF, text, or title for search) and produces a structured summary optimized for rapid comprehension and literature review integration.

## Output Template

```
PAPER SUMMARY
=============
Title: [Full title]
Authors: [Author list]
Venue: [Journal/Conference, Year]
DOI/URL: [Link]

CONTRIBUTION (1-2 sentences):
[What is new — the specific advance over prior work]

PROBLEM ADDRESSED:
[What gap or limitation this paper tackles]

METHODOLOGY:
- Approach: [Algorithm/framework/method name]
- Data: [Dataset, size, source]
- Evaluation: [Metrics used]
- Baseline comparisons: [What they compared against]

KEY RESULTS:
- [Result 1 with specific numbers]
- [Result 2]
- [Main finding in one sentence]

LIMITATIONS (author-stated + reviewer-identified):
- [Limitation 1]
- [Limitation 2]

RELEVANCE TO YOUR WORK:
[How this connects to the user's research — only if context available]

BIBTEX:
@article{key,
  title={...},
  author={...},
  ...
}
```

## Batch Mode
When given multiple papers, output a comparison table:
```
| Paper | Method | Dataset | Accuracy | F1 | Key Innovation |
```
