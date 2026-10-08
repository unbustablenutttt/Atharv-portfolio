import '../styles/Sections.css';

export default function Contact({ siteData }) {
  const links = [
    {
      label: 'Email',
      value: siteData?.email || 'atharv@example.com',
      href: `mailto:${siteData?.email || 'atharv@example.com'}`,
      external: false,
    },
    {
      label: 'Instagram',
      value: '@haa_kyyy',
      href: siteData?.instagram || '#',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'Atharv Kamble',
      href: siteData?.linkedin || '#',
      external: true,
    },
    ...(siteData?.pinterest ? [{
      label: 'Pinterest',
      value: 'Inessisop',
      href: siteData.pinterest,
      external: true,
    }] : []),
  ];

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        {/* Heading */}
        <div className="contact__heading-col">
          <span className="contact__label" aria-hidden="true">Get in Touch</span>
          <h2 className="contact__heading" id="contact-title">
            Let's work<br />together.
          </h2>
          <p className="contact__sub">
            Available for commissions, collaborations and conversations
            about photography, film and the image.
          </p>
        </div>

        {/* Links */}
        <div className="contact__links-col" role="list">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact__link"
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              role="listitem"
              aria-label={`${link.label}: ${link.value}`}
            >
              <div>
                <div className="contact__link-label">{link.label}</div>
                <div className="contact__link-value">{link.value}</div>
              </div>
              <span className="contact__link-arrow" aria-hidden="true">→</span>
            </a>
          ))}

          <p className="contact__location" aria-label="Location">
            ◎ &nbsp; {siteData?.location || 'India'}
          </p>
        </div>
      </div>
    </section>
  );
}
