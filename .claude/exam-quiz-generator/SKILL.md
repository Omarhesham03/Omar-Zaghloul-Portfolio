---
name: "Exam and Quiz Generator"
description: "Generate exam papers with answer keys, difficulty balancing, and Bloom's taxonomy alignment from course material. Use when the user mentions exam creation, quiz generation, midterm, final exam, test bank, or assessment design."
---

# Exam and Quiz Generator

## What This Skill Does
Takes course content, learning objectives, or a syllabus and generates balanced exams with multiple question types, answer keys, and grading guides.

## Question Types
- **MCQ**: 4 options, 1 correct, plausible distractors (not obviously wrong)
- **True/False with justification**: Must explain why false
- **Short answer**: 2-5 sentence response expected
- **Calculation/Problem**: Show work, partial credit possible
- **Code writing**: Implement function/algorithm with test cases
- **Essay**: Open-ended analysis (rubric required)
- **Matching**: Connect terms to definitions
- **Fill-in-the-blank**: Code or formula completion

## Exam Template
```
[COURSE NAME] — [EXAM TYPE] EXAMINATION
Date: [Date]    Duration: [Time]    Total: [Points]

INSTRUCTIONS:
- [Calculator policy]
- [Open/closed book policy]
- [Partial credit policy]
- [Academic integrity statement]

SECTION A: Multiple Choice ([N] questions × [X] points = [Total])
SECTION B: Short Answer ([N] questions × [X] points = [Total])
SECTION C: Problems ([N] questions × [X] points = [Total])
```

## Bloom's Distribution
| Level | Target % | Question Types |
|-------|----------|---------------|
| Remember | 15% | MCQ, T/F, matching |
| Understand | 20% | Short answer, MCQ |
| Apply | 30% | Problems, code writing |
| Analyze | 20% | Problems, essay |
| Evaluate | 10% | Essay, design |
| Create | 5% | Open-ended design |
