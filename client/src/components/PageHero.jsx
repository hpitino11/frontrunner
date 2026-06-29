import { ArrowDownRight } from 'lucide-react';

export default function PageHero({ eyebrow, title, copy, image, imageAlt }) {
  return (
    <section className="page-hero">
      <div className="page-hero__lines" aria-hidden="true" />
      <div className="container page-hero__grid">
        <div>
          <div className="eyebrow"><span /> {eyebrow}</div>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="page-hero__visual">
          <img src={image} alt={imageAlt} />
          <span>FRONT RUNNER RESTORATION <ArrowDownRight /></span>
        </div>
      </div>
    </section>
  );
}
