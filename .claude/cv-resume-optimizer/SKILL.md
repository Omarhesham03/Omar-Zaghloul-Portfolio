---
name: "CV and Resume Optimizer"
description: "Optimize CVs and resumes for ATS compatibility, HR review, and specific job targets. Use when the user mentions CV, resume, ATS optimization, job application, career document, or LaTeX CV template. Covers keyword optimization, structure improvement, achievement quantification, and LaTeX/DOCX output generation."
---

# CV and Resume Optimizer

## What This Skill Does
Analyzes and optimizes CVs/resumes for ATS (Applicant Tracking System) pass-through and human reviewer impact. Handles keyword injection, structure optimization, achievement quantification, and formatted output in LaTeX or DOCX.

---

## Quick Start

1. User provides: existing CV (any format) + target job description (optional).
2. Claude analyzes ATS compatibility, structure, and content strength.
3. Claude produces optimized version with tracked changes / diff summary.

---

## ATS Optimization Rules

### Must-Do
- **Standard section headings**: Use exact labels ATS parsers expect: "Experience", "Education", "Skills", "Projects", "Certifications" — not creative alternatives.
- **Keyword match**: Extract hard skills and tools from the JD. Ensure each appears at least once in the CV, naturally integrated (not keyword-stuffed).
- **Reverse chronological order**: Most recent role first. ATS parsers expect this.
- **No tables, columns, or text boxes** in DOCX version (ATS can't parse these reliably). LaTeX is fine for human-read versions.
- **No headers/footers** for contact info in DOCX — put it in the body.
- **File format**: PDF from LaTeX for human review. DOCX (plain) for ATS submission.
- **Standard fonts**: Calibri, Arial, Garamond, Times New Roman.

### Keyword Strategy
1. Extract top 15-20 keywords from JD (tools, technologies, methodologies, soft skills).
2. Categorize: must-have (appears 2+ times in JD) vs nice-to-have.
3. Map each keyword to a CV section where it naturally fits.
4. Verify coverage: ≥80% of must-have keywords should appear in optimized CV.

---

## CV Structure Template

```
[FULL NAME]
[City, Country] | [Email] | [Phone] | [LinkedIn] | [Portfolio/GitHub]

PROFESSIONAL SUMMARY
[2-3 sentences: years of experience, core expertise, key achievement, target role alignment]

EXPERIENCE
[Job Title] — [Company Name], [City]                    [Start — End]
• [Action verb] + [what you did] + [measurable result]
• [Action verb] + [what you did] + [measurable result]
• [Action verb] + [what you did] + [measurable result]

[Previous Role...]

EDUCATION
[Degree] in [Field] — [University], [City]               [Year]
• [Relevant thesis, honors, GPA if strong]

SKILLS
Technical: [Tool 1, Tool 2, Tool 3, ...]
Languages: [Language 1 (Level), Language 2 (Level), ...]
Methodologies: [Agile, Scrum, ...]

CERTIFICATIONS (if any)
[Cert Name] — [Issuer] — [Year]

PROJECTS (if relevant)
[Project Name]: [1-2 sentence description + outcome]
```

---

## Achievement Quantification

### Before → After Examples

| Weak | Strong |
|------|--------|
| "Managed social media accounts" | "Grew Instagram following from 2K to 15K in 6 months, increasing engagement rate by 40%" |
| "Developed web applications" | "Built 3 client-facing web applications serving 5K+ monthly users, reducing load time by 60%" |
| "Taught programming" | "Taught Python and web development to 120+ students across 4 semesters, achieving 92% pass rate" |
| "Handled customer support" | "Resolved 200+ support tickets/month with 95% satisfaction rating" |

### Quantification Prompts (ask candidate if data missing)
- How many people/users/students were impacted?
- What was the before/after metric?
- How much time/money was saved?
- What was the scale (team size, budget, transactions)?

---

## LaTeX CV Template

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[margin=0.7in]{geometry}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage[hidelinks]{hyperref}
\usepackage{fontspec} % XeLaTeX

\setlist[itemize]{nosep, left=0pt}
\titleformat{\section}{\large\bfseries\uppercase}{}{0em}{}[\titlerule]
\titlespacing{\section}{0pt}{10pt}{5pt}

\begin{document}
\begin{center}
{\LARGE\bfseries Full Name}\\[4pt]
City, Country \textbar{} email@example.com \textbar{} +90 XXX XXX XX XX\\
\href{https://linkedin.com/in/username}{LinkedIn} \textbar{} \href{https://github.com/username}{GitHub}
\end{center}

\section{Professional Summary}
Summary text here.

\section{Experience}
\textbf{Job Title} \hfill Start -- End\\
\textit{Company Name, City}
\begin{itemize}
  \item Achievement 1 with metric
  \item Achievement 2 with metric
\end{itemize}

\section{Education}
\textbf{Degree in Field} \hfill Year\\
\textit{University Name, City}
\begin{itemize}
  \item Thesis: Title
\end{itemize}

\section{Skills}
\textbf{Technical:} Tool 1, Tool 2, Tool 3\\
\textbf{Languages:} Arabic (Native), English (Fluent), Turkish (Conversational)

\section{Projects}
\textbf{Project Name}: Description and outcome.

\end{document}
```

---

## Review Checklist

Claude runs this checklist on every CV:

- [ ] Contact info complete and in body (not header)
- [ ] Professional summary present and tailored
- [ ] All roles have quantified achievements (≥2 per role)
- [ ] Dates are consistent format (Month Year or Year only)
- [ ] No typos or grammatical errors
- [ ] Skills section matches JD keywords (≥80%)
- [ ] No personal info that causes bias (photo, age, marital status — unless required by country norms)
- [ ] File format appropriate (LaTeX PDF for human, DOCX for ATS)
- [ ] Total length: 1 page (junior/mid), max 2 pages (senior)

---

## Troubleshooting

### Issue: Candidate has gaps in employment
**Solution:** Use years-only dates. Add relevant projects, freelance work, or education during gap period. Never fabricate.

### Issue: Career changer with irrelevant experience
**Solution:** Lead with skills-based summary. Reframe transferable achievements. Put education/certifications above experience if more relevant to target role.

### Issue: CV too long
**Solution:** Cut roles older than 10 years to 1 line. Remove obvious skills (MS Office, email). Merge similar bullet points. Target 1 page for <10 years experience.
