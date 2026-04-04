---
name: "Client Onboarding Agent"
description: "Generate project setup checklists, folder structures, kickoff agendas, and access request lists from a signed SOW. Use when the user mentions new client, project kickoff, onboarding, project setup, or starting a new engagement."
---

# Client Onboarding Agent

## What This Skill Does
Takes a signed SOW and produces everything needed to start a project cleanly: folder structure, tool setup checklist, kickoff meeting agenda, and communication plan.

## Outputs

### 1. Project Folder Structure
```
[client-name]-[project-name]/
├── 01-discovery/
│   ├── requirements.md
│   ├── stakeholder-notes/
│   └── assets-received/
├── 02-design/
│   ├── wireframes/
│   ├── mockups/
│   └── approved/
├── 03-development/
│   ├── src/
│   ├── docs/
│   └── environments.md
├── 04-testing/
│   ├── test-cases/
│   └── bug-reports/
├── 05-delivery/
│   ├── deployment-guide.md
│   ├── handover-docs/
│   └── training-materials/
├── contracts/
│   ├── signed-sow.pdf
│   └── change-requests/
└── communications/
    └── meeting-notes/
```

### 2. Tool Setup Checklist
- [ ] Git repository created + client added (if collaborative)
- [ ] Project management board created (Asana/Notion)
- [ ] Communication channel set up (Slack/WhatsApp group)
- [ ] Cloud storage shared (Drive/Dropbox)
- [ ] Hosting/domain access obtained
- [ ] Design tool workspace created (Figma)
- [ ] Staging environment provisioned
- [ ] Invoice template prepared with milestone schedule

### 3. Kickoff Meeting Agenda (60 min)
```
[0:00-0:05] Introductions
[0:05-0:15] Project scope review (walk through SOW)
[0:15-0:25] Timeline and milestones
[0:25-0:35] Communication plan (frequency, channels, response SLA)
[0:35-0:45] Immediate needs from client (content, access, assets)
[0:45-0:55] Q&A
[0:55-0:60] Next steps + action items
```

### 4. Client Welcome Message
```
Hi [Client Name],

Welcome aboard! Here's what to expect in the first week:

1. You'll receive access to [project board / shared folder]
2. Please send us: [specific assets/content/credentials needed]
3. Our first check-in is scheduled for [date]

For any questions, reach [contact] via [channel].

Looking forward to working together.
[Name], [Agency]
```
