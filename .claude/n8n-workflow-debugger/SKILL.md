---
name: "n8n Workflow Debugger"
description: "Diagnose failing n8n workflows from error messages and workflow JSON. Use when the user mentions n8n error, workflow failure, n8n debugging, node error, or execution failure."
---
# n8n Workflow Debugger
## Common Error Patterns
| Error | Cause | Fix |
|-------|-------|-----|
| `NodeOperationError` | Wrong parameters or missing credentials | Verify node config and credential binding |
| `ECONNREFUSED` | Target service unreachable | Check URL, firewall, service status |
| `401 Unauthorized` | Invalid/expired credentials | Refresh API key or OAuth token |
| `429 Too Many Requests` | Rate limiting | Add Wait node, implement backoff |
| `Workflow could not be activated` | Trigger node misconfigured | Check trigger type and required fields |
| `No items` / empty output | Previous node returned no data | Add IF node to handle empty results |
| `TypeError: Cannot read property` | Data structure mismatch | Check expression references with `{{ $json }}` |

## Debugging Steps
1. Read the error message — identify which node failed
2. Check that node's input data (was it what you expected?)
3. Verify credentials are connected and valid
4. Test the node in isolation (manual execution)
5. Check n8n version compatibility for the node type
6. Review execution log for the full stack trace
