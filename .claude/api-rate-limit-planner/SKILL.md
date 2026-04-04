---
name: "API Rate Limit Planner"
description: "Design rate limiting strategies, retry logic, and quota management for API integrations. Use when the user mentions rate limiting, API throttling, retry logic, backoff strategy, API quota, or request budgeting."
---
# API Rate Limit Planner
## Rate Limiting Strategies
| Strategy | Use Case | Implementation |
|----------|----------|---------------|
| Token bucket | Smooth traffic, allow bursts | Refill tokens at fixed rate |
| Fixed window | Simple per-minute/hour limits | Counter reset at window boundary |
| Sliding window | Accurate, no boundary spikes | Rolling count over time window |
| Concurrent limit | Protect downstream services | Semaphore on active requests |

## Retry Logic (Exponential Backoff)
```python
import time
import random

def retry_with_backoff(func, max_retries=5, base_delay=1):
    for attempt in range(max_retries):
        try:
            return func()
        except RateLimitError:
            if attempt == max_retries - 1:
                raise
            delay = base_delay * (2 ** attempt) + random.uniform(0, 1)
            time.sleep(delay)
```

## Quota Management
```
API QUOTA PLAN
==============
Service: [API name]
Tier: [Free/Paid]
Limits: [N requests per hour/day/month]

Budget allocation:
- Real-time operations: [X]% of quota
- Batch jobs: [X]% of quota
- Reserve: [X]% buffer

Monitoring:
- Track usage via response headers (X-RateLimit-Remaining)
- Alert at 80% consumption
- Queue overflow to next window at 95%
```
