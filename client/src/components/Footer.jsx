import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div><Logo compact /><p>Out Front Every Time.</p></div>
        <div><h3>Services</h3><a href="/services/water-damage">Water damage</a><a href="/services/fire-smoke">Fire &amp; smoke</a><a href="/services/mold-prevention">Mold prevention</a><a href="/services/storm-damage">Storm damage</a><a href="/services/dry-ice-blasting">Dry ice blasting</a></div>
        <div><h3>Company</h3><a href="tel:+18883796882">1-888-DRYOUT-2</a><a href="/about">About Front Runner</a><a href="/before-after">Before &amp; after</a><a href="/contact">Request help</a><span>24/7 emergency response</span></div>
      </div>
      <div className="container footer__bottom"><span>© {new Date().getFullYear()} Front Runner Restoration &middot; <a href="/privacy-policy">Privacy Policy</a></span><span>Serving all of Florida</span></div>
    </footer>
  );
}
