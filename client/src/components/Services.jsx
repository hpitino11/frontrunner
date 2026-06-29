import { ArrowRight } from 'lucide-react';
import { serviceData } from '../data/serviceData';

export default function Services() {
  return (
    <section className="section about-core-services" id="services">
      <div className="container">
        <div className="eyebrow"><span />What We Do</div>
        <h2>Our Core Services</h2>
        <div className="core-services-list">
          {serviceData.map(({ slug, title, short }, index) => (
            <div key={slug} className="core-service-item">
              <span className="core-service-item__num">0{index + 1}</span>
              <div className="core-service-item__body">
                <a href={`/services/${slug}`} className="core-service-item__title">{title} <ArrowRight size={16} /></a>
                <p>{short}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
