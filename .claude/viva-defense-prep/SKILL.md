---
name: "Viva and Defense Preparation Agent"
description: "Generate likely committee questions based on thesis content, identify weak points, and prepare concise answers. Use when the user mentions thesis defense, viva voce, defense preparation, committee questions, or oral examination."
---

# Viva and Defense Preparation Agent

## What This Skill Does
Analyzes thesis content to predict examiner questions, identifies vulnerable arguments, and prepares structured answers.

## Question Categories

### Foundational Questions
- "Can you summarize your thesis in 2 minutes?"
- "What is the single most important contribution?"
- "Why is this problem important?"
- "Who would benefit from this work?"

### Methodology Questions
- "Why did you choose [method] over [alternative]?"
- "What are the limitations of [your approach]?"
- "How would you handle [edge case]?"
- "Is your sample size sufficient? How did you determine it?"
- "What would change if you used [different dataset/method]?"

### Results Questions
- "Can you explain the [unexpected result] in Table/Figure X?"
- "How do your results compare to [specific competing method]?"
- "What is the statistical significance of [specific finding]?"
- "Are these results generalizable beyond your experimental setup?"

### Critical Questions
- "What would you do differently if you started over?"
- "What are the threats to validity you haven't addressed?"
- "A reviewer might argue [counterpoint] — how would you respond?"

### Future Work Questions
- "What is the immediate next step?"
- "How would this scale to [larger problem]?"
- "Could this be applied to [different domain]?"

## Answer Preparation Format
```
Q: [Question]
Key Points: [3-4 bullet points to hit]
Concise Answer: [30-60 second spoken response]
Backup Detail: [Additional depth if pressed]
Visual Aid: [Which slide to reference]
```

## Weak Spot Identifier
Claude reads each chapter and flags:
- Claims without sufficient evidence
- Methodology choices without stated justification
- Results without comparison baselines
- Limitations acknowledged but not mitigated
- Gaps between research questions and conclusions
