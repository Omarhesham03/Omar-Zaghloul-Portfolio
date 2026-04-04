---
name: "n8n Workflow Scaffolder"
description: "Generate, debug, and manage n8n workflow JSON definitions including MCP trigger nodes, webhook configurations, and node schemas. Use when the user mentions n8n, workflow automation, n8n nodes, MCP trigger, workflow JSON, or self-hosted n8n. Covers workflow creation, node configuration, MCP exposure via trigger nodes with defined schemas, credential setup, and error handling patterns."
---

# n8n Workflow Scaffolder

## What This Skill Does
Generates valid n8n workflow JSON files with correct node types, connections, and configurations. Specializes in MCP trigger node setup (critical for exposing workflows as callable tools), webhook workflows, and multi-step automation chains.

## Prerequisites
- n8n instance (self-hosted or cloud)
- For MCP exposure: n8n version with MCP trigger node support
- Target: self-hosted instance at user's Render deployment or equivalent

---

## Quick Start

1. User describes the automation (e.g., "webhook that receives a lead, enriches via Apollo, saves to Google Sheet").
2. Claude generates the complete n8n workflow JSON.
3. User imports via n8n UI (Settings → Import Workflow) or API.

---

## Critical: MCP Trigger Node Configuration

**This is the most common failure point.** Workflows exposed via MCP MUST have:

1. **An MCP Trigger node** (not a regular webhook trigger)
2. **A defined input schema** on the trigger node — without this, the workflow won't be callable from Claude or any MCP client
3. **A defined output schema** for structured responses

### MCP Trigger Node Template

```json
{
  "nodes": [
    {
      "parameters": {
        "toolDescription": "Describe what this workflow does — this becomes the tool description in MCP",
        "inputSchema": {
          "type": "object",
          "properties": {
            "param1": {
              "type": "string",
              "description": "Description of parameter 1"
            },
            "param2": {
              "type": "number",
              "description": "Description of parameter 2"
            }
          },
          "required": ["param1"]
        }
      },
      "type": "n8n-nodes-base.mcpTrigger",
      "typeVersion": 1,
      "position": [250, 300],
      "id": "mcp-trigger-id",
      "name": "MCP Trigger"
    }
  ]
}
```

### Common MCP Config Mistakes

| Mistake | Symptom | Fix |
|---------|---------|-----|
| No MCP trigger node | Workflow doesn't appear in MCP tool list | Add `n8n-nodes-base.mcpTrigger` as first node |
| Missing inputSchema | Tool appears but can't be called | Define `inputSchema` with properties and types |
| Schema has no descriptions | MCP client doesn't know what to send | Add `description` to every property |
| Workflow not active | Tool not reachable | Activate workflow in n8n UI |
| Wrong MCP endpoint URL | Connection timeout | Verify `/mcp/{workflow-id}` path matches |

---

## Workflow JSON Structure

### Minimal Valid Workflow

```json
{
  "name": "My Workflow",
  "nodes": [
    {
      "parameters": {},
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [250, 300],
      "id": "unique-id-1",
      "name": "Manual Trigger"
    },
    {
      "parameters": {
        "url": "https://api.example.com/data",
        "method": "GET",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4,
      "position": [450, 300],
      "id": "unique-id-2",
      "name": "HTTP Request"
    }
  ],
  "connections": {
    "Manual Trigger": {
      "main": [
        [
          {
            "node": "HTTP Request",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "settings": {
    "executionOrder": "v1"
  }
}
```

### Common Node Types

| Node Type | Use Case | Key Parameters |
|-----------|----------|----------------|
| `n8n-nodes-base.webhook` | HTTP trigger | `path`, `method`, `responseMode` |
| `n8n-nodes-base.mcpTrigger` | MCP tool exposure | `toolDescription`, `inputSchema` |
| `n8n-nodes-base.httpRequest` | API calls | `url`, `method`, `headers`, `body` |
| `n8n-nodes-base.code` | Custom JS/Python | `jsCode` or `pythonCode` |
| `n8n-nodes-base.if` | Conditional | `conditions` |
| `n8n-nodes-base.set` | Set/transform data | `values` |
| `n8n-nodes-base.googleSheets` | Google Sheets R/W | `operation`, `sheetId`, `range` |
| `n8n-nodes-base.slack` | Slack messaging | `channel`, `text` |
| `n8n-nodes-base.emailSend` | Send email | `to`, `subject`, `text` |

---

## Workflow Patterns

### Pattern 1: Webhook → Process → Respond
```
Webhook Trigger → Code (transform) → HTTP Request (enrich) → Set (format) → Respond to Webhook
```

### Pattern 2: MCP Tool → Action → Return
```
MCP Trigger → Code (validate input) → HTTP Request (external API) → Code (format output) → Return
```

### Pattern 3: Scheduled → Batch → Notify
```
Schedule Trigger → HTTP Request (fetch data) → Split In Batches → Code (process) → IF (condition) → Slack (notify)
```

### Error Handling Pattern
```json
{
  "parameters": {},
  "type": "n8n-nodes-base.errorTrigger",
  "typeVersion": 1,
  "position": [250, 500],
  "id": "error-handler",
  "name": "Error Trigger"
}
```
Connect error trigger to a Slack/email notification node for monitoring.

---

## Deployment Checklist

1. **Import JSON** into n8n instance
2. **Configure credentials** for any external services (Apollo, Google Sheets, Slack)
3. **Set environment variables** if using Code nodes with secrets
4. **Activate workflow** (toggle in n8n UI)
5. **Test with sample input** before exposing via MCP
6. **For MCP**: Verify the workflow appears at `{n8n-url}/mcp/{path}` and responds to a test tool call

---

## Troubleshooting

### Issue: Workflow imported but nodes show errors
**Cause**: Missing credentials or incompatible node versions.
**Solution**: Re-create credentials in n8n UI, verify node `typeVersion` matches installed n8n version.

### Issue: MCP trigger not appearing in Claude's tool list
**Cause**: Workflow not active, or inputSchema missing/malformed.
**Solution**: Activate workflow. Verify `inputSchema` is valid JSON Schema with `type: "object"` at root.

### Issue: Render deployment sleeping / timeout
**Cause**: Free-tier Render instances spin down after inactivity.
**Solution**: Use a health-check ping (cron job or UptimeRobot) to keep instance warm, or upgrade to paid tier.
