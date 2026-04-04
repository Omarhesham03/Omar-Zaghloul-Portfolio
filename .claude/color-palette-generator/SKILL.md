---
name: "Color Palette and Design Token Generator"
description: "Generate color palettes, design tokens, and CSS variables from brand colors or mood descriptions. Use when the user mentions color palette, design tokens, brand colors, CSS variables, theming, or color scheme."
---
# Color Palette and Design Token Generator
## Output
```
COLOR PALETTE: [Brand/Project Name]
====================================
Primary: [Hex] [RGB] [HSL] — [Usage: buttons, links, emphasis]
Secondary: [Hex] [RGB] [HSL] — [Usage: supporting elements]
Accent: [Hex] [RGB] [HSL] — [Usage: highlights, notifications]
Background: [Hex] — [Light/dark mode]
Surface: [Hex] — [Cards, modals]
Text Primary: [Hex] — [Body text]
Text Secondary: [Hex] — [Muted text]
Success: [Hex] — [Positive states]
Warning: [Hex] — [Caution states]
Error: [Hex] — [Negative states]

CSS VARIABLES:
:root {
  --color-primary: [hex];
  --color-secondary: [hex];
  --color-accent: [hex];
  --color-bg: [hex];
  --color-surface: [hex];
  --color-text: [hex];
  --color-text-muted: [hex];
  --color-success: [hex];
  --color-warning: [hex];
  --color-error: [hex];
}

CONTRAST CHECK:
[Primary on Background]: [Ratio] — [WCAG AA: Pass/Fail]
[Text on Background]: [Ratio] — [WCAG AA: Pass/Fail]
```
