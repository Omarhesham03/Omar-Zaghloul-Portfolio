---
name: "LaTeX Academic Writing"
description: "Write, edit, and manage LaTeX academic documents including theses, IEEE papers, and conference submissions. Use when the user mentions LaTeX, .tex files, BibTeX, thesis chapters, IEEE formatting, academic references, cross-referencing, or scholarly writing. Covers compilation, bibliography management, figure/table formatting, and multi-chapter document organization."
---

# LaTeX Academic Writing

## What This Skill Does
Assists with all aspects of LaTeX academic document authoring: structuring multi-chapter theses, managing BibTeX references across chapters, formatting IEEE/ACM-style papers, generating tables and figures, handling cross-references, and troubleshooting compilation errors.

## Prerequisites
- LaTeX distribution (TeX Live or MiKTeX)
- BibTeX or Biber for bibliography
- A .tex project or intent to create one

---

## Quick Start

### Compile a LaTeX document
```bash
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

### Common Scenarios

1. **Thesis chapter editing**: Provide the .tex file. Claude reads it, applies edits, and ensures cross-references and citations compile correctly.
2. **Reference integration**: Provide .bib file and chapter text. Claude identifies unused references and integrates them with proper `\cite{}` commands.
3. **IEEE paper formatting**: Claude applies `IEEEtran` class formatting, structures abstract/sections/references, and validates compliance.

---

## Step-by-Step Guide

### Multi-Chapter Thesis Structure

Standard structure Claude should generate or maintain:

```
thesis/
├── main.tex              # Root document with \include{} calls
├── preamble.tex          # Package imports, custom commands
├── chapters/
│   ├── chapter1.tex      # Introduction
│   ├── chapter2.tex      # Literature Review
│   ├── chapter3.tex      # Methodology
│   ├── chapter4.tex      # Results
│   └── chapter5.tex      # Conclusion
├── figures/
├── tables/
├── appendices/
├── references.bib        # Master bibliography
└── output/
```

### Reference Management Rules

1. **Scan all chapters** for `\cite{}` and `\citep{}` commands before modifying references.bib.
2. **Never remove a .bib entry** without confirming it is unused across ALL chapters.
3. **When integrating unused references**: Identify the most contextually relevant sentence or paragraph, insert a natural citation, and ensure the surrounding text flows.
4. **BibTeX key convention**: `AuthorYear` format (e.g., `Smith2023`). If collision, append lowercase letter (`Smith2023a`).
5. **Cross-chapter references**: Use `\label{}` and `\ref{}` with prefixes: `ch:`, `sec:`, `fig:`, `tab:`, `eq:` (e.g., `\label{fig:pose-estimation-pipeline}`).

### IEEE Paper Formatting

```latex
\documentclass[conference]{IEEEtran}
\usepackage{cite}
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{algorithmic}
\usepackage{graphicx}
\usepackage{textcomp}

\begin{document}
\title{Paper Title}
\author{\IEEEauthorblockN{Author Name}
\IEEEauthorblockA{Affiliation\\City, Country\\email@example.com}}
\maketitle
\begin{abstract}
Abstract text here.
\end{abstract}
\begin{IEEEkeywords}
keyword1, keyword2
\end{IEEEkeywords}
\section{Introduction}
% Content
\bibliographystyle{IEEEtran}
\bibliography{references}
\end{document}
```

### Table and Figure Best Practices

**Figures:**
```latex
\begin{figure}[htbp]
\centering
\includegraphics[width=\columnwidth]{figures/result.png}
\caption{Description of result.}
\label{fig:result}
\end{figure}
```

**Tables:**
```latex
\begin{table}[htbp]
\centering
\caption{Comparison of methods.}
\label{tab:comparison}
\begin{tabular}{lcc}
\hline
\textbf{Method} & \textbf{Accuracy} & \textbf{F1} \\
\hline
Proposed & 94.2\% & 0.93 \\
Baseline & 87.1\% & 0.85 \\
\hline
\end{tabular}
\end{table}
```

---

## Advanced Options

### Handling Compilation Errors
1. **Undefined citation**: Check .bib key spelling and ensure `\bibliography{}` path is correct.
2. **Missing \begin{document}**: Check preamble.tex for unclosed environments.
3. **Overfull hbox**: Use `\sloppy` locally or adjust figure widths.
4. **Label multiply defined**: Search all .tex files for duplicate `\label{}` strings.

### Thesis-Specific Commands
```latex
% Custom commands for consistency
\newcommand{\figref}[1]{Figure~\ref{fig:#1}}
\newcommand{\tabref}[1]{Table~\ref{tab:#1}}
\newcommand{\secref}[1]{Section~\ref{sec:#1}}
\newcommand{\eqref}[1]{Equation~(\ref{eq:#1})}
```

---

## Troubleshooting

### Issue: References not appearing
**Cause**: Compilation sequence incomplete.
**Solution**: Run `pdflatex → bibtex → pdflatex → pdflatex` (full cycle).

### Issue: Cross-references showing "??"
**Cause**: Single compilation pass.
**Solution**: Run pdflatex twice after any label/ref changes.

### Issue: .bib entries not matching citations
**Solution**: Run `grep -rn '\\cite' chapters/` to extract all citation keys, then diff against .bib entries.
