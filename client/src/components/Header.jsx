import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { serviceData } from '../data/serviceData';
import Logo from './Logo';

const links = [
  ['Before & After', '/before-after'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const closeNavigation = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner container">
        <Logo />
        <nav id="mobile-navigation" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          <div className={`nav__services ${servicesOpen ? 'is-open' : ''}`}>
            <button className="nav__services-toggle" type="button" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} aria-controls="services-dropdown">
              Services <ChevronDown size={15} />
            </button>
            <div className="nav__services-menu" id="services-dropdown">
              <a className="nav__services-all" href="/#services" onClick={closeNavigation}>All services</a>
              {serviceData.map(({ slug, navTitle, Icon }) => <a href={`/services/${slug}`} key={slug} onClick={closeNavigation}><Icon size={17} />{navTitle}</a>)}
            </div>
          </div>
          {links.map(([label, href]) => <a key={href} href={href} onClick={closeNavigation}>{label}</a>)}
          <a className="nav__mobile-call" href="tel:+18883796882"><Phone size={17} /> Call 1-888-DRYOUT-2</a>
        </nav>
        <a className="call-button" href="tel:+18883796882"><Phone size={17} /> Call <span>1-888-DRYOUT-2</span></a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-controls="mobile-navigation" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
