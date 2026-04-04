---
name: "Revenue Forecasting Agent"
description: "Project monthly and quarterly revenue from pipeline data and historical patterns with confidence intervals. Use when the user mentions revenue forecast, sales projection, pipeline forecast, financial projection, or income prediction."
---
# Revenue Forecasting Agent
## Input
- Current pipeline: deals with stage, value, probability
- Historical data: past 6-12 months of revenue
- Known upcoming: signed contracts, retainers

## Forecast Template
```
REVENUE FORECAST — [Period]
===========================
Method: [Weighted pipeline + historical trend]

PIPELINE FORECAST:
| Deal | Value | Stage | Probability | Weighted Value |
|------|-------|-------|------------|----------------|
| [Deal] | $[X] | [Stage] | [%] | $[X × %] |
| **Total Pipeline** | | | | **$[X]** |

RECURRING REVENUE:
| Source | Monthly | Months Remaining | Total |
|--------|---------|-----------------|-------|
| [Retainer] | $[X] | [N] | $[X] |

MONTHLY PROJECTION:
| Month | Optimistic | Expected | Conservative |
|-------|-----------|----------|-------------|
| [Month] | $[X] | $[X] | $[X] |

Confidence interval: [Expected ± X%]
```
