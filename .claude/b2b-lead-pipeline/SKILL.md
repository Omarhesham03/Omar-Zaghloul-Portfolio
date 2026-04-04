---
name: "B2B Lead Qualification Pipeline"
description: "Source, enrich, score, and qualify B2B leads for outbound sales. Use when the user mentions lead generation, lead qualification, prospect lists, Apollo enrichment, ICP matching, company scraping, or building sales pipelines. Covers target criteria definition, web scraping, Apollo API integration, scoring rubrics, and structured JSON/Excel output for Gulf-region FM/logistics/property, UK/EU e-commerce, and healthcare verticals."
---

# B2B Lead Qualification Pipeline

## What This Skill Does
Runs end-to-end B2B lead generation workflows: define ICP → source companies → enrich via Apollo → score/qualify → output structured data. Designed for mid-market service providers in target verticals.

## Prerequisites
- Apollo.io account (approved and API-accessible)
- Web scraping capability or pre-built company lists
- Python with pandas, openpyxl, requests

---

## Quick Start

### Define ICP and run pipeline
1. User provides vertical, region, company size, and deal criteria.
2. Claude generates scraping/search queries, enrichment calls, and scoring logic.
3. Output: qualified lead list as structured JSON or Excel.

---

## Target Verticals (Default ICPs)

### Gulf Region — Facility Management / Logistics / Property Management
```json
{
  "region": ["UAE", "KSA", "Qatar", "Bahrain", "Oman", "Kuwait"],
  "verticals": ["facility management", "logistics", "property management", "building maintenance"],
  "employee_range": [20, 500],
  "revenue_range_usd": [1000000, 50000000],
  "signals": ["no website or outdated website", "manual scheduling", "no CRM detected", "hiring operations staff"],
  "decision_makers": ["Operations Manager", "IT Manager", "CEO", "COO", "General Manager"]
}
```

### UK/EU — E-commerce Brands
```json
{
  "region": ["UK", "Germany", "Netherlands", "France"],
  "verticals": ["e-commerce", "DTC brands", "online retail"],
  "employee_range": [10, 200],
  "platform_signals": ["Shopify", "WooCommerce", "Magento"],
  "signals": ["poor site speed", "no mobile optimization", "basic Shopify theme", "no automation"],
  "decision_makers": ["Founder", "Head of E-commerce", "Marketing Director", "CTO"]
}
```

### Healthcare Organizations
```json
{
  "region": ["UAE", "KSA", "UK"],
  "verticals": ["clinics", "hospital groups", "healthtech", "pharmacy chains"],
  "employee_range": [20, 1000],
  "signals": ["legacy systems", "paper-based processes", "no patient portal", "hiring IT"],
  "decision_makers": ["IT Director", "CIO", "Operations Manager", "Practice Manager"]
}
```

---

## Step-by-Step Guide

### Step 1: Source Companies

**Option A — Web scraping** (when Apollo is unavailable):
```python
# Google Maps / directory scraping skeleton
import requests
from bs4 import BeautifulSoup

def scrape_directory(query, region):
    """Scrape business directories for company names, websites, contacts."""
    # Implementation depends on target directory
    # Output: list of {company_name, website, location, phone}
    pass
```

**Option B — Apollo Search** (preferred):
```python
import requests

def apollo_org_search(query_params):
    url = "https://api.apollo.io/api/v1/mixed_companies/search"
    headers = {"Content-Type": "application/json", "Cache-Control": "no-cache"}
    payload = {
        "api_key": "YOUR_API_KEY",
        "q_organization_keyword_tags": query_params["keywords"],
        "organization_locations": query_params["locations"],
        "organization_num_employees_ranges": [f"{query_params['min_emp']},{query_params['max_emp']}"],
        "page": 1,
        "per_page": 25
    }
    response = requests.post(url, json=payload, headers=headers)
    return response.json().get("organizations", [])
```

**Option C — Apollo MCP tool** (via Claude connector):
Use `Apollo.io:apollo_mixed_companies_search` with appropriate filters. Then enrich with `Apollo.io:apollo_organizations_enrich`.

### Step 2: Enrich Companies

For each company, pull:
- Domain, LinkedIn URL, employee count, revenue estimate
- Technology stack (BuiltWith signals)
- Recent funding, job postings (hiring signals)
- Decision-maker contacts (name, title, email, LinkedIn)

### Step 3: Score and Qualify

**Scoring rubric (default, 0-100):**

| Factor | Weight | Scoring |
|--------|--------|---------|
| Employee count in range | 20 | In range = 20, ±50% = 10, outside = 0 |
| Revenue in range | 15 | In range = 15, ±50% = 8, outside = 0 |
| Region match | 15 | Exact = 15, adjacent = 8, outside = 0 |
| Pain signals detected | 25 | Per signal: +6 (max 25) |
| Decision-maker found | 15 | Email + title match = 15, partial = 8, none = 0 |
| Website quality | 10 | No site/broken = 10, outdated = 7, modern = 2 |

**Qualification tiers:**
- **Hot (80-100)**: Immediate outreach. Multiple pain signals, decision-maker identified.
- **Warm (50-79)**: Nurture list. Some signals, needs more research.
- **Cold (<50)**: Archive. Poor fit or insufficient data.

### Step 4: Output

**JSON output schema:**
```json
{
  "pipeline_run": {
    "date": "2026-03-30",
    "icp": "gulf_fm",
    "total_sourced": 150,
    "qualified": 42
  },
  "leads": [
    {
      "company_name": "Example FM Co",
      "domain": "examplefm.com",
      "region": "UAE",
      "employees": 85,
      "revenue_est_usd": 5000000,
      "score": 87,
      "tier": "hot",
      "pain_signals": ["no website", "hiring operations staff"],
      "decision_makers": [
        {
          "name": "Ahmed Al-Rashid",
          "title": "Operations Manager",
          "email": "ahmed@examplefm.com",
          "linkedin": "https://linkedin.com/in/ahmed-alrashid"
        }
      ],
      "recommended_pitch_angle": "operations automation and client portal",
      "source": "apollo"
    }
  ]
}
```

**Excel output**: Same data with columns, conditional formatting on score (green/yellow/red), auto-filter on tier.

---

## Advanced Options

### Custom ICP Definition
User provides vertical + region + constraints → Claude generates the ICP JSON and scoring rubric, then runs the pipeline.

### Apollo Rate Limiting
- Free tier: 50 credits/month, 1 request/second
- Check account status before batch runs
- Implement exponential backoff on 429 responses

### Deduplication
Match on: domain (primary), company name fuzzy match (Levenshtein > 0.85), phone number.

---

## Troubleshooting

### Issue: Apollo account not approved
**Solution**: Pipeline falls back to web scraping + LinkedIn Sales Navigator manual lookup. Flag to user that enrichment quality will be lower.

### Issue: Low qualification rates
**Solution**: Loosen ICP constraints (expand employee range, add adjacent verticals), or increase pain signal sources.
