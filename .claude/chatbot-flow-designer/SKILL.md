---
name: "Chatbot Personality and Flow Designer"
description: "Design conversational AI chatbot flows, persona definitions, fallback handling, and escalation paths. Use when the user mentions chatbot design, conversation flow, bot personality, chatbot UX, or conversational AI architecture."
---
# Chatbot Personality and Flow Designer
## Deliverables
### 1. Persona Definition
```
BOT PERSONA
===========
Name: [Bot name]
Tone: [Professional / Friendly / Casual]
Language(s): [EN / AR / TR]
Personality traits: [Helpful, concise, empathetic — 3-5 traits]
Vocabulary level: [Simple / Technical / Mixed]
Things it says: [Example phrases]
Things it never says: [Forbidden phrases]
Avatar: [Visual description]
```
### 2. Conversation Flow
```
ENTRY POINTS:
- Website widget → Welcome message
- WhatsApp → Greeting
- Direct link → Context-specific opener

MAIN FLOWS:
Flow 1: [Use case — e.g., "Get a quote"]
  User: [Trigger message]
  Bot: [Response + question]
  → Branch A: [Path if user says X]
  → Branch B: [Path if user says Y]
  → Fallback: [If input not understood]

ESCALATION:
- After [N] failed attempts → "Let me connect you with a human"
- Sensitive topics → Immediate escalation
- Business hours: [Live chat] / After hours: [Collect info, promise callback]
```
### 3. Fallback Handling
- Level 1: Rephrase and re-ask
- Level 2: Offer menu of common options
- Level 3: Escalate to human with conversation context
