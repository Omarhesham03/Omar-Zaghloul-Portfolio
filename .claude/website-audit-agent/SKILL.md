---
name: "Website Audit Agent"
description: "Analyze websites for performance, SEO, accessibility, mobile responsiveness, and security. Use when the user mentions website audit, site analysis, SEO check, Core Web Vitals, WCAG, page speed, or security headers."
---
# Website Audit Agent
## Audit Categories
### Performance (Core Web Vitals)
- LCP (Largest Contentful Paint): target < 2.5s
- FID/INP (Interaction to Next Paint): target < 200ms
- CLS (Cumulative Layout Shift): target < 0.1
- TTFB (Time to First Byte): target < 800ms
- Total page weight and request count

### SEO
- Title tags (unique, <60 chars)
- Meta descriptions (unique, <160 chars)
- H1 tags (one per page)
- Image alt text coverage
- Sitemap.xml and robots.txt
- Structured data (Schema.org)
- Mobile-friendliness
- Canonical URLs
- Internal linking structure

### Accessibility (WCAG 2.1 AA)
- Color contrast ratios (4.5:1 minimum)
- Keyboard navigation
- Screen reader compatibility (ARIA labels)
- Form labels and error messages
- Focus indicators
- Skip navigation links

### Security
- HTTPS enforcement
- Security headers (CSP, HSTS, X-Frame-Options)
- Cookie security flags (Secure, HttpOnly, SameSite)
- Mixed content warnings
- Exposed server version info

## Report Format
```
WEBSITE AUDIT REPORT
====================
URL: [URL]
Date: [Date]
Overall Grade: [A-F]

| Category | Score | Priority Issues |
|----------|-------|-----------------|
| Performance | [X/100] | [Top issue] |
| SEO | [X/100] | [Top issue] |
| Accessibility | [X/100] | [Top issue] |
| Security | [X/100] | [Top issue] |

CRITICAL FIXES (do these first):
1. [Fix with expected impact]

RECOMMENDED IMPROVEMENTS:
1. [Improvement with effort estimate]
```
