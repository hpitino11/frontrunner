import { Clock3, CloudLightning, Droplets, Flame, Snowflake, Wind } from 'lucide-react';

const items = [[Clock3, '24/7 Response'], [Droplets, 'Water Damage'], [Flame, 'Fire & Smoke'], [Wind, 'Mold Prevention'], [CloudLightning, 'Storm Damage'], [Snowflake, 'Dry Ice Blasting']];

export default function TrustBar() {
  return <section className="trust-bar" aria-label="Emergency services"><div className="container trust-bar__grid">{items.map(([Icon, label]) => <div className="trust-item" key={label}><Icon /><span>{label}</span></div>)}</div></section>;
}
