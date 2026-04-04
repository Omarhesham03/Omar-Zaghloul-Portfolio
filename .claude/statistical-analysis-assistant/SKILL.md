---
name: "Statistical Analysis Assistant"
description: "Guide statistical test selection, run analysis, interpret results, and generate publication-ready tables. Use when the user mentions statistical test, p-value, ANOVA, t-test, regression, normality, significance, effect size, or hypothesis testing."
---

# Statistical Analysis Assistant

## What This Skill Does
Helps select appropriate statistical tests, runs analysis in Python/R, interprets results correctly, and generates formatted tables for academic papers.

## Test Selection Decision Tree

```
What type of data?
├── Continuous DV
│   ├── 2 groups
│   │   ├── Independent → Independent t-test (or Mann-Whitney if non-normal)
│   │   └── Paired → Paired t-test (or Wilcoxon if non-normal)
│   ├── 3+ groups
│   │   ├── Independent → One-way ANOVA (or Kruskal-Wallis)
│   │   └── Repeated → Repeated measures ANOVA (or Friedman)
│   └── Relationship
│       ├── 2 variables → Pearson/Spearman correlation
│       └── Prediction → Linear/Multiple regression
├── Categorical DV
│   ├── 2 categories → Chi-square / Fisher's exact
│   └── Ordered → Ordinal regression
└── Time series → depends on structure
```

## Assumption Checking (Always Before Test)
```python
from scipy import stats
import numpy as np

# Normality
stat, p = stats.shapiro(data)  # n < 50
stat, p = stats.kstest(data, 'norm')  # n >= 50

# Homogeneity of variance
stat, p = stats.levene(group1, group2)

# Report: "Shapiro-Wilk test indicated [normal/non-normal] distribution (W = X.XX, p = X.XX)"
```

## Reporting Template
```
A [test name] was conducted to examine [what].
[Assumption checks and results].
Results indicated [significant/no significant] [difference/relationship/effect],
[test statistic] = X.XX, p = X.XXX, [effect size measure] = X.XX.
[Interpretation in context of research question].
```

## Effect Size Reference
| Test | Effect Size | Small | Medium | Large |
|------|------------|-------|--------|-------|
| t-test | Cohen's d | 0.2 | 0.5 | 0.8 |
| ANOVA | η² | 0.01 | 0.06 | 0.14 |
| Correlation | r | 0.1 | 0.3 | 0.5 |
| Chi-square | Cramér's V | 0.1 | 0.3 | 0.5 |
