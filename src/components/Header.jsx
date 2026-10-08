import { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';

export default function Header({ siteData }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Photo', href: '#photo' },
    { label: 'Film', href: '#film' },
    { label: 'Paper Media', href: '#paper-media' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`} role="banner">
        {/* Logo */}
        <a href="#" className="header__logo" aria-label="Atharv Kamble — Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span className="header__logo-monogram">AK</span>
          <span className="header__logo-name">
            <span>Atharv</span>
            <span>Kamble</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          <ul className="header__nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__nav-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__social" aria-label="Social links">
            {siteData?.instagram && (
              <a href={siteData.instagram} className="header__social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                IG
              </a>
            )}
            {siteData?.linkedin && (
              <a href={siteData.linkedin} className="header__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                LI
              </a>
            )}
            {siteData?.pinterest && (
              <a href={siteData.pinterest} className="header__social-link" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                PIN
              </a>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`header__menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          id="mobile-menu-toggle"
        >
          <span className="header__menu-line" />
          <span className="header__menu-line" />
          <span className="header__menu-line" />
        </button>
      </header>

      {/* Mobile Nav */}
      <nav className={`header__mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="header__nav-link"
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <div className="header__social" style={{ marginTop: '2rem' }}>
          {siteData?.instagram && (
            <a href={siteData.instagram} className="header__social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
          )}
          {siteData?.linkedin && (
            <a href={siteData.linkedin} className="header__social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          {siteData?.pinterest && (
            <a href={siteData.pinterest} className="header__social-link" target="_blank" rel="noopener noreferrer">Pinterest</a>
          )}
        </div>
      </nav>
    </>
  );
}
