import { useRef, useState } from 'react';
import { Droplets, House, MoveHorizontal, Wind } from 'lucide-react';

export function ComparisonSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt, initial = 52 }) {
  const [position, setPosition] = useState(initial);
  const frame = useRef(null);
  const update = (clientX) => {
    const rect = frame.current.getBoundingClientRect();
    setPosition(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div className="compare" ref={frame} style={{ '--compare-position': `${position}%` }} onPointerMove={(event) => { if (event.buttons) update(event.clientX); }} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); update(event.clientX); }}>
      <img className="compare__image" src={afterSrc} alt={afterAlt} draggable="false" />
      <div className="compare__before"><img src={beforeSrc} alt={beforeAlt} draggable="false" /></div>
      <span className="compare__label compare__label--before">Before</span><span className="compare__label compare__label--after">After</span>
      <div className="compare__divider"><button type="button" aria-label="Drag to compare before and after"><MoveHorizontal /></button></div>
      <input className="compare__range" type="range" min="0" max="100" value={position} onInput={(event) => setPosition(Number(event.currentTarget.value))} aria-label="Before and after comparison" />
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="section results" id="results">
      <div className="container">
        <div className="section-heading section-heading--center"><div className="eyebrow"><span /> The work speaks clearly</div><h2>See the difference fast<br />restoration makes.</h2><p>A clean, visual look at the path from active damage to a space that is ready to move forward.</p></div>
        <ComparisonSlider beforeSrc="/images/living-before.png" afterSrc="/images/living-after.png" beforeAlt="Living room before water mitigation" afterAlt="Living room after water mitigation" />
        <div className="proof-grid"><div><Droplets /><span><b>Water removed</b>Rapid extraction and cleanup</span></div><div><Wind /><span><b>Structure dried</b>Measured moisture control</span></div><div><House /><span><b>Property restored</b>Clean, careful completion</span></div></div>
      </div>
    </section>
  );
}
