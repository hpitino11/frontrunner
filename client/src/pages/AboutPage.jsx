import { ArrowRight, Clock3, FileCheck2, Snowflake } from 'lucide-react';
import { serviceData } from '../data/serviceData';

const whyChoose = [
  {
    Icon: Clock3,
    title: 'Fast Emergency Response',
    copy: 'Our team is available around the clock and responds quickly to every call. The faster we get there, the less damage your property takes.',
  },
  {
    Icon: FileCheck2,
    title: 'Insurance Claim Assistance',
    copy: 'Our certified estimators prepare detailed Xactimate reports that can be submitted directly to your insurance adjuster, helping speed up the claims process.',
  },
  {
    Icon: Snowflake,
    title: 'Advanced Cleaning Technology',
    copy: 'We use dry ice blasting to clean mold residue, contaminants, and smoke damage from structural surfaces. It is non-abrasive and chemical-free, so it cleans thoroughly without harming what is underneath.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="section about-who">
        <div className="container about-who__grid">
          <div className="about-who__visual">
            <img src="/images/about-3.png" alt="Front Runner restoration team at work" />
            <div className="about-who__badge">
              <span className="about-who__badge-num">24/7</span>
              <span className="about-who__badge-label">Emergency<br />Response</span>
            </div>
          </div>
          <div className="about-who__content">
            <div className="eyebrow"><span />Who We Are</div>
            <h1>Water Damage Mitigation &amp; Restoration Experts</h1>
            <p>Front Runner Restoration is a water damage mitigation and restoration company serving residential and commercial properties throughout Florida. Whether it is a burst pipe, appliance failure, or flooding, our team responds fast to stop further damage, dry out your property, and get your life back to normal.</p>
            <p>We specialize in water damage removal and demolition, structural drying, Xactimate estimates for insurance claims, and dry ice blasting for residue and contaminant cleaning. Our trained team uses professional-grade equipment and industry-standard processes to restore your property safely and efficiently.</p>
            <a className="button button--gold about-who__cta" href="/contact">Get Help Now <ArrowRight /></a>
            <p className="about-who__phone">We are available 24/7. Call us at <a href="tel:+15612607494">(561) 260-7494</a></p>
          </div>
        </div>
      </section>

      <section className="section about-why-choose">
        <div className="container">
          <div className="section-heading section-heading--center">
            <div className="eyebrow"><span />Why Choose Us</div>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="why-choose-grid">
            {whyChoose.map(({ Icon, title, copy }) => (
              <div key={title} className="why-choose-card">
                <div className="why-choose-card__icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-core-services">
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

      <section className="page-cta">
        <div className="container">
          <div><span>Property damage in Florida?</span><h2>Give us a call.<br />We pick up.</h2></div>
          <a className="button button--gold" href="/contact">Contact us now <ArrowRight /></a>
        </div>
      </section>
    </>
  );
}
