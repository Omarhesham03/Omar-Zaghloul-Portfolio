---
name: "Literature Review Agent"
description: "Systematically review academic literature by clustering papers by theme, identifying research gaps, and generating structured lit review sections with proper citations. Use when the user mentions literature review, related work, paper survey, research gaps, or systematic review."
---

# Literature Review Agent

## What This Skill Does
Takes a research topic, seed papers, or a .bib file and produces a structured literature review: thematic clustering, chronological evolution, gap identification, and formatted prose with citations.

## Process

### Step 1: Input Collection
Accept any combination of: research topic keywords, seed paper titles/DOIs, .bib file, or existing draft to expand.

### Step 2: Thematic Clustering
Group papers into 3-7 themes based on methodology, application domain, or contribution type. Each cluster gets a descriptive label and 2-3 sentence summary.

### Step 3: Gap Analysis
For each cluster, identify:
- What has been addressed thoroughly
- What remains underexplored
- Methodological limitations across the cluster
- Where the user's work fits relative to existing literature

### Step 4: Output Generation

**Structure:**
```
2. RELATED WORK

2.1 [Theme 1 Title]
[Narrative paragraph connecting 3-5 papers with transitions]

2.2 [Theme 2 Title]
[Narrative paragraph...]

2.3 [Theme N Title]
[Narrative paragraph...]

2.4 Summary and Research Gap
[2-3 paragraphs: what's been done, what's missing, how this work addresses the gap]
```

**Writing rules:**
- Never list papers sequentially ("Author A did X. Author B did Y."). Synthesize and compare.
- Use transition phrases that show relationships: "Building on this,", "In contrast,", "While X addressed..., Y remains..."
- Every paragraph must cite at least 3 sources
- End each subsection with a gap or limitation that motivates the user's work

### Step 5: Citation Formatting
Output citations in the user's required format (IEEE numeric, APA, Harvard). Generate .bib entries for any new papers discovered.

## Quality Checklist
- [ ] Papers grouped by theme, not listed sequentially
- [ ] Each theme has a clear narrative arc
- [ ] Gaps explicitly stated with supporting evidence
- [ ] User's contribution positioned relative to gaps
- [ ] All citations formatted consistently
- [ ] No orphan citations (cited but not discussed)
