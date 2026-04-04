---
name: "Citation Network Mapper"
description: "Trace forward and backward citations from seed papers to identify seminal works, emerging trends, and research lineages. Use when the user mentions citation analysis, citation graph, paper connections, seminal works, research trends, or bibliometric analysis."
---

# Citation Network Mapper

## What This Skill Does
Given seed papers, maps the citation network to identify foundational works, key clusters, emerging directions, and the user's position in the research landscape.

## Process
1. **Input**: 1-5 seed paper titles, DOIs, or BibTeX entries
2. **Backward tracing**: Identify the most-cited references across seed papers (foundational works)
3. **Forward tracing**: Find recent papers citing the seeds (emerging work)
4. **Cluster identification**: Group connected papers by sub-topic
5. **Output**: Narrative summary + structured citation map

## Output Format
```
CITATION NETWORK ANALYSIS
=========================
Seed Papers: [list]

FOUNDATIONAL WORKS (most cited across seeds):
1. [Paper] — cited by [N] seeds — [why it's foundational]
2. ...

EMERGING DIRECTIONS (recent citing works):
1. [Paper, Year] — extends [seed] by [how]
2. ...

RESEARCH LINEAGE:
[Foundational Work A] → [Key Advance B] → [Seed Paper] → [Emerging Work]

GAPS IN THE NETWORK:
- [Area with few connections / underexplored intersection]

RECOMMENDED ADDITIONS TO YOUR BIBLIOGRAPHY:
- [Paper]: [reason to include]
```
