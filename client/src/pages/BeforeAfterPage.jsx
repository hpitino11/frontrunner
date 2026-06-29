import { ArrowRight, Droplets, ShieldCheck, Snowflake } from 'lucide-react';
import { ComparisonSlider } from '../components/BeforeAfter';
import PageHero from '../components/PageHero';

const projects = [
  { number: '01', Icon: Droplets, service: 'Water mitigation', title: 'Living room water recovery', copy: 'A water-affected living area taken from active damage through extraction, drying, cleanup, and a finished space ready to use again.', before: '/images/living-before.png', after: '/images/living-after.png', beforeAlt: 'Living room before water mitigation', afterAlt: 'Living room after water mitigation' },
  { number: '02', Icon: ShieldCheck, service: 'Mold remediation', title: 'Bathroom mold remediation', copy: 'Careful containment and removal address affected bathroom materials while moisture control helps protect the restored space.', before: '/images/bathroom-before.png', after: '/images/bathroom-after.png', beforeAlt: 'Bathroom before mold remediation', afterAlt: 'Bathroom after mold remediation' },
  { number: '03', Icon: Snowflake, service: 'Dry ice blasting', title: 'Garage dry ice cleaning', copy: 'Specialized dry ice blasting removes stubborn surface contamination with minimal secondary waste and no added water.', before: '/images/garage-before.png', after: '/images/garage-after.png', beforeAlt: 'Garage before dry ice blasting', afterAlt: 'Garage after dry ice blasting' },
];

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero eyebrow="Before & after" title={<>Proof you can <span>see clearly.</span></>} copy="Real visual examples of the recovery process across water mitigation, mold remediation, and dry ice blasting projects." image="/images/living-after.png" imageAlt="Restored living room after water mitigation" />
      <section className="section transformations">
        <div className="container">
          <div className="section-heading"><div className="eyebrow"><span /> Project transformations</div><h2>Damage addressed.<br />Spaces restored.</h2><p>Drag each divider to compare the condition before work began with the completed result.</p></div>
          <div className="transformation-list">{projects.map(({ number, Icon, service, title, copy, before, after, beforeAlt, afterAlt }) => <article className="transformation-case" key={service}><div className="transformation-case__heading"><div><span>{number}</span><div className="eyebrow"><Icon /> {service}</div><h2>{title}</h2></div><p>{copy}</p></div><ComparisonSlider beforeSrc={before} afterSrc={after} beforeAlt={beforeAlt} afterAlt={afterAlt} /></article>)}</div>
        </div>
      </section>
      <section className="page-cta"><div className="container"><div><span>Need the same kind of help?</span><h2>Let’s restore<br />your property.</h2></div><a className="button button--gold" href="/contact">Request help <ArrowRight /></a></div></section>
    </>
  );
}
