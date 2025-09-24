// File: /api/contact.js
// Vercel Serverless Function for a Vite (React) site.
// Sends the enquiry to you + an acknowledgement to the sender.
// Requires env vars in Vercel: RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL

const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.CONTACT_FROM_EMAIL; // e.g., 'Nocto <hello@nocto.co.za>'
const TO   = process.env.CONTACT_TO_EMAIL;   // e.g., 'info@nocto.co.za'

// Basic email sanity check (very light)
const isEmail = (v) => typeof v === 'string' && /.+@.+\..+/.test(v);

// Minimal JSON body parser for Vercel Node functions
async function readJSON(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8') || '';
  try { return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}

module.exports = async function handler(req, res) {
  // Allow simple CORS preflight if you ever embed the form elsewhere
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!process.env.RESEND_API_KEY || !FROM || !TO) {
      return res.status(500).json({ error: 'Server email configuration missing' });
    }

    const { name, email, phone, company, message, hp } = await readJSON(req);

    // Honeypot: if a bot fills this, pretend success
    if (hp) return res.status(200).json({ ok: true });

    // Basic validations + simple size limits
    if (!name || !isEmail(email) || !message) {
      return res.status(400).json({ error: 'Missing or invalid fields' });
    }
    const trimmed = {
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 320),
      phone: phone ? String(phone).slice(0, 50) : '',
      company: company ? String(company).slice(0, 200) : '',
      message: String(message).slice(0, 5000)
    };

    // 1) Notify you
    await resend.emails.send({
      from: FROM,         // e.g., 'Nocto <hello@nocto.co.za>'
      to: TO,             // where you receive enquiries
      reply_to: trimmed.email,
      subject: `New Nocto enquiry from ${trimmed.name}`,
      text:
        `Name: ${trimmed.name}\n` +
        `Email: ${trimmed.email}\n` +
        `Phone: ${trimmed.phone || '-'}\n` +
        `Company: ${trimmed.company || '-'}\n\n` +
        `Message:\n${trimmed.message}`
    });

    // 2) Auto-reply to the sender (plain text keeps it simple & reliable)
    await resend.emails.send({
      from: FROM,
      to: trimmed.email,
      subject: 'Thanks — we received your enquiry',
      text:
        `Hi ${trimmed.name},\n\n` +
        `Thanks for contacting Nocto. We’ve received your message and will get back to you shortly.\n\n` +
        `— Nocto`
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    // Avoid leaking internals; log in Vercel if you need details
    return res.status(500).json({ error: 'Failed to send' });
  }
};
