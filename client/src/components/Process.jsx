const steps = [
  ['01', 'Call or request help', 'Tell us what happened and we’ll help you understand the next step.'],
  ['02', 'Inspect the damage', 'We assess the affected area and identify the source of the problem.'],
  ['03', 'Stabilize & restore', 'Our team begins cleanup, drying, removal, or restoration work.'],
  ['04', 'Final walkthrough', 'We review the completed work and make sure the space is ready to move forward.'],
];

export default function Process() {
  return (
    <section className="section process">
      <div className="container"><div className="section-heading"><div className="eyebrow"><span /> What to expect</div><h2>A clear process when<br />things feel urgent.</h2></div><div className="process__steps">{steps.map(([n, title, copy]) => <article key={n}><span className="process__number">{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    </section>
  );
}
