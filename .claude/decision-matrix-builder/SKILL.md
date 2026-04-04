---
name: "Decision Matrix Builder"
description: "Build weighted scoring matrices for multi-criteria decisions with sensitivity analysis. Use when the user mentions decision matrix, comparison, trade-off analysis, weighted scoring, or choosing between options."
---
# Decision Matrix Builder
## Process
1. Define options (2-5 alternatives)
2. Define criteria (3-8 factors that matter)
3. Assign weights (must sum to 100%)
4. Score each option per criterion (1-5 or 1-10)
5. Calculate weighted scores
6. Run sensitivity analysis (what if weights change?)

## Output
```
DECISION MATRIX
===============
Decision: [What you're choosing]

| Criterion | Weight | [Option A] | [Option B] | [Option C] |
|-----------|--------|-----------|-----------|-----------|
| [Criterion 1] | [%] | [Score] | [Score] | [Score] |
| [Criterion 2] | [%] | [Score] | [Score] | [Score] |
| **Weighted Total** | 100% | **[X]** | **[X]** | **[X]** |

WINNER: [Option] with [score]

SENSITIVITY CHECK:
If [criterion] weight increases by 10%: winner changes to [Option]? [Yes/No]
Breakeven: [Option B] wins if [criterion] weight exceeds [X]%

RECOMMENDATION:
[Clear recommendation with caveat about most sensitive assumption]
```
