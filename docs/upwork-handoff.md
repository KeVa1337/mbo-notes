# Upwork: where we are (handoff for the next session)

Updated: Nov 12, 2026. Read together with `docs/upwork-profile.md` (profile facts, rules verified against the Help Center, proposals log).

## Status
- Profile 100% complete: photo, title "Full-Stack Developer | AI Integrations, Chatbots, React & Node.js", overview, 10 portfolio items (LUMEX, Jarvis, MBO Leads, AURUM, Khmara, BLADE, Pivonia, Dentavia, TIREHUB, GLOSSLAB), 2 Mate Academy certificates, video intro, employment history, other experience, custom URL upwork.com/freelancers/bohdanmudryk.
- Money: Payoneer withdrawal (switch schedule Quarterly -> Monthly, $100 threshold, if not done), W-8BEN valid to Dec 31, 2029 (name Mudryk Bohdan), 2FA on.
- Open for work badge ON, max 14 Connects/week, since Nov 12. Review results Nov 19: invites/profile views; turn off if zero.
- Project Catalog: Fix project live. Next: AI chatbot project ~Nov 14, Landing project 2-3 days later (texts: works/out/upwork/catalog/catalog-texts.md, also summarized in upwork-profile.md).
- Connects: 105 (Nov 12).
- Nov 12: BLADE and Dentavia EN demos got a motion upgrade (published) with distinct stat blocks (Dentavia: light 97% ring panel; BLADE: barbershop receipt); Upwork portfolio images replaced.
- GitHub: public showcase repo KeVa1337/freelance-jobs-bot (clean copy of mbo-leads). mbo-leads must stay PRIVATE (check). GitHub avatar still to upload.
- English test (Duolingo): later; free practice test first, real test only if 120+.

## Job search setup
Saved searches (alerts allowed on max 3):
1. AI & bots
2. Fixes (plan: turn its alert OFF)
3. React/Node
4. NEW "AI apps & Supabase": `lovable OR "bolt.new" OR supabase OR "vibe coding" OR "claude code" OR "ai-generated app" OR "ai generated app"`, category Web, Mobile & Software Dev, Payment verified, proposals 0-4 and 5-9, Most Recent (plan: turn its alert ON).
"Jobs picked for you": Instant, min $15/hr, $50 fixed.

Extra queries to try (same filters):
- `"telegram bot" OR "telegram mini app" OR grammy OR telegraf`
- `"openai api" OR "claude api" OR anthropic OR "gpt integration" OR "ai chatbot" OR "rag"`
- `("node.js" OR express OR "rest api" OR webhook) (fix OR integrate OR small OR quick)`
- `"google sheets" OR "apps script" OR "google api" OR "automation script"`
- `(react OR "next.js") (bug OR fix OR error OR "not working" OR broken)`
- `ukrainian OR ukraine OR russian` (no category)
- Hourly check also searches titles: rag, llm, ai agent, openai, claude (AI integrations pay best, priority if budget ≥ ~$150).

## Job filter (skip if any)
- Payment unverified
- Rate/budget below ~$15/hr effective ($3-12/hr jobs are common, skip)
- Hard requirement he lacks: Shopify apps, WordPress/Wix/Webflow, Unreal/mobile native, Loom or calls in English, location restriction he fails
- More than ~15 proposals, or interviews/hires already running
- Older than ~1 day (old lists in search are stale; rely on fresh alerts)

## Upwork connector
Official Upwork connector exists (find_jobs etc.). If it's connected in this session: use READ-ONLY tools (search/read jobs) only; never boost, submit, message or change anything without an explicit request. No automated polling; check when asked (1-2 times a day).
Connected Nov 12, 2026. Freelancer org_uid 1499896572521324545. Rate limit ~12 find_jobs calls/min: run searches in small batches.
What works: find_jobs smart_search mode=most_recent days_posted=1-3 verified_payment_only proposals_max=10-15; search with short `title` (1-2 words) + verified + proposals_max + sort=recency. Long OR-queries in `query` return nothing.
Nov 12 scan (~60 jobs): nothing passed the filter. The market is mostly Wix/Squarespace/WordPress/Shopify, $3-20 budgets, or non-dev roles. All 3 proposals sent so far: not viewed yet, 0 invitations.

## Scheduled Upwork check
Telegram alerts: working since Nov 12, 2026 (POST https://jarvis.mbo-solutions.com/api/notify; the X-Notify-Token header is injected by the environment's network secret, send any placeholder).
Scheduled task trig_01JqY5XSSze4YJALVVFhAjja fires into session_0114m5SukjDLxgxkoUMJ2CCb every hour at :47 from 10:47 to 00:47 Kyiv (covers EU and US business hours). Dedupe list: docs/upwork-seen.md.

## Reminders scheduled in the previous session (they fire there, not here)
- Nov 14 12:00 Kyiv: publish catalog project 2 (AI chatbot).
- Nov 19 19:00 Kyiv: review Open for work badge results.
