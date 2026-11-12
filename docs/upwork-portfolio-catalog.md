# Upwork: тексти для портфоліо і Project Catalog (12 листопада 2026)

API Upwork не дає редагувати портфоліо і каталог фрилансера, тому їх вставляємо вручну. Цифри виміряні локально через Lighthouse 12 (mobile) 12.11.2026:
Ohmline 98 / Dentavia 98 / BLADE 88 performance; accessibility 93 / 97 / 100; вага 158 / 132 / 402 KB.
LUMEX: performance 51 (LCP 6.1 s), тому для LUMEX цифр не показуємо (спершу пришвидшити сайт).

## 1. Порядок портфоліо (Profile → Portfolio → перетягнути)
1. LUMEX (live) · 2. MBO Leads · 3. Jarvis · 4. Ohmline (EV) · 5. Dentavia · 6. BLADE · 7. Khmara · 8. AURUM · 9. Pivonia · 10. TIREHUB · 11. GLOSSLAB · 12. MBO Solutions

## 2. Нові описи (Problem → Built → Result)

### LUMEX — Mobile-first online store for custom LED car art (live)
Problem: a small brand selling neon-lit acrylic prints of customers' cars got almost all its traffic from Instagram on phones, and orders got lost in DMs.
Built: a mobile-first store with a live product configurator, a gallery of finished works and one-tap ordering via Telegram or Instagram.
Result: live and taking orders. I built it and still run and update it.

### MBO Leads — AI Telegram bot that finds and sorts freelance jobs
Problem: good freelance jobs are buried in dozens of channels and feeds.
Built: a Telegram bot (Node.js, TypeScript, PostgreSQL) that reads RSS, Reddit, public Telegram channels and Threads. Claude AI checks every post (real job or not, category, budget, remote), duplicates and spam are removed, and each subscriber gets only matching jobs. Free and Pro plans, rating buttons, admin commands.
Result: runs every 3 minutes, around the clock.

### Jarvis — AI assistant: Telegram bot + web dashboard
Problem: notes, reminders and client-site checks were spread across five apps.
Built: a Telegram bot on the Claude API plus a web dashboard: voice notes, photos and PDFs become tasks; reminders with Done / +1 h / Tomorrow buttons; uptime checks every minute; SSL and domain expiry; weekly PageSpeed; lead alerts from websites; morning and evening reports.
Result: I use it every day to run my studio.

### Ohmline — EV dealership website with 3D walkaround (demo)
Goal: turn people browsing EVs into booked test drives.
Built: a scroll-driven 360° walkaround from AI-generated studio frames, inventory filters with range gauges, a monthly cost calculator (loan + charging vs gas) and test-drive booking.
Result: 98 mobile PageSpeed (Lighthouse), 158 KB page, reduced-motion mode.

### Dentavia — Dental clinic website with cost calculator (demo)
Goal: get more consultations by showing honest prices up front.
Built: a before/after smile slider, a 3D implant explainer, a treatment cost calculator with monthly financing, and dentist + time-slot booking.
Result: 98 mobile PageSpeed, 97 accessibility (Lighthouse), 132 KB page.

### BLADE — Barbershop website with online booking (demo)
Goal: let clients book a cut on their phone in under a minute.
Built: 5-step booking (service, barber, day, free slot, contact) with per-barber schedules, a price list with photo previews, a sticky mobile "Book a cut" bar and a loyalty card.
Result: 88 mobile PageSpeed, 100 accessibility (Lighthouse).

Інші демо (Khmara, AURUM, Pivonia, TIREHUB, GLOSSLAB) лишити як є, у назві вже є "(concept)".

## 3. Project Catalog: Telegram-сповіщення
Обкладинка: works/out/upwork/catalog-telegram-alerts.jpg (1600x1200).
Title (69): You will get Telegram alerts for every website lead, booking or order
Category: Web, Mobile & Software Dev → Scripts & Utilities (або Chatbot Development, якщо є в списку)
Search tags: telegram bot, lead notification, form to telegram, booking alerts, telegram api

Tiers:
| | Starter $40 | Standard $90 | Advanced $180 |
|---|---|---|---|
| Delivery | 2 days | 3 days | 5 days |
| Sources (forms, booking, shop) | 1 | up to 3 | up to 5 |
| Recipients / chats | 1 | 2 | 3 |
| Buttons under each alert (call, reply, confirm) | – | ✓ | ✓ |
| Spam filter | basic | ✓ | ✓ |
| Daily summary | – | ✓ | ✓ |
| Google Sheets log | – | – | ✓ |
| Bot commands (/today, /stats) | – | – | ✓ |
| Revisions | 1 | 2 | 3 |

Description:
Stop losing leads in an inbox nobody checks. I connect your website forms, booking system or online store to Telegram, so every new enquiry, booking or order lands on your phone within seconds, already formatted and easy to act on.

What you get
• A private Telegram bot that belongs to you
• Alerts for every new lead, booking or order, with the details that matter
• Buttons to call the client, confirm or reply (Standard and Advanced)
• A daily summary and a Google Sheets log (Advanced)
• A short handover doc, everything on your own accounts

Works with custom websites, React / Next.js, Node.js, Webflow and Tilda forms, Google Forms, Calendly-style booking and most shops with webhooks. Not for WordPress plugin development.

I run the same setup for my own studio: leads from my website land in my Telegram assistant.

Requirements for the client:
• Link to your website and which forms or events to connect
• Admin or developer access to the form / site (or a webhook URL I can use)
• Your Telegram username (I'll guide you through creating the bot in 2 minutes)

FAQ:
Q: Do I need a developer to keep it running? A: No. It runs on your accounts and I hand over a short doc.
Q: Can several people get the alerts? A: Yes, 2 chats on Standard, 3 on Advanced, or a group.
Q: What if my site is on WordPress? A: If the form can send a webhook or email, it usually works; message me first.

## 4. Project Catalog: Fix or finish an AI-built app (пізніше, коли запрацюють перші два)
Title (74): You will get your Lovable, Bolt or Cursor app fixed, finished and deployed
Tiers: $60 (1 bug or deploy, 2 days) / $150 (up to 5 fixes + deploy, 4 days) / $350 (finish a feature set, auth, DB, deploy, 7 days).
