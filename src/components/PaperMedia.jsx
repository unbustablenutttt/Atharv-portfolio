import paperData from '../data/PaperMedia.json';
import '../styles/PaperMedia.css';

export default function PaperMedia() {
  const { company, projects } = paperData;

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="paper-media" id="paper-media" aria-labelledby="paper-title">
      <div className="paper-media__inner">
        {/* Section Header */}
        <div className="paper-media__header">
          <div className="paper-media__header-left">
            <div className="paper-media__tag-row">
              <span className="paper-media__badge">
                <span className="paper-media__badge-dot" />
                Co-Founder · Paper Media
              </span>
              <span className="paper-media__kicker">Creative Agency & Strategy</span>
            </div>

            <h2 className="paper-media__title" id="paper-title">
              Brands built on <em>vision</em> & reach.
            </h2>

            <p className="paper-media__tagline">
              {company.tagline}
            </p>

            <p className="paper-media__desc">
              {company.description}
            </p>
          </div>

          {/* Stats Column */}
          {company.stats && company.stats.length > 0 && (
            <div className="paper-media__stats" aria-label="Paper Media performance metrics">
              {company.stats.map((stat, idx) => (
                <div className="paper-media__stat-item" key={idx}>
                  <span className="paper-media__stat-val">{stat.value}</span>
                  <span className="paper-media__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 4 Pillars Grid */}
        <div className="paper-media__pillars" aria-label="Core Agency Capabilities">
          {company.services.map((service, idx) => (
            <div className="paper-media__pillar-card" key={idx}>
              <div>
                <div className="paper-media__pillar-index">0{idx + 1} {'//'} DISCIPLINE</div>
                <h3 className="paper-media__pillar-title">{service.title}</h3>
              </div>
              <p className="paper-media__pillar-desc">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Campaigns Showcase */}
        {projects && projects.length > 0 && (
          <div className="paper-media__campaigns-section">
            <div className="paper-media__works-header">
              <span className="paper-media__works-title">Selected Brand Campaigns & Social Directives</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(238,229,213,0.3)', letterSpacing: '0.15em' }}>
                ARCHIVE // 2025–2026
              </span>
            </div>

            <div className="paper-media__campaigns-grid">
              {projects.map((proj) => (
                <article className="paper-campaign-card" key={proj.id}>
                  <div className="paper-campaign-card__img-wrap">
                    <img
                      src={proj.image}
                      alt={`${proj.title} campaign`}
                      className="paper-campaign-card__img"
                      loading="lazy"
                    />
                    {proj.metrics && (
                      <span className="paper-campaign-card__metric-badge">
                        {proj.metrics}
                      </span>
                    )}
                  </div>
                  <div className="paper-campaign-card__content">
                    <div className="paper-campaign-card__meta">
                      <span>{proj.type}</span>
                      <span>{proj.year}</span>
                    </div>
                    <h4 className="paper-campaign-card__title">{proj.title}</h4>
                    {proj.client && (
                      <span className="paper-campaign-card__client">{proj.client}</span>
                    )}
                    <p className="paper-campaign-card__desc">{proj.description}</p>
                    {proj.tags && (
                      <div className="paper-campaign-card__tags">
                        {proj.tags.map((tag) => (
                          <span className="paper-campaign-card__tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* CTA Bar */}
        <div className="paper-media__cta-strip">
          <div className="paper-media__cta-text">
            Looking to engineer your brand&apos;s digital voice or video pipeline? <em>Let&apos;s build.</em>
          </div>
          <div className="paper-media__cta-actions">
            <a href="#contact" className="paper-media__cta-btn" onClick={handleContactClick}>
              Initiate Collaboration
            </a>
            {company.instagram && (
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="paper-media__cta-link">
                Instagram ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
