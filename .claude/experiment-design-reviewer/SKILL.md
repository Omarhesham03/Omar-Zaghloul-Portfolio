---
name: "Experiment Design Reviewer"
description: "Review and stress-test research experiment designs for methodological rigor. Use when the user mentions experiment design, methodology review, sample size, statistical validity, control variables, or threats to validity. Probes assumptions, suggests improvements, and identifies flaws before data collection."
---

# Experiment Design Reviewer

## What This Skill Does
Acts as a virtual methodology committee member. Takes an experimental design and systematically evaluates it across 8 dimensions, producing a structured review with severity-rated findings.

## Review Dimensions

### 1. Research Question Clarity
- Is the RQ falsifiable and specific?
- Does the design actually answer the stated RQ?
- Are hypotheses clearly stated (H0, H1)?

### 2. Variable Definition
- Independent variables: clearly defined, manipulable
- Dependent variables: measurable, operationalized
- Confounding variables: identified and controlled
- Extraneous variables: acknowledged

### 3. Sample Design
- Population defined
- Sampling method justified (random, stratified, convenience)
- Sample size: power analysis conducted? Effect size estimated?
- Inclusion/exclusion criteria explicit
- For pose/HCI studies: minimum 15-20 participants recommended, justify fewer

### 4. Control Strategy
- Control group present? If not, justified?
- Within-subjects vs between-subjects: appropriate for this design?
- Counterbalancing for order effects
- Baseline measurements

### 5. Data Collection Protocol
- Instruments validated?
- Measurement reliability (inter-rater, test-retest)
- Data recording method (automated vs manual)
- Environmental controls (lighting, noise, equipment calibration)

### 6. Statistical Analysis Plan
- Tests pre-registered or at least pre-planned?
- Test assumptions met (normality, homogeneity)?
- Multiple comparisons correction needed?
- Effect size reporting planned?

### 7. Threats to Validity
- **Internal**: history, maturation, testing effects, instrumentation, selection bias, attrition
- **External**: population validity, ecological validity, temporal validity
- **Construct**: mono-operation bias, hypothesis guessing, evaluation apprehension
- **Statistical conclusion**: low power, violated assumptions, fishing

### 8. Ethical Considerations
- Informed consent process
- Data anonymization
- Risk to participants
- IRB/ethics board approval status

## Output Format
```
EXPERIMENT DESIGN REVIEW
========================
Overall Assessment: [Strong / Needs Revision / Major Issues]

[For each dimension:]
## [Dimension Name]
Status: [✓ Adequate / ⚠ Concern / ✗ Critical]
Finding: [specific observation]
Recommendation: [actionable fix]
```
