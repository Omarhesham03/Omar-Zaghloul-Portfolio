---
name: "Course Content Structurer"
description: "Design, outline, and produce online course content including module structures, lesson plans, quizzes, and supplementary materials. Use when the user mentions course creation, online course, curriculum design, lesson plan, module outline, educational content, or teaching materials. Covers prompt engineering, vibe coding, automation, and technical education topics."
---

# Course Content Structurer

## What This Skill Does
Creates structured online course curricula with module breakdowns, learning objectives, lesson content, practical exercises, quizzes, and project assignments. Optimized for technical education (prompt engineering, automation, coding) but adaptable to any domain.

---

## Quick Start

1. User provides: course topic, target audience, estimated duration, and platform (if known).
2. Claude generates: full module outline with learning objectives, content structure, and assessment strategy.
3. User iterates on individual modules/lessons as needed.

---

## Course Architecture Template

### Course Metadata
```
Title: [Course Title]
Subtitle: [One-line value proposition]
Target Audience: [Who is this for — skill level, role, goals]
Prerequisites: [What learners need before starting]
Duration: [Total hours]
Modules: [Count]
Format: [Video + text / Text-only / Interactive]
Platform: [Udemy / Teachable / Self-hosted / etc.]
```

### Module Structure (Repeat per module)

```
MODULE [N]: [Module Title]
Duration: [X hours]
Learning Objectives:
  - By the end of this module, learners will be able to [verb] [outcome]
  - [Objective 2]
  - [Objective 3]

LESSONS:
  [N.1] [Lesson Title] ([duration])
    - Key concepts: [list]
    - Content type: [video / text / interactive demo]
    - Practical exercise: [description]

  [N.2] [Lesson Title] ([duration])
    - ...

ASSESSMENT:
  - Quiz: [N questions, type: MCQ/short answer/practical]
  - Project: [Mini-project description tied to module objectives]

RESOURCES:
  - [Supplementary reading / tools / templates]
```

---

## Default Course: Prompt Engineering, Vibe Coding & Automation

### Module 1: Foundations of Prompt Engineering (3 hours)
**Objectives:** Understand how LLMs process prompts; write effective zero-shot and few-shot prompts; identify failure modes.

Lessons:
- 1.1 How LLMs Work (conceptual, no math) — 30 min
- 1.2 Anatomy of a Good Prompt — 45 min
- 1.3 Zero-shot vs Few-shot vs Chain-of-thought — 45 min
- 1.4 Prompt Failure Modes and Debugging — 30 min
- 1.5 Hands-on Lab: Prompt Iteration Workshop — 30 min

### Module 2: Advanced Prompting Techniques (3 hours)
**Objectives:** Use structured output, system prompts, role-play, and meta-prompting.

Lessons:
- 2.1 System Prompts and Role Assignment — 30 min
- 2.2 Structured Output (JSON, XML, Markdown) — 45 min
- 2.3 Chain-of-Thought and Tree-of-Thought — 45 min
- 2.4 Meta-prompting: Prompts that Write Prompts — 30 min
- 2.5 Hands-on Lab: Build a Prompt Library — 30 min

### Module 3: Vibe Coding with AI (4 hours)
**Objectives:** Use AI to generate, debug, and iterate on code; understand when to trust AI output.

Lessons:
- 3.1 What is Vibe Coding? Principles and Mindset — 30 min
- 3.2 Code Generation: From Spec to Working Code — 45 min
- 3.3 Debugging with AI: Rubber Duck on Steroids — 45 min
- 3.4 Iterative Development: Refine, Extend, Refactor — 45 min
- 3.5 When NOT to Trust AI Code — 30 min
- 3.6 Hands-on Lab: Build a Full Feature with AI — 45 min

### Module 4: Automation with No-Code/Low-Code Tools (4 hours)
**Objectives:** Build automations using n8n, Zapier, or Make; connect APIs; handle errors.

Lessons:
- 4.1 Automation Landscape: Tools and Trade-offs — 30 min
- 4.2 n8n Deep Dive: Nodes, Connections, Triggers — 60 min
- 4.3 API Integration Patterns — 45 min
- 4.4 Error Handling and Monitoring — 30 min
- 4.5 Hands-on Lab: Build a Lead Processing Pipeline — 45 min
- 4.6 MCP: Exposing Workflows as AI Tools — 30 min

### Module 5: Putting It All Together (3 hours)
**Objectives:** Combine prompting, coding, and automation into a complete workflow.

Lessons:
- 5.1 Workflow Design: Prompt → Code → Automate — 45 min
- 5.2 Case Study: AI-Powered Business Process — 45 min
- 5.3 Monetization: Packaging AI Skills as Services — 30 min
- 5.4 Capstone Project Briefing — 30 min
- 5.5 Capstone: Build an End-to-End AI Workflow — 45 min (guided)

---

## Assessment Design

### Quiz Question Types
- **MCQ**: 4 options, 1 correct. Test concept recognition.
- **Code completion**: Fill in the missing prompt/code segment.
- **Scenario-based**: "Given this situation, which approach would you use and why?"
- **Practical**: "Write a prompt that achieves X. Submit screenshot of result."

### Grading
- Quizzes: Pass/fail at 70%
- Projects: Rubric-based (functionality 40%, approach 30%, documentation 20%, creativity 10%)
- Capstone: Peer review + instructor review

---

## Content Production Checklist

Per lesson:
- [ ] Script / written content
- [ ] Slide deck (if video)
- [ ] Code examples / templates
- [ ] Exercise instructions
- [ ] Solution / answer key
- [ ] Supplementary links

Per module:
- [ ] Quiz (10-15 questions)
- [ ] Mini-project brief
- [ ] Module summary / cheat sheet

---

## Troubleshooting

### Issue: Course too long for target audience
**Solution:** Cut to essentials. Each module should have a "skip if you already know" indicator. Offer a "fast track" path that covers only core lessons.

### Issue: Platform-specific formatting
**Solution:** Write content in Markdown (platform-agnostic). Convert to platform format during upload. Avoid platform lock-in in source materials.
