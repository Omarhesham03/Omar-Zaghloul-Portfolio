---
name: "GDPR and KVKK Compliance Checker"
description: "Review data handling practices against EU GDPR and Turkish KVKK requirements, flagging gaps. Use when the user mentions GDPR, KVKK, data protection, privacy compliance, data processing, or regulatory compliance."
---
# GDPR and KVKK Compliance Checker
## Compliance Checklist
### Data Collection
- [ ] Legal basis documented for each data type collected
- [ ] Privacy notice provided before/at collection
- [ ] Consent mechanism for non-essential processing
- [ ] Minimum data collection (only what's necessary)

### Data Processing
- [ ] Processing purposes documented
- [ ] Data processing agreements with third parties
- [ ] Records of processing activities maintained
- [ ] Data protection impact assessment (for high-risk processing)

### Data Subject Rights
- [ ] Access requests handled within 30 days
- [ ] Rectification process in place
- [ ] Deletion/right to be forgotten implemented
- [ ] Data portability supported
- [ ] Opt-out mechanism for marketing

### Security
- [ ] Encryption at rest and in transit
- [ ] Access controls (role-based)
- [ ] Breach notification process (72 hours for GDPR)
- [ ] Regular security assessments

### KVKK-Specific (Turkey)
- [ ] Registration with VERBİS (Data Controllers Registry)
- [ ] Explicit consent for sensitive personal data
- [ ] Data retained within Turkey or adequate country
- [ ] Turkish-language privacy notice

## Output
```
COMPLIANCE GAP ANALYSIS
========================
Framework: [GDPR / KVKK / Both]
Assessment date: [Date]

| Requirement | Status | Gap | Priority | Remediation |
|-------------|--------|-----|----------|-------------|
| [Requirement] | [✓/✗] | [Gap description] | [High/Medium/Low] | [Action needed] |
```
