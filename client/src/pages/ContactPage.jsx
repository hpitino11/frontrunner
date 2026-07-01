import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';

const initial = { firstName: '', lastName: '', email: '', phone: '', service: '', message: '', website: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', message: '' });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your request…' });
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setForm(initial);
      setStatus({ type: 'success', message: "Your message was sent. We’ll be in touch shortly." });
    } catch (error) {
      setStatus({ type: 'error', message: `${error.message} For urgent help, please call us.` });
    }
  };

  return (
    <>
      <section className="section contact-intro">
        <div className="container">
          <div className="contact-intro__grid">
            <div className="contact-intro__info">
              <h1 className="contact-intro__heading">Get in Touch</h1>
              <p className="contact-intro__desc">Whether you have experienced water damage, need a structural drying assessment, or want to learn more about our services, we are ready to help. Fill out the form below or reach us directly using the contact information provided.</p>
              <p className="contact-info-label">Contact Info</p>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-info-icon"><MapPin /></span>
                  <div><strong>Address</strong><span>3561 SW Pumpkin St, Port Saint Lucie, Florida</span></div>
                </div>
                <a href="tel:+15612607494" className="contact-info-item contact-info-item--link">
                  <span className="contact-info-icon"><Phone /></span>
                  <div><strong>Phone</strong><span>+1 (561) 260-7494</span></div>
                </a>
                <div className="contact-info-item">
                  <span className="contact-info-icon"><Mail /></span>
                  <div><strong>Email</strong><span>info@frontrunnerrestoration.com</span></div>
                </div>
              </div>
            </div>
            <div className="contact-intro__map">
              <iframe
                src="https://maps.google.com/maps?q=3561+SW+Pumpkin+St,+Port+Saint+Lucie,+Florida&z=14&output=embed"
                title="Office location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-card">
            <h2 className="contact-form-card__heading">Let's Get In Touch</h2>
            <p className="contact-form-card__sub">Your email address will not be published. Required fields are marked *</p>
            <form className="contact-form-new" onSubmit={submit}>
              <label className="form-honeypot" aria-hidden="true">Website<input name="website" value={form.website} onChange={change} tabIndex="-1" autoComplete="off" /></label>
              <div className="form-row">
                <label className="cfn-label">First Name *<input required name="firstName" value={form.firstName} onChange={change} placeholder="First Name *" autoComplete="given-name" /></label>
                <label className="cfn-label">Last Name *<input required name="lastName" value={form.lastName} onChange={change} placeholder="Last Name *" autoComplete="family-name" /></label>
              </div>
              <div className="form-row">
                <label className="cfn-label">Email *<input required type="email" name="email" value={form.email} onChange={change} placeholder="Your Email *" autoComplete="email" /></label>
                <label className="cfn-label">Phone *<input required type="tel" name="phone" value={form.phone} onChange={change} placeholder="Phone *" autoComplete="tel" /></label>
              </div>
              <label className="cfn-label">Service *
                <select required name="service" value={form.service} onChange={change}>
                  <option value="" disabled>Select a Service *</option>
                  <option>Water Damage</option>
                  <option>Fire & Smoke Damage</option>
                  <option>Mold Prevention</option>
                  <option>Storm Damage</option>
                  <option>Emergency Restoration</option>
                  <option>Dry Ice Blasting</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="cfn-label">Message *<textarea required name="message" value={form.message} onChange={change} rows="5" placeholder="Write your message here *" /></label>
              <button className="contact-form-new__submit" type="submit" disabled={status.type === 'loading'}>
                {status.type === 'loading' ? 'Sending…' : 'Send Message'} <ArrowRight size={18} />
              </button>
              {status.message && <div className={`form-status form-status--${status.type}`}>{status.type === 'success' && <CheckCircle2 />} {status.message}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
