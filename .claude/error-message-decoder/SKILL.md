---
name: "Error Message Decoder"
description: "Decode cryptic error messages from any tool or language, explaining cause and solution. Use when the user mentions error message, stack trace, exception, error code, debugging help, or 'what does this error mean'."
---
# Error Message Decoder
## Process
1. Parse the error message and identify: source (language/tool), error type, location
2. Explain what the error means in plain language
3. Identify the most likely cause
4. Provide a specific fix
5. Suggest prevention strategies

## Output Format
```
ERROR DECODED
=============
Source: [Language / Tool / Service]
Type: [Error category]
Message: [Original error]

WHAT IT MEANS:
[Plain language explanation — no jargon]

MOST LIKELY CAUSE:
[Specific reason this happened]

FIX:
[Step-by-step solution]

IF THAT DOESN'T WORK:
[Alternative cause + fix]

PREVENTION:
[How to avoid this in the future]
```

## Common Error Patterns
| Pattern | Usually Means |
|---------|--------------|
| `ECONNREFUSED` | Target service isn't running or wrong port |
| `ENOENT` | File or directory doesn't exist |
| `ENOMEM` | Out of memory |
| `EPERM` / `EACCES` | Permission denied |
| `TypeError: Cannot read property 'X' of undefined` | Accessing property on null/undefined object |
| `ModuleNotFoundError` | Package not installed or wrong import path |
| `CORS error` | Backend missing CORS headers for frontend origin |
| `401 Unauthorized` | Invalid or expired authentication |
| `429 Too Many Requests` | Rate limited — implement backoff |
| `OOM Killed` | Process exceeded memory limit (container/serverless) |
