---
name: "MCP Server Builder"
description: "Generate MCP server boilerplate in Python (FastMCP) or Node.js for custom integrations. Use when the user mentions MCP server, Model Context Protocol, custom tools, tool server, or AI tool integration."
---
# MCP Server Builder
## Python (FastMCP) Template
```python
from fastmcp import FastMCP

mcp = FastMCP("My Custom Server")

@mcp.tool()
def my_tool(param1: str, param2: int = 10) -> str:
    """Description of what this tool does.

    Args:
        param1: Description of param1
        param2: Description of param2
    """
    # Implementation
    result = f"Processed {param1} with value {param2}"
    return result

@mcp.resource("data://{item_id}")
def get_data(item_id: str) -> str:
    """Retrieve data for a specific item."""
    return f"Data for {item_id}"

if __name__ == "__main__":
    mcp.run()
```

## Node.js (MCP SDK) Template
```javascript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({ name: "my-server", version: "1.0.0" }, {
  capabilities: { tools: {} }
});

server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "my_tool",
    description: "What this tool does",
    inputSchema: {
      type: "object",
      properties: {
        param1: { type: "string", description: "Description" }
      },
      required: ["param1"]
    }
  }]
}));

server.setRequestHandler("tools/call", async (request) => {
  const { name, arguments: args } = request.params;
  if (name === "my_tool") {
    return { content: [{ type: "text", text: `Result: ${args.param1}` }] };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

## Deployment Options
- **stdio**: Local development, Claude Code integration
- **SSE**: Web-hosted, claude.ai connectors (e.g., on Render)
- **Streamable HTTP**: Modern transport for production

## Checklist
- [ ] Every tool has a clear description (this becomes the AI's understanding)
- [ ] Input schemas are complete with types and descriptions
- [ ] Error handling returns informative messages
- [ ] Rate limiting implemented for external API calls
- [ ] Health check endpoint for hosted deployments
