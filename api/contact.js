// File: /api/contact.js
// Vercel Serverless Function for a Vite (React) site.
// CommonJS to avoid package.json ESM edits.

const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const body = await readJSON(req);
    const { name, email, phone, company, services, message, hp } = body || {};

    // Honeypot trap: if present, silently succeed
    if (hp) {
      res.status(200).json({ ok: true });
      return;
    }

    // Basic validation
    if (!name || !email || !services || !message) {
      res.status(400).json({ error: 'Missing required fields: name, email, services, and message are required' });
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Owner notification
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `New Nocto enquiry from ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || '-'}\n` +
        `Company: ${company || '-'}\n` +
        `Services: ${services || '-'}\n\n` +
        `Message:\n${message}`,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: email,
      subject: 'Thanks — we got your message',
      text: `Hi ${name},\n\nThanks for contacting Nocto. We'll get back to you shortly.\n\n— Nocto`,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
};

// Minimal JSON body parser for Node serverless functions
async function readJSON(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8') || '';
  try { return raw ? JSON.parse(raw) : {}; } catch { return {}; }
}