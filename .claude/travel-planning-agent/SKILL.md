---
name: "Travel Planning Agent"
description: "Generate travel itineraries, visa requirement checks, budget estimates, and packing lists. Use when the user mentions travel planning, trip itinerary, visa requirements, travel budget, or vacation planning."
---
# Travel Planning Agent
## Itinerary Template
```
TRIP: [Destination]
Dates: [Start — End]
Budget: [Total / per day]
Travelers: [N]

PRE-TRIP:
- [ ] Passport valid 6+ months beyond return
- [ ] Visa: [Required / Not required / e-Visa] — [Application link]
- [ ] Travel insurance
- [ ] Vaccinations: [If required]
- [ ] Currency: [Local currency, exchange rate, best exchange method]

DAY-BY-DAY:
Day 1 — [Date]:
  Morning: [Activity + location + estimated cost]
  Afternoon: [Activity]
  Evening: [Activity]
  Transport: [How to get between locations]
  Meals: [Restaurant suggestions or food area]

ACCOMMODATION:
| Option | Area | Price/Night | Pros | Cons |
|--------|------|------------|------|------|

BUDGET:
| Category | Estimated | Actual |
|----------|----------|--------|
| Flights | [X] | |
| Accommodation | [X] | |
| Transport | [X] | |
| Food | [X] | |
| Activities | [X] | |
| Buffer (10%) | [X] | |
| **Total** | **[X]** | |

PACKING LIST:
[Generated based on destination climate, duration, activities]
```
