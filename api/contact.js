// File: /api/contact.js  (ESM)
import { Resend } from 'resend';

const isEmail = (v) => typeof v === 'string' && /.+@.+\..+/.test(v);

async function readJSON(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const raw = Buffer.concat(chunks).toString('utf8') || '';
  try { return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const FROM = process.env.CONTACT_FROM_EMAIL;
  const TO   = process.env.CONTACT_TO_EMAIL;
  const API  = process.env.RESEND_API_KEY;

  if (!FROM || !TO || !API) {
    return res.status(500).json({ error: 'Server email configuration missing' });
  }

  try {
    const { name, email, phone, company, services, message, hp } = await readJSON(req);

    // Honeypot: if bots fill this, pretend success
    if (hp) return res.status(200).json({ ok: true });

    if (!name || !isEmail(email) || !message) {
      return res.status(400).json({ error: 'Missing or invalid fields' });
    }

    const resend = new Resend(API);

    const N = String(name).slice(0,200);
    const E = String(email).slice(0,320);
    const P = phone ? String(phone).slice(0,50) : '';
    const C = company ? String(company).slice(0,200) : '';
    const S = services ? String(services).slice(0,200) : '';
    const M = String(message).slice(0,5000);

    // 1) Owner notification
    await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: E,
      subject: `New Nocto enquiry from ${N}`,
      text:
        `Name: ${N}\n` +
        `Email: ${E}\n` +
        `Phone: ${P || '-'}\n` +
        `Company: ${C || '-'}\n` +
        `Service: ${S || '-'}\n\n` +
        `Message:\n${M}`
    });

    // 2) Auto-reply to sender
    await resend.emails.send({
      from: FROM,
      to: E,
      subject: 'Thanks — we received your enquiry',
      text: `Hi ${N},\n\nThanks for contacting Nocto. We’ll get back to you shortly.\n\n— Nocto`
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: 'Failed to send' });
  }
}
