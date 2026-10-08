import '../styles/Sections.css';

export default function About({ siteData }) {
  const arc = siteData?.arc || [
    { step: '01', verb: 'CAPTURE', discipline: 'Photography', detail: 'Medium format stills, light, shadow, texture' },
    { step: '02', verb: 'CREATE', discipline: 'Videography', detail: 'Cinematic movement, pacing, atmospheric flow' },
    { step: '03', verb: 'EDIT', discipline: 'Post-Production', detail: 'Rhythm, color timing, sound design, hook architecture' },
    { step: '04', verb: 'BUILD', discipline: 'Paper Media', detail: 'Brand systems, viral distribution, digital identities' },
    { step: '05', verb: 'UNDERSTAND', discipline: 'AI / ML Research', detail: 'Vision models, pixel theory, computational optics' },
  ];

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        {/* Image column */}
        <div className="about__image-col">
          <div className="about__image-wrap">
            <img
              src="/images/post-dkktw.jpg"
              alt="Visual study by Atharv Kamble"
              className="about__image"
              loading="lazy"
            />
          </div>
          <span className="about__image-label" aria-hidden="true">Visual Archive — Atharv Kamble</span>
        </div>

        {/* Content column */}
        <div className="about__content-col">
          <span className="about__label" aria-hidden="true">The Creative Continuum</span>

          <h2 className="about__name" id="about-title">
            Atharv<br />Kamble
          </h2>

          <div className="about__roles" aria-label="Connected Disciplines">
            <span className="about__role-item">Photographer.</span>
            <span className="about__role-item">Videographer.</span>
            <span className="about__role-item">Video Editor.</span>
            <span className="about__role-item">Co-Founder — Paper Media.</span>
            <span className="about__role-item">AI / ML Student.</span>
          </div>

          <div className="about__divider" aria-hidden="true" />

          <p className="about__bio">
            {siteData?.bio || 'Working between observation, movement, brand growth and computation. Based in India — making photographs, films and edits that hold still what passes fast.'}
          </p>

          <p className="about__bio" style={{ opacity: 0.75, fontSize: '0.9rem', marginTop: '-0.3rem' }}>
            Instead of separate disciplines, his work forms a connected loop: from freezing raw light in camera, to shaping emotion on the timeline, scaling reach through Paper Media, and decoding visual systems in artificial intelligence.
          </p>
        </div>
      </div>

      {/* Narrative Arc Continuum Bar */}
      <div className="about__continuum">
        <div className="about__continuum-header">
          <span className="about__continuum-kicker">The Creative Process</span>
          <span className="about__continuum-title">A Connected Practice</span>
        </div>
        <div className="about__continuum-grid">
          {arc.map((item, idx) => (
            <div className="about__continuum-card" key={idx}>
              <div className="about__continuum-step">{item.step}</div>
              <div className="about__continuum-verb">{item.verb}</div>
              <div className="about__continuum-discipline">{item.discipline}</div>
              <div className="about__continuum-detail">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
