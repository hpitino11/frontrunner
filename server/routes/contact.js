import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { getResendClient } from '../utils/resend.js';

const router = Router();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: 'draft-7', legacyHeaders: false, message: { error: 'Too many requests. Please call us for immediate help.' } });
const services = ['Water Damage', 'Fire & Smoke Damage', 'Mold Remediation', 'Storm Damage', 'Emergency Restoration', 'Dry Ice Blasting', 'Other'];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, max = 500) { return typeof value === 'string' ? value.trim().slice(0, max) : ''; }
function cleanSingleLine(value, max) { return clean(value, max).replace(/[\r\n\t\u0000-\u001f\u007f]/g, ' '); }
function cleanMessage(value, max) { return clean(value, max).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, ''); }
function escapeHtml(value) { return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]); }

router.post('/', limiter, async (req, res) => {
  if (!req.is('application/json')) return res.status(415).json({ error: 'This endpoint accepts JSON requests only.' });
  if (clean(req.body.website, 200)) return res.status(200).json({ ok: true });
  const data = {
    firstName: cleanSingleLine(req.body.firstName, 60), lastName: cleanSingleLine(req.body.lastName, 60),
    email: cleanSingleLine(req.body.email, 150).toLowerCase(), phone: cleanSingleLine(req.body.phone, 40),
    service: cleanSingleLine(req.body.service, 60), message: cleanMessage(req.body.message, 2000),
  };
  if (!data.firstName || !data.lastName || !emailPattern.test(data.email) || data.phone.length < 7 || !services.includes(data.service) || data.message.length < 5) {
    return res.status(400).json({ error: 'Please complete every field with valid contact details.' });
  }
  const resend = getResendClient();
  if (!resend || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
    console.error('Contact form email settings are not configured.');
    return res.status(503).json({ error: 'Email delivery is not configured yet.' });
  }
  try {
    const safe = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, escapeHtml(value)]));
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: `New ${data.service} request from ${data.firstName} ${data.lastName}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#171717"><h1 style="border-bottom:3px solid #b28a3d;padding-bottom:14px">New restoration request</h1><p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Service:</strong> ${safe.service}</p><p><strong>Message:</strong></p><p style="white-space:pre-wrap;background:#f3f1ed;padding:18px">${safe.message}</p></div>`,
    });
    if (error) throw error;
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Resend error:', error?.message || error);
    return res.status(502).json({ error: 'We could not send your request right now.' });
  }
});

export default router;
