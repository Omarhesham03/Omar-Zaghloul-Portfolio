---
name: "Webhook Tester and Debugger"
description: "Generate test payloads, validate webhook endpoints, and diagnose delivery failures. Use when the user mentions webhook testing, payload testing, webhook debugging, endpoint testing, or webhook delivery issues."
---
# Webhook Tester and Debugger
## Test Payload Generator
Given a webhook's expected schema, generate:
- Valid payload (happy path)
- Payload with missing required fields
- Payload with wrong types
- Payload with extra fields
- Empty payload
- Oversized payload

## Debugging Checklist
1. [ ] Endpoint URL correct and accessible (not localhost)
2. [ ] HTTPS enforced (most services require it)
3. [ ] Correct HTTP method (usually POST)
4. [ ] Content-Type header set (application/json)
5. [ ] Authentication/signature verification passing
6. [ ] Response returns 2xx within timeout (usually 5-30s)
7. [ ] No CORS blocking (if browser-based)
8. [ ] Firewall/WAF not blocking webhook IP ranges
9. [ ] Payload size within limits
10. [ ] Idempotency handled (same event delivered twice)
