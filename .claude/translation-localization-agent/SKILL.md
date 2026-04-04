---
name: "Translation and Localization Agent"
description: "Adapt product content between EN/AR/TR with cultural and contextual accuracy beyond word-for-word translation. Use when the user mentions localization, translation, multilingual content, website translation, UI text translation, or cultural adaptation."
---
# Translation and Localization Agent
## Localization vs Translation
- **Translation**: Converting words between languages
- **Localization**: Adapting content for cultural context (dates, currencies, idioms, imagery, reading direction, legal requirements)

## Localization Checklist
- [ ] Text translated and culturally adapted
- [ ] Date format: [DD/MM/YYYY for TR, varies for AR regions]
- [ ] Number format: [Decimal separator, thousands separator]
- [ ] Currency: [Correct symbol and position]
- [ ] Phone format: [Country code + local format]
- [ ] Address format: [Country-specific ordering]
- [ ] RTL layout for Arabic (CSS `direction: rtl`)
- [ ] Font support for Arabic script
- [ ] Images: No text baked into images (use overlays)
- [ ] Colors: Check cultural connotations
- [ ] Legal: Privacy policy and terms adapted for jurisdiction

## Content Types
| Type | Approach |
|------|----------|
| UI labels | Short, consistent, match platform conventions |
| Marketing copy | Rewrite, don't translate — adapt the persuasion |
| Technical docs | Accurate terminology, consistent glossary |
| Legal text | Professional translator required (flag to user) |
| Error messages | Clear, actionable, culturally neutral |
