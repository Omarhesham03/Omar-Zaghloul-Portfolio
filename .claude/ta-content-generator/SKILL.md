---
name: "Teaching Assistant Content Generator"
description: "Generate homework sets, lab exercises, grading rubrics, and solution keys from a syllabus or lecture topic. Use when the user mentions homework, assignment, lab exercise, grading rubric, solution key, TA duties, or teaching materials. Supports multiple difficulty levels and Bloom's taxonomy alignment."
---

# Teaching Assistant Content Generator

## What This Skill Does
Takes a course topic, syllabus, or lecture content and generates structured educational materials: problem sets, lab exercises, rubrics, and solution keys.

## Output Types

### Homework / Problem Set
```
HOMEWORK [N]: [Topic]
Course: [Course Name]
Due: [Date]
Total Points: [X]

Instructions: [submission format, collaboration policy]

Q1. [X points] [Bloom's level: Remember/Understand/Apply/Analyze/Evaluate/Create]
[Question text]

Q2. [X points] [Bloom's level]
[Question text]
...

BONUS: [X points]
[Challenge question]
```

### Lab Exercise
```
LAB [N]: [Title]
Objective: [What students will learn/demonstrate]
Prerequisites: [Required knowledge, software, hardware]
Duration: [Estimated time]
Deliverables: [What to submit]

PART 1: [Setup / Guided]
Step 1: [Instruction]
Expected output: [What they should see]
...

PART 2: [Independent]
Task: [Open-ended task building on Part 1]
Evaluation criteria: [How it will be graded]
```

### Grading Rubric
```
| Criterion | Excellent (A) | Good (B) | Satisfactory (C) | Needs Work (D) | Missing (F) | Weight |
|-----------|--------------|----------|-------------------|-----------------|-------------|--------|
| [Criterion 1] | [Description] | [Description] | [Description] | [Description] | [Description] | X% |
```

### Solution Key
- Full worked solutions with intermediate steps
- Common mistakes students make and how to identify them
- Partial credit guidelines for graders
- Alternative correct approaches

## Difficulty Calibration
- **Easy (Remember/Understand)**: Direct application of lecture formulas/concepts
- **Medium (Apply/Analyze)**: Multi-step problems requiring concept combination
- **Hard (Evaluate/Create)**: Open-ended, design, or proof-based questions
- Default distribution: 40% easy, 40% medium, 20% hard
