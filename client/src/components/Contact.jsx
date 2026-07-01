import { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock3, Phone } from 'lucide-react';

const initial = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '', website: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', message: '' });
  const change = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your request…' });
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Something went wrong.');
      setForm(initial);
      setStatus({ type: 'success', message: 'Your request was sent. We’ll be in touch shortly.' });
    } catch (error) {
      setStatus({ type: 'error', message: `${error.message} For urgent help, please call us.` });
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <div className="eyebrow"><span /> Request help</div><h2>Need restoration help?</h2>
          <p>Send a message or call now for fast support. Tell us what happened and we’ll help you understand the next step.</p>
          <a className="contact__phone" href="tel:+18883796882"><span><Phone /></span><div><small>For urgent help, call</small><b>1-888-DRYOUT-2</b></div></a>
          <div className="contact__availability"><Clock3 /> Available 24 hours for emergency calls</div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label className="form-honeypot" aria-hidden="true">Website<input name="website" value={form.website} onChange={change} tabIndex="-1" autoComplete="off" /></label>
          <div className="form-row"><label>First name<input required name="firstName" value={form.firstName} onChange={change} autoComplete="given-name" /></label><label>Last name<input required name="lastName" value={form.lastName} onChange={change} autoComplete="family-name" /></label></div>
          <div className="form-row"><label>Email<input required type="email" name="email" value={form.email} onChange={change} autoComplete="email" /></label><label>Phone<input required type="tel" name="phone" value={form.phone} onChange={change} autoComplete="tel" /></label></div>
          <label>Service needed<select required name="service" value={form.service} onChange={change}><option value="" disabled>Select a service</option><option>Water Damage</option><option>Fire & Smoke Damage</option><option>Mold Prevention</option><option>Storm Damage</option><option>Emergency Restoration</option><option>Dry Ice Blasting</option><option>Other</option></select></label>
          <label>How can we help?<textarea required name="message" value={form.message} onChange={change} rows="4" placeholder="Briefly describe what happened…" /></label>
          <button className="button button--gold form-submit" type="submit" disabled={status.type === 'loading'}>{status.type === 'loading' ? 'Sending…' : 'Request help'} <ArrowRight size={18} /></button>
          {status.message && <div className={`form-status form-status--${status.type}`}>{status.type === 'success' && <CheckCircle2 />} {status.message}</div>}
        </form>
      </div>
    </section>
  );
}
