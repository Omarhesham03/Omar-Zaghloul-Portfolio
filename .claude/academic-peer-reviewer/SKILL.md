---
name: "Academic Peer Reviewer"
description: "Simulate a conference/journal peer review of a paper draft. Use when the user mentions peer review, paper feedback, submission review, reviewer comments, or wants to pre-screen a paper before submission. Outputs structured feedback with scores per criterion in IEEE/ACM review format."
---

# Academic Peer Reviewer

## What This Skill Does
Reads a paper draft and produces a structured review mimicking IEEE/ACM conference review forms. Evaluates across standard criteria with numeric scores and detailed written feedback.

## Review Template

```
PAPER REVIEW
============
Title: [Paper title]
Venue: [Target conference/journal]
Review Date: [Date]

OVERALL RECOMMENDATION: [Strong Accept / Accept / Weak Accept / Borderline / Weak Reject / Reject]
CONFIDENCE: [High / Medium / Low]

SCORES (1-5 scale):
- Novelty/Originality:     [X/5]
- Technical Soundness:      [X/5]
- Clarity of Presentation:  [X/5]
- Significance/Impact:      [X/5]
- Related Work Coverage:    [X/5]
- Experimental Evaluation:  [X/5]
- Reproducibility:          [X/5]

SUMMARY (3-5 sentences):
[What the paper does, main contribution, overall assessment]

STRENGTHS:
S1: [Specific strength with reference to section/figure]
S2: [...]
S3: [...]

WEAKNESSES:
W1: [Specific weakness — not vague. "Section 3.2 lacks..." not "could be better"]
W2: [...]
W3: [...]

DETAILED COMMENTS:
[Section-by-section feedback, technical errors, missing references, unclear notation]

MINOR ISSUES:
[Typos, formatting, citation format errors, figure quality]

QUESTIONS FOR AUTHORS:
Q1: [Specific question that would strengthen the paper if answered]
Q2: [...]
```

## Review Principles
- Be specific: cite section numbers, equations, figures
- Be constructive: every weakness should have a suggested fix
- Be fair: acknowledge what works before criticizing
- Be calibrated: compare against realistic venue standards, not perfection
- Never fabricate references the paper "should have cited" — only suggest topics to cover
