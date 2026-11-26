# Do when Bohdan is at the PC (saved 2026-11-25 ~01:00 Kyiv)

Bohdan: «Зробиш усе коли зайду з пк». When he opens a session from the PC, walk through this list.

## 1. ✅ DONE 2026-11-26 20:59 on MacBook (18 skills in ~/.claude/skills). Install Claude skills locally
Reviewed in the cloud session on 2026-11-24: no exfil or `curl | sh`. impeccable's launcher may download its engine
from github.com/pbakaus/impeccable releases (checksum-verified). ui-ux-pro-max search runs Python scripts.
Do NOT install n8n-skills `hooks/`.

```bash
mkdir -p ~/.claude/skills
git clone --depth 1 https://github.com/czlonkowski/n8n-skills /tmp/n8ns && cp -r /tmp/n8ns/skills/* ~/.claude/skills/
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill /tmp/uiux && cp -r /tmp/uiux/.claude/skills/ui-ux-pro-max ~/.claude/skills/
git clone --depth 1 https://github.com/pbakaus/impeccable /tmp/imp && cp -r /tmp/imp/.claude/skills/impeccable ~/.claude/skills/
git clone --depth 1 https://github.com/dickwu/apple-design-skill /tmp/ads && mkdir -p ~/.claude/skills/apple-design && cp -r /tmp/ads/* ~/.claude/skills/apple-design/
```
Installed: 15 n8n skills (n8n-workflow-patterns, n8n-expression-syntax, n8n-node-configuration, n8n-code-javascript,
n8n-error-handling, n8n-agents, n8n-validation-expert, n8n-self-hosting, n8n-subworkflows, n8n-binary-and-data,
n8n-code-tool, n8n-code-python, n8n-mcp-tools-expert, n8n-multi-instance, using-n8n-mcp-skills), ui-ux-pro-max,
impeccable, apple-design.

Other popular design skills found (stars 24.11), not installed yet: Leonxlnx/taste-skill 121k, Nutlope/hallmark 61k,
heydamir/unslop 21k, anthropics/skills 200k, obra/superpowers 326k, bergside/awesome-design-skills 3.8k.

## 2. Open items waiting for Bohdan's decision («так» needed for each)
- First n8n exercise (use the n8n skills above).
- Profile text translation — apply only after «так».
- Rate $20 → $25 — only after «так».
- Open-for-work badge and boost — decide.
- Explain the Connects drop.

## 3. Still running in the cloud
Scheduled Upwork checks: main :47, extra :17, fast scans :02 and :32 (see upwork-handoff.md). Log: upwork-seen.md.

## 4. Demo «до / після» для ніші Website fixes & polish (додано 26.11)
Мета: перший елемент портфоліо, що показує саме послугу «правка мобільної версії».
1. Взяти одну зі своїх демо-сторінок (наприклад /examples/en/barber.html) або LUMEX.
2. Зробити копію сторінки й навмисно «зламати» мобільну версію типовими багами: горизонтальний скрол, меню налазить на лого, текст у hero обрізається, форма вилазить за екран, кнопки замалі.
3. Скріни на 375 px (iPhone) ДО — потім виправити — скріни ПІСЛЯ. Записати, що саме змінено (3–5 рядків).
4. Елемент портфоліо: назва «Mobile layout fix: before / after (demo)», 2–4 зображення 1000×750, опис «проблема → що зробив → результат», чесно позначено demo.
5. Опційно: 15 хв на кожен конструктор (Squarespace, Webflow, Framer, Wix — безкоштовні акаунти): змінити CSS секції й мобільний вигляд. Лише після цього додати їх у скіли.

## 5. Нове відео-візитівка під нішу Website fixes (додано 26.11, «пізніше»)
За курсом: 40–50 с, Богдан у кадрі, посмішка, охайний одяг, енергійний голос, текст рівня B1–B2, читати з ноутбука по 1–2 речення, потім склеїти.
Фон: робочий стіл із моніторами (це і є хобі з профілю) — охайно, без зайвого; світло спереду (вікно або лампа за камерою), не спиною до вікна.
Кадр: камера на рівні очей, плечі й голова, горизонтально 16:9. Звук: тиха кімната, телефон ближче (петличка, якщо є).
Чернетка тексту (Богдан править своїми словами, потім простий переклад):
1. Hi, I'm Bogdan, a front-end developer from Lviv, Ukraine.
2. I fix websites that look good on a laptop but break on a phone.
3. Menus over the logo, pages that scroll sideways, forms that don't send.
4. I find the problem, give you a fixed price, and fix it.
5. You get before and after screenshots, so you see what changed.
6. I also run my own online store, LUMEX, so I know how much a broken mobile page costs.
7. Send me your page link and tell me what's wrong. Talk soon!
Опційно: 2–3 с вставки екрана «до/після» мобільної правки (з демо з п.4).
