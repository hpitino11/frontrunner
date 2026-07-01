import { ArrowDownRight, ArrowRight, Phone, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__stripes" aria-hidden="true" />
      <div className="hero__grid container">
        <div className="hero__copy">
          <div className="eyebrow"><span /> Statewide Florida response</div>
          <h1><span>Out Front</span><br />Every Time.</h1>
          <p className="hero__lead">Water, fire, and storm damage restoration, plus mold prevention services, when your property needs help fast.</p>
          <div className="hero__actions">
            <a className="button button--gold" href="/contact">Request emergency help <ArrowRight size={18} /></a>
            <a className="button button--outline" href="tel:+18883796882"><Phone size={18} /> 1-888-DRYOUT-2</a>
          </div>
          <div className="hero__trust">
            <ShieldCheck size={19} />
            <span><b>24/7 emergency response</b> · Licensed &amp; insured · Serving all of Florida</span>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img src="/images/restoration-team.png" alt="Restoration equipment arriving at a Florida home" />
            <div className="hero__image-caption"><span>READY WHEN IT MATTERS</span><ArrowDownRight /></div>
          </div>
          <div className="hero__stat"><b>24/7</b><span>Emergency<br />response</span></div>
        </div>
      </div>
    </section>
  );
}
