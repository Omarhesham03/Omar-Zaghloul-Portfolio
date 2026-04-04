---
name: "Data Format Converter"
description: "Convert between JSON, CSV, XML, YAML, SQL, and other data formats with validation and schema inference. Use when the user mentions format conversion, JSON to CSV, XML to JSON, data transformation, or file format conversion."
---
# Data Format Converter
## Supported Conversions
| From → To | Method | Notes |
|-----------|--------|-------|
| JSON → CSV | Flatten nested objects, array rows | Handles nested with dot notation |
| CSV → JSON | Parse headers as keys | Auto-detect delimiter |
| JSON ↔ YAML | Direct mapping | Preserve comments in YAML→JSON→YAML |
| JSON → SQL INSERT | Generate INSERT statements | Escape strings, handle NULL |
| CSV → SQL CREATE + INSERT | Infer types from data | VARCHAR/INT/FLOAT/DATE detection |
| XML → JSON | Element → key, attribute → @attr | Handle arrays vs singles |
| JSON → XML | Key → element | Root element required |

## Process
1. Detect/confirm input format
2. Parse and validate input
3. Infer schema if not provided
4. Transform to target format
5. Validate output
6. Report any data loss or type coercion

## Edge Cases to Handle
- Nested objects in CSV (flatten with separator)
- Mixed types in same column
- NULL vs empty string vs missing field
- Unicode and special characters
- Large files (streaming vs in-memory)
