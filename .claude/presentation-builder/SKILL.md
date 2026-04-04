---
name: "Presentation Builder"
description: "Convert papers, chapters, or research into defense-style or conference slide outlines with speaker notes and anticipated Q&A. Use when the user mentions presentation, slides, defense slides, conference talk, keynote, or speaker notes."
---

# Presentation Builder

## What This Skill Does
Takes academic or business content and generates structured presentation outlines with slide-by-slide content, speaker notes, figure suggestions, and anticipated questions.

## Presentation Types

### Thesis Defense (45-60 min)
```
Slide 1: Title slide (title, name, supervisor, date, institution)
Slide 2: Outline / Agenda
Slides 3-5: Problem Statement & Motivation
Slides 6-8: Literature Review (key gaps only — not exhaustive)
Slides 9-14: Methodology (architecture, pipeline, algorithms)
Slides 15-20: Results (tables, charts, comparisons)
Slides 21-23: Discussion (limitations, implications)
Slide 24: Conclusion & Future Work
Slide 25: Thank You / Questions
Backup slides: Detailed tables, proofs, additional results
```

### Conference Talk (15-20 min)
```
Slide 1: Title
Slide 2: Problem (1 slide, punchy)
Slide 3: Key Insight / Contribution (1 slide)
Slides 4-6: Approach
Slides 7-9: Results (best results, comparison table, demo if possible)
Slide 10: Conclusion + Future Work
```

## Per-Slide Format
```
SLIDE [N]: [Title]
Content: [Bullet points or visual description]
Visual: [Figure/chart/diagram suggestion]
Speaker Notes: [What to say — 30-60 seconds of talking points]
Transition: [How to connect to next slide]
```

## Anticipated Q&A Generator
Given the content, generate 10-15 likely questions organized by:
- **Methodology questions**: "Why did you choose X over Y?"
- **Results questions**: "How do you explain the drop in accuracy for..."
- **Scope questions**: "Did you consider..."
- **Future work questions**: "How would this scale to..."
Each question gets a concise suggested answer (3-4 sentences).
