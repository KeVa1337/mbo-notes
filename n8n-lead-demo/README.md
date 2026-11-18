# Website lead → Leads table + Telegram alert (n8n demo)

A small n8n workflow for a business that loses leads in an inbox nobody checks.
Built and tested on n8n 2.48.5 with sample data. No client data inside.

## What it does

1. **Intake.** The website form sends a POST request to the webhook `/lead`.
2. **Clean and check for spam.** A Code node trims the fields, lowercases the email and strips the phone to digits.
   A lead is marked as spam when the hidden `website` field is filled, there is no email and no phone,
   the email is invalid, or the message has more than two links.
3. **Save.** Every lead goes to the `Leads` data table. Spam is saved too, with the reason, so nothing is lost.
4. **Alert.** A real lead goes to Telegram with the name, contact, message and a "Reply by email" button.
   Spam stays silent. The form gets `{"ok": true}` in both cases, so a bot learns nothing.
5. **Daily summary at 9:00.** Yesterday's numbers by source. If there were no leads, the message says so:
   an early sign that the form is broken.

Test run on sample data: 0.8 s from the form request to the Telegram alert.

## Files

- `workflow.json`: import this in n8n (Workflows → Import from file).
- `form.html`: a plain test form with the hidden spam field.
- `build-workflow.cjs`: generates `workflow.json` (`node build-workflow.cjs [credentialId] [notifyUrl] > workflow.json`).

## Set up after import

1. Create a data table named `Leads` with the columns
   `name, email, phone, message, source, status, spam_reason` (text) and `received_at` (date).
2. Telegram. The two "Telegram" nodes are HTTP Request nodes that call a small relay endpoint
   (`POST {"text", "html", "buttons"}` with a token in the `X-Notify-Token` header).
   Either put your relay URL and a Header Auth credential there, or replace both nodes with the built-in
   Telegram node (Send Message, parse mode HTML, text = `alert_text` / `text`).
3. Publish the workflow and put the production webhook URL into your form (see `form.html`).

To keep leads in Google Sheets, Airtable or a CRM, swap the two data table nodes for that app's node.
The rest of the workflow stays the same.

## Test

```bash
# a real lead: saved and sent to Telegram
curl -X POST https://YOUR-N8N/webhook/lead -H 'content-type: application/json' \
  -d '{"name":"Anna Kovalenko","email":"anna.demo@example.com","phone":"+380 67 000 00 00","message":"I need a booking page for my yoga studio.","source":"booking form"}'

# spam: saved with the reason, no alert
curl -X POST https://YOUR-N8N/webhook/lead -H 'content-type: application/json' \
  -d '{"name":"SEO","email":"x@example.com","message":"cheap traffic","website":"http://spam.example"}'
```
