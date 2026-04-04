---
name: "Student Feedback Composer"
description: "Generate constructive, specific feedback on student submissions including code, reports, and presentations. Use when the user mentions grading feedback, student comments, assignment feedback, or peer review comments for students."
---

# Student Feedback Composer

## What This Skill Does
Takes a student submission and rubric, generates specific, constructive feedback that identifies strengths, areas for improvement, and actionable next steps.

## Feedback Principles
- **Specific**: "Your loop on line 12 runs in O(n²) — consider using a hash map for O(n)" not "improve efficiency"
- **Constructive**: Frame improvements as opportunities, not failures
- **Balanced**: At least 1 positive for every 2 improvements
- **Actionable**: Every criticism includes a concrete suggestion
- **Educational**: Explain *why* something is wrong, not just *that* it's wrong

## Feedback Template
```
FEEDBACK: [Assignment Name]
Student: [ID/Name]
Score: [X/Total]

STRENGTHS:
✓ [Specific positive observation]
✓ [Specific positive observation]

AREAS FOR IMPROVEMENT:
△ [Issue]: [Explanation + specific suggestion]
△ [Issue]: [Explanation + specific suggestion]

SUMMARY:
[2-3 sentences: overall assessment + most important next step]
```
