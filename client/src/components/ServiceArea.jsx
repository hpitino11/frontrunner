import { MapPin, Phone } from 'lucide-react';
import FloridaMap from './FloridaMap';

const places = ['South Florida', 'Central Florida', 'Tampa Bay', 'Gulf Coast', 'North Florida', 'Treasure Coast'];

export default function ServiceArea() {
  return (
    <section className="section area"><div className="container area__grid"><div><div className="eyebrow eyebrow--dark"><span /> Statewide & responsive</div><h2>Restoration response across Florida.</h2><p>Front Runner Restoration serves residential and commercial property owners throughout Florida, coordinating fast help wherever damage happens.</p><a className="text-link" href="tel:+15612607494"><Phone size={18} /> (561) 260-7494</a><div className="area__places">{places.map((place) => <span key={place}><MapPin />{place}</span>)}</div></div><FloridaMap /></div></section>
  );
}
