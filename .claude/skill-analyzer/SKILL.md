---
name: "Skill Analyzer"
description: "Analyze conversation transcripts to detect repeated patterns and suggest new skills to build. Use when the user mentions analyze conversations, suggest skills, pattern detection, meta-skill, or skill recommendations. Invoke manually by pasting transcripts or running at the end of long sessions."
---
# Skill Analyzer
## What This Skill Does
Reads conversation transcripts, identifies repeated request patterns, and recommends new skills with draft specifications.

## Process
1. **Input**: Conversation transcript(s) or summary of recent work
2. **Pattern detection**: Identify requests that appeared 3+ times or took >5 back-and-forth exchanges
3. **Cluster**: Group similar requests into skill candidates
4. **Evaluate**: Score each candidate on frequency, complexity, and automation potential
5. **Output**: Ranked skill recommendations with draft SKILL.md files

## Detection Signals
- Same prompt structure used repeatedly ("generate a SOW for...", "write an email to...")
- Multi-turn conversations that could be single-turn with a skill
- Copy-paste of templates or boilerplate across conversations
- Repeated tool/format combinations (e.g., "make a .docx with these sections")
- Domain-specific vocabulary used consistently

## Output Template
```
SKILL ANALYSIS REPORT
=====================
Conversations analyzed: [N]
Patterns detected: [N]

RECOMMENDED SKILLS (ranked by ROI):

1. [Skill Name]
   Frequency: [N occurrences]
   Avg. conversation length: [N turns]
   With skill: [estimated 1-2 turns]
   Draft description: "[description]"
   Confidence: [High/Medium/Low]

2. [Skill Name]
   ...

DRAFT SKILL.MD FILES:
[Generated for top 3 recommendations]
```
