// Builds workflow.json for the "Website lead → table + Telegram alert" n8n demo.
// Usage: node build-workflow.cjs [credentialId] [notifyUrl] > workflow.json
// Without arguments it writes the shareable version with placeholders.
const credId = process.argv[2] || "REPLACE_WITH_YOUR_CREDENTIAL_ID";
const NOTIFY_URL = process.argv[3] || "https://YOUR-DOMAIN/api/notify";

const cleanCode = `// Clean the form fields, check for spam, prepare the Telegram text
const b = $input.first().json.body ?? {};
const one = (v) => String(v ?? '').trim().replace(/\\s+/g, ' ');
const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const name = one(b.name).slice(0, 80);
const email = one(b.email).toLowerCase().slice(0, 120);
const phone = one(b.phone).replace(/[^\\d+]/g, '').slice(0, 20);
const message = String(b.message ?? '').trim().slice(0, 1500);
const source = one(b.source).slice(0, 60) || 'website';

const links = (message.match(/https?:\\/\\//gi) || []).length;
let reason = '';
if (one(b.website)) reason = 'hidden field filled (bot)';
else if (!email && !phone) reason = 'no contact details';
else if (email && !/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email)) reason = 'invalid email';
else if (links > 2) reason = 'too many links';

const lines = [
  '🔔 <b>New lead</b> · ' + esc(source),
  '<b>' + esc(name || 'No name') + '</b>',
  email ? '📧 ' + esc(email) : '',
  phone ? '📞 ' + esc(phone) : '',
  '',
  esc(message || '(no message)'),
].filter((l, i) => l !== '' || i === 4);

const buttons = email
  ? [{ text: 'Reply by email', url: 'https://mail.google.com/mail/?view=cm&to=' + encodeURIComponent(email) }]
  : [];

return [{ json: {
  name, email, phone, message, source,
  status: reason ? 'spam' : 'new',
  spam_reason: reason,
  received_at: new Date().toISOString(),
  alert_text: lines.join('\\n'),
  buttons,
} }];`;

const summaryCode = `// Count yesterday's leads and build one short Telegram message
const rows = $input.all().map((i) => i.json);
const tz = 'Europe/Kyiv';
const day = (d) => new Date(d).toLocaleDateString('en-CA', { timeZone: tz });
const y = new Date(Date.now() - 24 * 3600 * 1000);
const yesterday = day(y);

const mine = rows.filter((r) => r.received_at && day(r.received_at) === yesterday);
const fresh = mine.filter((r) => r.status === 'new');
const spam = mine.filter((r) => r.status === 'spam');
const bySource = {};
for (const r of fresh) bySource[r.source || 'website'] = (bySource[r.source || 'website'] || 0) + 1;
const esc = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const text = [
  '📊 <b>Leads yesterday</b> (' + yesterday + ')',
  'New: <b>' + fresh.length + '</b> · spam blocked: ' + spam.length,
  ...Object.entries(bySource).map(([s, n]) => '• ' + esc(s) + ': ' + n),
  fresh.length ? '' : 'No new leads. Worth checking that the form still works.',
].filter((l) => l !== '').join('\\n');

return [{ json: { text, new_leads: fresh.length, spam: spam.length } }];`;

const table = { __rl: true, mode: "name", value: "Leads" };
const cred = { httpHeaderAuth: { id: credId, name: "Telegram relay token" } };

const sticky = (name, content, x, y, w, h, color) => ({
  parameters: { content, height: h, width: w, color },
  type: "n8n-nodes-base.stickyNote", typeVersion: 1, position: [x, y], id: name.toLowerCase().replace(/\W+/g, "-"), name,
});

const nodes = [
  sticky("Note intake", "## 1. Intake and spam check\nThe website form posts here. Fields are cleaned, and bots are caught by a hidden field, a missing contact or too many links.", -80, -180, 520, 420, 4),
  sticky("Note store", "## 2. Save every lead\nNew and spam rows both go to the Leads table, so nothing is lost and spam rules can be tuned later.", 460, -180, 280, 420, 5),
  sticky("Note alert", "## 3. Telegram alert\nReal leads reach the owner's phone in seconds, with a one-tap reply button. Spam is saved but stays silent.", 760, -180, 760, 420, 6),
  sticky("Note summary", "## Daily summary, 9:00\nYesterday's numbers in one message. If there were no leads, it says so: an early sign that the form is broken.", -80, 280, 1220, 300, 7),
  {
    parameters: { httpMethod: "POST", path: "lead", responseMode: "responseNode", options: {} },
    type: "n8n-nodes-base.webhook", typeVersion: 2.2, position: [0, 60], id: "webhook-lead", name: "Website form (webhook)", webhookId: "lead-demo-webhook",
  },
  {
    parameters: { jsCode: cleanCode },
    type: "n8n-nodes-base.code", typeVersion: 2, position: [240, 60], id: "clean-check", name: "Clean and check for spam",
  },
  {
    parameters: {
      resource: "row", operation: "insert", dataTableId: table,
      columns: {
        mappingMode: "defineBelow",
        value: {
          name: "={{ $json.name }}", email: "={{ $json.email }}", phone: "={{ $json.phone }}", message: "={{ $json.message }}",
          source: "={{ $json.source }}", status: "={{ $json.status }}", spam_reason: "={{ $json.spam_reason }}", received_at: "={{ $json.received_at }}",
        },
        matchingColumns: [],
        schema: ["name", "email", "phone", "message", "source", "status", "spam_reason"].map((id) => ({
          id, displayName: id, required: false, defaultMatch: false, display: true, type: "string", readOnly: false, removed: false,
        })).concat([{ id: "received_at", displayName: "received_at", required: false, defaultMatch: false, display: true, type: "dateTime", readOnly: false, removed: false }]),
        attemptToConvertTypes: false, convertFieldsToString: false,
      },
      options: {},
    },
    type: "n8n-nodes-base.dataTable", typeVersion: 1.1, position: [540, 60], id: "save-lead", name: "Save to Leads table",
  },
  {
    parameters: {
      conditions: {
        options: { caseSensitive: true, leftValue: "", typeValidation: "strict", version: 2 },
        conditions: [{ id: "is-spam", leftValue: "={{ $json.status }}", rightValue: "spam", operator: { type: "string", operation: "equals" } }],
        combinator: "and",
      },
      options: {},
    },
    type: "n8n-nodes-base.if", typeVersion: 2.2, position: [820, 60], id: "is-spam", name: "Spam?",
  },
  {
    parameters: {
      method: "POST", url: NOTIFY_URL, authentication: "genericCredentialType", genericAuthType: "httpHeaderAuth",
      sendBody: true, specifyBody: "json",
      jsonBody: "={{ JSON.stringify({ kind: 'info', html: true, text: $('Clean and check for spam').item.json.alert_text, buttons: $('Clean and check for spam').item.json.buttons }) }}",
      options: { timeout: 10000 },
    },
    type: "n8n-nodes-base.httpRequest", typeVersion: 4.2, position: [1060, 140], id: "telegram-alert", name: "Telegram alert",
    credentials: cred, onError: "continueRegularOutput", retryOnFail: true, maxTries: 2, waitBetweenTries: 2000,
  },
  {
    parameters: { respondWith: "json", responseBody: "={{ JSON.stringify({ ok: true }) }}", options: {} },
    type: "n8n-nodes-base.respondToWebhook", typeVersion: 1.1, position: [1320, 140], id: "reply-ok", name: "Reply OK to the form",
  },
  {
    parameters: { respondWith: "json", responseBody: "={{ JSON.stringify({ ok: true }) }}", options: {} },
    type: "n8n-nodes-base.respondToWebhook", typeVersion: 1.1, position: [1060, -40], id: "reply-spam", name: "Reply OK, no alert",
  },
  {
    parameters: { rule: { interval: [{ triggerAtHour: 9 }] } },
    type: "n8n-nodes-base.scheduleTrigger", typeVersion: 1.2, position: [0, 420], id: "daily-9", name: "Every day at 9:00",
  },
  {
    parameters: { resource: "row", operation: "get", dataTableId: table, matchType: "anyCondition", filters: {}, returnAll: true },
    type: "n8n-nodes-base.dataTable", typeVersion: 1.1, position: [240, 420], id: "read-leads", name: "Read Leads table", alwaysOutputData: true,
  },
  {
    parameters: { jsCode: summaryCode },
    type: "n8n-nodes-base.code", typeVersion: 2, position: [540, 420], id: "count-yesterday", name: "Count yesterday's leads",
  },
  {
    parameters: {
      method: "POST", url: NOTIFY_URL, authentication: "genericCredentialType", genericAuthType: "httpHeaderAuth",
      sendBody: true, specifyBody: "json",
      jsonBody: "={{ JSON.stringify({ kind: 'info', html: true, text: $json.text }) }}",
      options: { timeout: 10000 },
    },
    type: "n8n-nodes-base.httpRequest", typeVersion: 4.2, position: [820, 420], id: "telegram-summary", name: "Telegram summary",
    credentials: cred, retryOnFail: true, maxTries: 2, waitBetweenTries: 2000,
  },
];

const link = (to) => ({ node: to, type: "main", index: 0 });
const connections = {
  "Website form (webhook)": { main: [[link("Clean and check for spam")]] },
  "Clean and check for spam": { main: [[link("Save to Leads table")]] },
  "Save to Leads table": { main: [[link("Spam?")]] },
  "Spam?": { main: [[link("Reply OK, no alert")], [link("Telegram alert")]] },
  "Telegram alert": { main: [[link("Reply OK to the form")]] },
  "Every day at 9:00": { main: [[link("Read Leads table")]] },
  "Read Leads table": { main: [[link("Count yesterday's leads")]] },
  "Count yesterday's leads": { main: [[link("Telegram summary")]] },
};

process.stdout.write(JSON.stringify({
  name: "Website lead → Leads table + Telegram alert",
  nodes, connections,
  settings: { executionOrder: "v1", timezone: "Europe/Kyiv" },
}, null, 2) + "\n");
