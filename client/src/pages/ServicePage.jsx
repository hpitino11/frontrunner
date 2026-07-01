import { ArrowRight, Check, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';
import { getService, serviceData } from '../data/serviceData';

const processImages = ['/images/restoration-team.png', '/images/about-1.png', '/images/about-2.png', '/images/about-3.png'];

export default function ServicePage({ slug }) {
  const service = getService(slug) || serviceData[0];
  const { Icon } = service;

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={<>{service.heading}</>} copy={service.intro} image={service.image} imageAlt={`${service.title} service response`} />
      <section className="section service-overview">
        <div className="container service-overview__grid">
          <div><div className="eyebrow"><span /> How we help</div><h2>{service.title}</h2><p>{service.lead}</p><a className="button button--gold" href="/contact">Request this service <ArrowRight /></a></div>
          <div className="service-detail-list"><Icon className="service-detail-list__icon" />{service.details.map((detail) => <div key={detail}><Check />{detail}</div>)}</div>
        </div>
      </section>
      <section className="section service-process">
        <div className="container"><div className="section-heading"><div className="eyebrow"><span /> A clear response</div><h2>What the process looks like.</h2></div><div className="service-process__grid">{service.steps.map((step, index) => <article key={step}><img src={processImages[index % processImages.length]} alt="" /><div><span>0{index + 1}</span><h3>{step}</h3></div></article>)}</div></div>
      </section>
      <section className="service-callout"><div className="container"><div><span>Available statewide, 24/7</span><h2>Need {service.navTitle.toLowerCase()} help?</h2></div><a className="button button--gold" href="tel:+18883796882"><Phone /> Call 1-888-DRYOUT-2</a></div></section>
    </>
  );
}
