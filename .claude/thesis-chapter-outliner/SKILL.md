---
name: "Thesis Chapter Outliner"
description: "Generate thesis chapter structures with section flow, argument arcs, and content allocation from a research question and data. Use when the user mentions thesis outline, chapter structure, thesis organization, argument flow, or dissertation planning."
---

# Thesis Chapter Outliner

## What This Skill Does
Takes a research question, methodology summary, and available results to propose a complete thesis structure with per-chapter outlines, section breakdowns, and page allocation estimates.

## Standard MSc Thesis Structure

```
Chapter 1: Introduction (8-12 pages)
  1.1 Background and Context
  1.2 Problem Statement
  1.3 Research Questions / Objectives
  1.4 Contributions
  1.5 Thesis Organization

Chapter 2: Literature Review (15-25 pages)
  2.1 [Theme 1]
  2.2 [Theme 2]
  2.3 [Theme N]
  2.4 Summary and Research Gaps

Chapter 3: Methodology (15-20 pages)
  3.1 System Overview / Architecture
  3.2 [Component 1 - e.g., Data Collection]
  3.3 [Component 2 - e.g., Feature Engineering]
  3.4 [Component 3 - e.g., Model Design]
  3.5 Implementation Details

Chapter 4: Experimental Setup and Results (15-25 pages)
  4.1 Experimental Setup
  4.2 Evaluation Metrics
  4.3 Results
  4.4 Comparative Analysis
  4.5 Discussion

Chapter 5: Conclusion and Future Work (5-8 pages)
  5.1 Summary of Contributions
  5.2 Limitations
  5.3 Future Work

References
Appendices
```

## Argument Arc Rules
- Each chapter must end by motivating the next chapter
- Chapter 2 must end with the gap that Chapter 3 addresses
- Chapter 4 results must directly answer the research questions from Chapter 1
- Chapter 5 must revisit each research question and state whether it was answered
- No forward references to concepts not yet introduced
