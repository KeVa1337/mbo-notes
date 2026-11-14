# Upwork alert template (approved by Bohdan, Nov 12, 2026)

Send an alert only for jobs that pass the filter in `upwork-handoff.md`.
🟢 = apply, 🟡 = worth a look but has risks (say which). Jobs that fail the filter are not sent at all.
All text in Ukrainian except the proposal itself (English).

## 1. Short version (push notification / Telegram)
```
🟢 Upwork: варта вакансія            (or 🟡 Upwork: варто глянути, але є ризики)

<Job title>
💰 <budget> · заявок: <n> · <cost> Connects (у вас <balance>)
👤 <country> · <spent> витрачено · <rating>★ · <hire rate>% наймів
🕒 опубліковано <age> тому · співбесід: <n>

Чому варто: <1 line>
⚠️ Ризик: <1 line, if any>

Заявка готова в Claude. Відповідь: так / змінити / ні
🔗 <job url>
```
PushNotification: one line, e.g. `🟢 Upwork: <title>, <budget>, <n> заявок, <cost> Connects. Заявка готова.`
Telegram: POST https://jarvis.mbo-solutions.com/api/notify (the network secret adds X-Notify-Token; send header `X-Notify-Token: proxy-injected`) with JSON
`{"text": <short version as Telegram HTML>, "html": true, "kind": "upwork", "buttons": [{"text": "🔗 Відкрити вакансію", "url": <job url>}, {"text": "💬 Відповісти в Claude", "url": "https://claude.ai/code/session_0114m5SukjDLxgxkoUMJ2CCb"}]}`.
HTML style (approved look): first line `🟢 <b>UPWORK · ВАРТА ВАКАНСІЯ</b>`, blank line, `<b>title</b>`, then 💰 budget · ⏱ age / 📨 proposals · interviews / 🎟 Connects <i>(лишиться N)</i>, blank line, `👤 <b>Клієнт</b>` with ├ └ lines, `✅ <b>Чому варто</b>` bullets, `⚠️ <b>Ризик</b>` bullets, `<blockquote>Заявка готова в Claude. Відповідь: <b>так</b> / <b>змінити</b> / <b>ні</b></blockquote>`. Escape &, <, > in job text. Don't put the job URL in the text (it's the button).
Client viewed/replied/invite notices: same endpoint, "kind": "upwork", short HTML text + the job button.

## 2. Full version (in the Claude chat)
- Title with link.
- Table: budget (+ other bids if known), proposals / interviews / hires / invites, Connects (cost and what's left), client (country, spend, rating and review count, hire rate, jobs posted), preferred locations / qualifications and whether he meets them.
- What they ask: 2-3 sentences.
- ✅ For him / ⛔ against him: short bullets, quote the job text for hard requirements.
- Verdict: 🟢 подавати / 🟡 на ваш вибір / ❌ пропустити.
- Price and milestones, 2-3 portfolio highlights.
- Proposal (English, upwork-proposal-writer skill + "Proposal style" section in upwork-profile.md: 60-120 words, facts only, no filler; no em dashes, no contact info, demos labelled as demos) + every screening question answered separately.
- Ask: «Відправити? так / змінити (що саме) / ні. Вкладення потрібні?»

## 3. Other alerts
- 👀 Client viewed proposal «<title>» (<price>): info only.
- 💬 Client replied on «<title>»: with a draft reply.
- 📩 Invitation to «<title>»: breakdown + draft reply (invites cost no Connects).
- Nothing worth it: one sentence in chat, no push, no Telegram.
