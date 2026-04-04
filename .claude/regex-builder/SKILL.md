---
name: "Regex Builder and Tester"
description: "Generate regular expressions from natural language descriptions with test cases and edge case analysis. Use when the user mentions regex, regular expression, pattern matching, text extraction, or string validation."
---
# Regex Builder and Tester
## Process
1. User describes the pattern in natural language
2. Claude generates the regex with explanation
3. Claude provides test cases (matches + non-matches)
4. Claude identifies edge cases

## Output Format
```
REGEX: [pattern]
ENGINE: [JavaScript / Python / PCRE]
FLAGS: [g, i, m, etc.]

EXPLANATION:
[Component-by-component breakdown]

TEST CASES:
✓ Match: "[input]" → captures: [groups]
✓ Match: "[input]" → captures: [groups]
✗ No match: "[input]"
✗ No match: "[input]"

EDGE CASES:
⚠ "[tricky input]" → [does it match? should it?]

COMMON PITFALLS:
- [What could go wrong with this pattern]
```

## Common Patterns Quick Reference
| Pattern | Regex | Notes |
|---------|-------|-------|
| Email | `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$` | Basic validation |
| URL | `https?://[^\s]+` | Simple extraction |
| Phone (intl) | `\+?[1-9]\d{1,14}` | E.164 format |
| Date (ISO) | `\d{4}-\d{2}-\d{2}` | YYYY-MM-DD |
| IP address | `\d{1,3}(\.\d{1,3}){3}` | IPv4 basic |
