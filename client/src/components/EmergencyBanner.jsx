import { ArrowRight, Clock3, Phone } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <section className="emergency-banner" aria-label="24/7 restoration help">
      <div className="container emergency-banner__inner">
        <div className="emergency-banner__mark"><Clock3 /><strong>24/7 Help</strong></div>
        <div className="emergency-banner__copy"><span>Emergency response across Florida</span></div>
        <a href="tel:+18883796882"><Phone /> Call 1-888-DRYOUT-2 <ArrowRight /></a>
      </div>
    </section>
  );
}
