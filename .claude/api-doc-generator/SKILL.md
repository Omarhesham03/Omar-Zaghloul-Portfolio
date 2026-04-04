---
name: "API Documentation Generator"
description: "Generate OpenAPI/Swagger documentation from code with endpoint descriptions, request/response schemas, and example payloads. Use when the user mentions API docs, Swagger, OpenAPI, endpoint documentation, or API reference."
---
# API Documentation Generator
## What This Skill Does
Takes backend code (Express, FastAPI, Django, NestJS) and generates OpenAPI 3.0 specification with complete endpoint documentation.
## Output: OpenAPI 3.0 YAML
```yaml
openapi: 3.0.3
info:
  title: [API Name]
  version: 1.0.0
  description: [API description]
servers:
  - url: https://api.example.com/v1
paths:
  /resource:
    get:
      summary: List resources
      parameters:
        - name: page
          in: query
          schema: { type: integer, default: 1 }
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items: { $ref: '#/components/schemas/Resource' }
components:
  schemas:
    Resource:
      type: object
      properties:
        id: { type: string, format: uuid }
        name: { type: string }
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
```
## Generation Rules
- Every endpoint gets: summary, description, parameters, request body, all response codes (200, 400, 401, 404, 500)
- Every schema property gets: type, description, example value, required flag
- Authentication documented at global and per-endpoint level
- Pagination parameters standardized (page, limit, offset)
