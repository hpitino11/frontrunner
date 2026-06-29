import { Check, ShieldCheck } from 'lucide-react';

const features = ['Fast emergency response', 'Clear communication', 'Clean, professional crews', 'Water, fire, mold & storm expertise', 'Statewide Florida coverage', 'Help when it feels overwhelming'];

export default function WhyChoose() {
  return (
    <section className="section why" id="about">
      <div className="container why__grid">
        <div className="why__intro"><div className="eyebrow eyebrow--dark"><span /> Why Front Runner</div><h2>Steady help when your day takes a turn.</h2><p>When damage happens, you need a team that responds quickly, communicates clearly, and treats your property with care.</p><div className="why__promise"><ShieldCheck /><span><b>Dependable from start to finish</b>Fast action. Clean work. No runaround.</span></div></div>
        <div className="why__features">{features.map((feature) => <div key={feature}><span><Check /></span>{feature}</div>)}</div>
      </div>
    </section>
  );
}
