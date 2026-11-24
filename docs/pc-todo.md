# Do when Bohdan is at the PC (saved 2026-11-25 ~01:00 Kyiv)

Bohdan: «Зробиш усе коли зайду з пк». When he opens a session from the PC, walk through this list.

## 1. Install Claude skills locally (cloud container copies are temporary)
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
