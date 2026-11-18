# Upwork: портфоліо під «AI Automation» (19 листопада 2026)

Портфоліо на Upwork редагується тільки вручну (конектор не має такої дії). Тут усе готове для вставки:
порядок, тексти англійською, скіли, які картинки куди. Ліміти Upwork: Title до 70 знаків, Role до 100, Description до 600, до 5 скілів.

Навіщо: заголовок профілю каже «AI Automation Developer | n8n, Telegram Bots, AI Agents», а портфоліо відкривалось сайтами
і не мало жодного прикладу з n8n. За курсом ключові слова мають бути в заголовку, описі, скілах і роботах.

## 1. Порядок (Profile → Portfolio → кнопка зі стрілками «Reorder» → перетягнути)

1. Jarvis (AI-агент, свій, щодня в роботі)
2. MBO Leads (Telegram-бот з AI-фільтром)
3. n8n workflow (нова робота, демо)
4. LUMEX (живий сайт клієнта)
5. MBO Solutions (свій живий сайт, заявки в Telegram)
6. Ohmline, EV dealership (98 PageSpeed)
7. Dentavia (98 PageSpeed)
8. BLADE (88 PageSpeed, 100 accessibility)
9. Khmara
10. AURUM
11. Pivonia
12. TIREHUB
13. GLOSSLAB

Курс: портфоліо максимум 2 сторінки. Що прибрати, залежить від того, скільки робіт видно на одній сторінці у твоєму профілі (питання 3 внизу).

## 2. Jarvis (редагувати наявну роботу)

Title:
```
Jarvis — AI agent in Telegram (Claude API) with a web dashboard
```
Role (без змін):
```
Full-stack developer: back end, database, AI integration, dashboard
```
Description:
```
My own AI assistant. I use it every day to run my web studio. It is a Telegram bot on the Claude API plus a web dashboard.

What it does:
- turns voice notes, photos and PDFs into notes and tasks
- sends reminders with quick buttons (Done / +1 h / Tomorrow)
- checks client sites every minute and alerts me when one goes down
- watches SSL and domain expiry, runs weekly PageSpeed checks
- sends new website leads to Telegram
- morning and evening reports

Tools: Node.js, TypeScript, PostgreSQL, Claude API, Telegram Bot API, Docker.
The screens show the real interface with demo data.
```
Skills (замість Node.js, TypeScript, PostgreSQL, API Integration, Chatbot Development):
```
AI Agent Development, Claude, Bot Development, Telegram API, API Integration
```
Картинки: без змін (4 шт.). На них справжній інтерфейс, але дані демо (вигадані назви клієнтів), тому в описі є останній рядок.

## 3. MBO Leads (редагувати наявну роботу)

Title (було «AI bot that finds and sorts freelance jobs»):
```
MBO Leads — Telegram bot with an AI filter for public job posts
```
Role (без змін):
```
Solo developer: idea, back end, AI classification, deployment
```
Description:
```
My own project. A Telegram bot that reads public job posts and sends each subscriber only the ones that match their skills.

What it does:
- reads public RSS feeds, Reddit, public Telegram channels and Threads (official Meta API)
- Claude AI checks every post: real job or not, category, budget, remote
- removes duplicates, ads and spam before anything is sent
- free and Pro plans, rating buttons under each job card
- admin commands for sources and stats

Tools: Node.js, TypeScript, PostgreSQL, Claude API, Telegram Bot API, Docker.
The screens show sample job cards.
```
Skills (було Node.js, TypeScript, PostgreSQL, OpenAI API, AI Chatbot; OpenAI там не використовується, бот працює на Claude):
```
Claude, Bot Development, Telegram API, Automation, Node.js
```
Картинки: видалити всі 4 старі, завантажити 2 нові: `leads-1.jpg`, `leads-2.jpg`.
Причина: на старих були екрани /stats і /sources з вигаданими цифрами (312 користувачів, 1 184 пости), поданими як справжні.

Про ризик із курсу (блокування за автоматичні Telegram-канали з вакансіями): бот не читає Upwork, у коді його немає.
Джерела: публічні RSS (у т.ч. Freelancehunt), Reddit, публічні Telegram-канали, Threads через офіційний API. Тому в описі джерела названі прямо.

## 4. n8n workflow (нова робота: Portfolio → «+»)

Title:
```
n8n workflow: website leads to Telegram with a spam filter (demo)
```
Role:
```
Automation developer: workflow design, JavaScript code nodes, testing
```
Description:
```
A demo workflow I built and tested in n8n. Sample data, no client.

Task: a small business loses leads because form emails sit in an inbox nobody checks.

What it does:
- a webhook takes leads from any website form
- a code node cleans the fields and catches spam (hidden field, no contact, too many links)
- every lead is saved to a table; spam is marked with the reason, not deleted
- real leads go to Telegram with a reply button
- daily summary at 9:00, with a warning if there were no leads

Test run: 0.8 s from form to alert. The table can be swapped for Google Sheets, Airtable or a CRM.
```
Skills:
```
n8n, Automation, API Integration, Telegram API, JavaScript
```
Картинки (у цьому порядку, перша стає обкладинкою): `n8n-1.jpg`, `n8n-2.jpg`, `n8n-3.jpg`, `n8n-4.jpg`.
Що на них: 1 і 2 і 3 це справжні скріншоти n8n (редактор, виконання з зеленими галочками за 835 мс, таблиця Leads),
телефон поруч повторює дослівно те, що workflow надіслав у Telegram під час тесту. 4 це схема.
Сам workflow: `n8n-lead-demo/workflow.json` (+ `README.md`, `form.html`).

## 5. Дрібні правки (за бажанням)

MBO Solutions, Title (зараз просто «MBO Solutions», без ключових слів):
```
MBO Solutions — studio website with lead forms sent to Telegram (live)
```
EV Dealership, Title (зараз «… | React-style UI»; хвіст нічого не каже клієнту і не збігається з іншими назвами):
```
Ohmline — EV dealership website with 3D walkaround (concept)
```

## 6. Як вставляти

1. upwork.com → твій профіль → блок Portfolio.
2. Наявна робота: відкрити її → олівець (Edit) → замінити Title, Description, Skills → для MBO Leads замінити картинки → Publish.
3. Нова робота: «+» у блоці Portfolio → Title, Role, Description, Skills → завантажити 4 картинки → Publish.
4. Порядок: кнопка зі стрілками біля «+» → перетягнути за списком із розділу 1.

## 7. Питання до Богдана

1. MBO Leads зараз запущений і має справжніх користувачів? Скільки приблизно? Якщо так, допишу в опис чесний рядок на кшталт «Live, N users».
2. У тебе є свій n8n (cloud або на VPS)? Раджу перед публікацією імпортувати `workflow.json` і один раз запустити самому,
   щоб на питання клієнта ти відповідав із власного досвіду. Якщо n8n є, підключимо Google Sheets замість вбудованої таблиці.
3. Скільки робіт видно на одній сторінці портфоліо у твоєму профілі: 3 чи 6? Якщо 6, прибираємо одну (раджу GLOSSLAB), щоб лишилось 12.
   Якщо 3, лишаємо 6: Jarvis, MBO Leads, n8n, LUMEX, MBO Solutions, Dentavia. Решту видаляти лише після того, як збережеш собі картинки.
4. Що таке «Workday — Freelancer» в історії роботи і чи точна назва диплома «Bachelor of Computer Applications»?
