import { useState, useEffect, useRef } from 'react';
import '../styles/Hero.css';

export default function Hero({ siteData, featuredWork }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const heroImg = featuredWork?.image || featuredWork?.thumbnail || '/images/hero.jpg';
  const totalWorks = 6; // Indicative counter

  return (
    <section className="hero" aria-label="Hero — Atharv Kamble">
      {/* Background */}
      {heroImg ? (
        <img
          src={heroImg}
          alt="Hero — Atharv Kamble Photography"
          className={`hero__bg ${imgLoaded ? 'hero__bg--loaded' : ''}`}
          onLoad={() => setImgLoaded(true)}
          loading="eager"
        />
      ) : (
        <div className="hero__placeholder-bg" aria-hidden="true" />
      )}

      {/* Texture grid */}
      <div className="hero__texture" aria-hidden="true" />

      {/* Overlays */}
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__overlay-top" aria-hidden="true" />
      <div className="hero__overlay-bottom" aria-hidden="true" />

      {/* Content grid */}
      <div className="hero__content">
        {/* Registration corner marks */}
        <div className="hero__reg-tl" aria-hidden="true" />
        <div className="hero__reg-br" aria-hidden="true" />

        {/* Name — large left */}
        <div className="hero__name">
          <h1>
            <span className="hero__name-first hero__animate hero__animate--delay-1">
              Atharv
            </span>
            <span className="hero__name-last hero__animate hero__animate--delay-2">
              Kamble
            </span>
          </h1>
        </div>

        {/* Tagline + Scroll — bottom left */}
        <div className="hero__tagline-container">
          <p className="hero__tagline hero__animate hero__animate--delay-3">
            {siteData?.tagline || 'Visual stories shaped by light, movement and place.'}
          </p>
          <button
            className="hero__scroll hero__animate hero__animate--delay-4"
            onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll to work"
            id="hero-scroll-btn"
          >
            <span className="hero__scroll-line" aria-hidden="true" />
            Scroll to explore
          </button>
        </div>

        {/* Roles — bottom right */}
        <div className="hero__meta">
          <div className="hero__roles hero__animate hero__animate--delay-2" aria-label="Roles">
            {['Photographer', 'Videographer', 'Editor', 'Co-Founder (Paper Media)', 'AI / ML Student'].map((role, i) => (
              <span className="hero__role" key={role}>
                <span className="hero__role-line" aria-hidden="true" />
                {role}
              </span>
            ))}
          </div>
          <span className="hero__counter hero__animate hero__animate--delay-3" aria-hidden="true">
            01 / 0{totalWorks}
          </span>
        </div>
      </div>

      {/* Vertical label */}
      <span className="hero__vertical-label" aria-hidden="true">
        Photography · Film · India
      </span>
    </section>
  );
}
