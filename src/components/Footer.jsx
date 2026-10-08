import '../styles/Sections.css';

export default function Footer({ siteData }) {
  const year = siteData?.year || new Date().getFullYear();

  const disciplines = [
    'Photography',
    'Film',
    'Editing',
    'Paper Media',
    'AI / ML',
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">{siteData?.name || 'Atharv Kamble'}</span>
            <p className="footer__tagline">
              {siteData?.tagline || 'Visual stories shaped by light, movement and place.'}
            </p>
          </div>

          <div className="footer__disciplines" aria-label="Disciplines">
            {disciplines.map((d) => (
              <span className="footer__discipline" key={d}>{d}</span>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">
            © {year} {siteData?.name || 'Atharv Kamble'} — All rights reserved
          </span>

          <nav className="footer__social" aria-label="Social links">
            {siteData?.instagram && (
              <a
                href={siteData.instagram}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            )}
            {siteData?.linkedin && (
              <a
                href={siteData.linkedin}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {siteData?.pinterest && (
              <a
                href={siteData.pinterest}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
