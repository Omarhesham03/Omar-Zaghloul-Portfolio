---
name: "Backend Developer Interview Generator"
description: "Generate structured backend developer interview packs from job descriptions. Use when the user mentions interview questions, candidate evaluation, technical interview, coding assessment, or 'generate candidate' requests. Focuses on database management, LeetCode-style problem solving, Agile methodologies, and API development. Produces scoring rubrics and expected answers."
---

# Backend Developer Interview Generator

## What This Skill Does
Takes a job description as input and produces a complete interview question pack covering four core areas: database management, algorithmic problem-solving, Agile/process, and API design/development. Includes scoring rubrics, expected answers, and difficulty calibration.

---

## Quick Start

1. User provides a job description (text, URL, or file).
2. Claude extracts required skills, seniority level, and tech stack.
3. Claude generates a structured interview pack with 15-20 questions across 4 categories.

---

## Interview Structure

### Section 1: Database Management (4-5 questions)

**Question types by seniority:**

| Level | Topics |
|-------|--------|
| Junior | Basic SQL (JOINs, GROUP BY, subqueries), normalization, simple indexing |
| Mid | Query optimization, indexing strategies, transactions/ACID, schema design |
| Senior | Sharding, replication, CAP theorem trade-offs, migration strategies, NoSQL vs SQL decision criteria |

**Example question template:**
```
QUESTION: [Question text]
DIFFICULTY: [Easy / Medium / Hard]
EXPECTED ANSWER KEY POINTS:
  - Point 1
  - Point 2
  - Point 3
FOLLOW-UP: [Probing question if candidate answers well]
SCORING:
  0 - No meaningful answer
  1 - Partial understanding, misses key concepts
  2 - Correct but surface-level
  3 - Strong answer with depth
  4 - Exceptional: includes edge cases, trade-offs, real-world considerations
```

### Section 2: Problem Solving — LeetCode-Style (3-4 questions)

**Difficulty calibration:**

| Level | LeetCode Difficulty | Time per problem |
|-------|-------------------|-----------------|
| Junior | Easy, 1 Medium | 20-25 min |
| Mid | 1 Easy, 2 Medium | 20 min each |
| Senior | 2 Medium, 1 Hard | 25-30 min |

**Categories to cover (pick based on JD):**
- Arrays / Hash Maps (most common backend patterns)
- String manipulation
- Tree/Graph traversal (if JD mentions data pipelines)
- Dynamic programming (senior only, if JD warrants)
- System-relevant: rate limiter, LRU cache, task scheduler

**Format per problem:**
```
PROBLEM: [Title]
DIFFICULTY: [Easy / Medium / Hard]
DESCRIPTION: [Problem statement]
EXAMPLE:
  Input: [example]
  Output: [example]
CONSTRAINTS: [size limits, time complexity target]
OPTIMAL SOLUTION APPROACH: [Algorithm name, complexity]
KEY EVALUATION CRITERIA:
  - Does candidate clarify requirements before coding?
  - Does candidate discuss time/space complexity?
  - Does candidate handle edge cases?
  - Code quality: variable naming, structure, readability
SCORING: [0-4 scale as above]
```

### Section 3: Agile Methodologies (3-4 questions)

**Topics by seniority:**

| Level | Topics |
|-------|--------|
| Junior | Scrum basics, sprint ceremonies, definition of done, daily standups |
| Mid | Sprint planning, estimation (story points), backlog refinement, retrospective actions |
| Senior | Scaling Agile, cross-team coordination, technical debt prioritization, stakeholder management, metrics (velocity, cycle time, lead time) |

**Question types:**
- Scenario-based: "Your sprint is at risk because of a blocker. Walk me through your approach."
- Process knowledge: "Explain the difference between a sprint review and a retrospective."
- Opinion/trade-off: "When is Kanban a better fit than Scrum?"

### Section 4: API Development (4-5 questions)

**Topics by seniority:**

| Level | Topics |
|-------|--------|
| Junior | REST basics, HTTP methods, status codes, request/response format, JSON |
| Mid | Authentication (JWT, OAuth2), versioning, pagination, error handling patterns, rate limiting |
| Senior | API gateway design, GraphQL vs REST trade-offs, backward compatibility, idempotency, CQRS, event-driven APIs |

**Practical exercise option (mid/senior):**
```
EXERCISE: Design an API for [domain from JD]
TIME: 30 minutes
DELIVERABLE: Endpoint list, request/response schemas, auth strategy, error codes
EVALUATION:
  - RESTful conventions followed
  - Consistent naming and structure
  - Security considerations addressed
  - Edge cases handled (pagination, filtering, partial updates)
```

---

## Scoring Rubric (Overall)

| Section | Weight | Max Score |
|---------|--------|-----------|
| Database | 25% | 20 |
| Problem Solving | 30% | 16 |
| Agile | 15% | 16 |
| API Development | 30% | 20 |

**Hiring thresholds (adjustable):**
- Strong hire: ≥80% weighted score
- Hire: 65-79%
- Borderline: 50-64% (discuss with team)
- No hire: <50%

---

## Output Format

Claude generates a complete document with:
1. **Interview metadata**: Role title, seniority, tech stack, estimated duration
2. **Question pack**: All questions in structured format with answers and scoring
3. **Scoring sheet**: Table for interviewer to fill during/after interview
4. **Interviewer notes**: Tips for evaluating communication, problem-solving approach, cultural fit

Output as Markdown, DOCX, or PDF per user preference.

---

## Troubleshooting

### Issue: JD is vague or generic
**Solution:** Claude asks for: seniority level, primary tech stack (language/framework), and 1-2 most critical skills. Generates based on those anchors.

### Issue: JD mentions technologies not in the 4 categories
**Solution:** Claude maps them to the closest category (e.g., Docker → API Development/deployment, Kafka → Database/event streaming) and adds a supplementary section if needed.
