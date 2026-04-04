---
name: "Multilingual Email and Outreach Drafter"
description: "Draft professional emails and outreach messages in English, Arabic, and Turkish with context-appropriate tone and formatting. Use when the user mentions email drafting, outreach, cold email, follow-up, professional correspondence, job inquiry, client communication, or multilingual messaging. Covers B2B cold outreach, job applications, client updates, and formal institutional correspondence."
---

# Multilingual Email and Outreach Drafter

## What This Skill Does
Generates professional emails and messages in EN/AR/TR with calibrated tone, cultural norms, and formatting conventions per language and context type. Handles cold outreach, job inquiries, client communication, and institutional correspondence.

---

## Quick Start

1. User specifies: recipient, purpose, language, and key points.
2. Claude drafts the message with appropriate salutation, body, CTA, and sign-off.
3. User reviews and sends.

---

## Context Types and Tone Matrix

| Context | English Tone | Arabic Tone | Turkish Tone |
|---------|-------------|-------------|--------------|
| B2B Cold Outreach | Direct, value-first, concise | Warm opening, relationship-oriented, then value | Formal but approachable, respect hierarchy |
| Job Application | Professional, achievement-focused | Formal, respectful, mention qualifications humbly | Formal, use "Sayın" prefix, structured |
| Client Update | Clear, status-focused, next steps | Warm greeting, positive framing, then status | Professional, clear deliverables |
| Follow-up | Polite nudge, add new value | Re-establish warmth, gentle reminder | Polite, reference previous contact |
| Formal/Institutional | Structured, formal register | Highly formal, use appropriate honorifics | Formal, use institutional language |

---

## Language-Specific Rules

### English
- Lead with the point. First sentence = why you're writing.
- Keep paragraphs to 2-3 sentences max.
- CTA must be specific and actionable ("Could we schedule a 15-minute call this week?").
- No filler phrases ("I hope this email finds you well" — skip unless culturally expected by recipient).
- Subject line: <50 characters, specific.

### Arabic (العربية)
- Open with appropriate Islamic/formal greeting: "السلام عليكم ورحمة الله وبركاته" (formal/religious context) or "تحية طيبة" (secular/business).
- Use MSA (Modern Standard Arabic) for formal correspondence, not dialect.
- Honorifics matter: "السيد/السيدة", "الأستاذ/الأستاذة", "الدكتور/الدكتورة".
- Structure: greeting → warm intro → purpose → details → polite close.
- RTL formatting. Ensure any mixed EN/AR content handles bidirectional text.
- Close with "وتفضلوا بقبول فائق الاحترام والتقدير" (formal) or "مع خالص التحية" (standard).

### Turkish
- Open with "Sayın [Name/Title]" for formal, "Merhaba [Name]" for semi-formal.
- Use formal register (-sınız/siniz verb forms) unless explicitly told otherwise.
- Structure: salutation → context → request → closing.
- Close with "Saygılarımla" (formal) or "İyi çalışmalar" (collegial).
- Turkish-specific: avoid overly direct requests in first contact; frame as "opportunity to discuss" rather than demands.

---

## Email Templates

### B2B Cold Outreach (English)
```
Subject: [Specific pain point] — [Company Name]

Hi [First Name],

[One sentence identifying their specific pain point or trigger event].

At [Agency], we help [vertical] companies [specific outcome]. [One concrete proof point: metric, client name, or case study].

Worth a 15-minute call this [day]?

Best,
[Name]
[Title] | [Company]
```

### Job Inquiry (Arabic)
```
الموضوع: استفسار عن فرص العمل — [المجال/الوظيفة]

السلام عليكم ورحمة الله وبركاته،

الأستاذ/ة [الاسم] المحترم/ة،

أكتب إليكم للاستفسار عن الفرص المتاحة في [المؤسسة] في مجال [التخصص].

[فقرة قصيرة عن الخلفية والمؤهلات]

[فقرة عن القيمة المضافة التي يمكن تقديمها]

أرفق سيرتي الذاتية للاطلاع، وأتطلع للحديث معكم حول إمكانية التعاون.

وتفضلوا بقبول فائق الاحترام والتقدير،
[الاسم]
[المسمى الوظيفي]
[معلومات التواصل]
```

### Client Update (Turkish)
```
Konu: [Proje Adı] — Haftalık Güncelleme

Sayın [İsim],

Bu hafta gerçekleştirdiğimiz çalışmalar hakkında sizi bilgilendirmek istiyorum.

Tamamlanan işler:
• [Madde 1]
• [Madde 2]

Devam eden işler:
• [Madde 1] — tahmini tamamlanma: [tarih]

Sizden ihtiyacımız olan:
• [Aksiyon maddesi]

Herhangi bir sorunuz olursa lütfen çekinmeden yazın.

Saygılarımla,
[İsim]
```

---

## Advanced Options

### Sequence Emails (Multi-touch B2B)
Claude can generate a 3-5 email sequence:
1. **Day 0**: Initial outreach (value proposition)
2. **Day 3**: Follow-up (new angle / case study)
3. **Day 7**: Break-up email (scarcity / final offer)
4. **Day 14**: Re-engagement (new trigger event)

### Tone Adjustment
User can specify: "more formal", "warmer", "more urgent", "shorter" — Claude adjusts while maintaining cultural appropriateness.

### Subject Line Variants
Claude generates 3 subject line options per email, optimized for open rate.

---

## Troubleshooting

### Issue: Mixed language formatting breaks
**Solution:** Keep each language block separate. Don't interleave AR and EN in the same paragraph. Use clear section breaks.

### Issue: Tone too casual for context
**Solution:** Claude defaults to formal register for first contact. User must explicitly request casual tone.
