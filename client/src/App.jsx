import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import EmergencyBanner from './components/EmergencyBanner';
import Footer from './components/Footer';
import FaqChat from './components/FaqChat';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import BeforeAfterPage from './pages/BeforeAfterPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  useEffect(() => {
    document.title = path.startsWith('/services/')
      ? 'Restoration Services | Front Runner Restoration'
      : path === '/before-after'
        ? 'Before & After | Front Runner Restoration'
      : path === '/about'
      ? 'About | Front Runner Restoration'
      : path === '/contact'
        ? 'Contact | Front Runner Restoration'
      : path === '/privacy-policy'
        ? 'Privacy Policy | Front Runner Restoration'
        : 'Front Runner Restoration | Florida';
  }, [path]);
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.section, .trust-bar, .about-response, .page-cta, .service-card, .process__steps article');
    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }
    targets.forEach((target) => target.classList.add('reveal-on-scroll'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -35px' });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [path]);

  const page = path.startsWith('/services/') ? <ServicePage slug={path.split('/').pop()} /> : path === '/before-after' ? <BeforeAfterPage /> : path === '/about' ? <AboutPage /> : path === '/contact' ? <ContactPage /> : path === '/privacy-policy' ? <PrivacyPolicyPage /> : (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfter />
      <ServiceArea />
      <EmergencyBanner />
      <Contact />
    </>
  );

  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
      <FaqChat />
    </>
  );
}
