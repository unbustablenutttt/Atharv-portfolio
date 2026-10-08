import { useEffect, useCallback } from 'react';
import '../styles/WorkViewer.css';

/**
 * WorkViewer — fullscreen lightbox viewer for photos/reels/films.
 * Supports: keyboard nav (←→ Esc), accessible focus management.
 */
export default function WorkViewer({ works, currentIndex, onClose, onNavigate }) {
  const isOpen = currentIndex !== null && currentIndex >= 0;
  const work = isOpen ? works[currentIndex] : null;
  const total = works.length;

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goPrev, goNext]);

  const getPlatformLabel = (platform) => ({
    instagram: 'View on Instagram',
    pinterest: 'View on Pinterest',
    youtube:   'Watch on YouTube',
    direct:    'Watch Film',
  }[platform] || 'View on External');

  return (
    <div
      className={`viewer ${isOpen ? 'viewer--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={work ? `Viewing: ${work.title}` : 'Media viewer'}
      aria-hidden={!isOpen}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {work && (
        <div className="viewer__inner">
          {/* Top bar */}
          <div className="viewer__topbar">
            <button
              className="viewer__close"
              onClick={onClose}
              aria-label="Close viewer"
              id="viewer-close-btn"
              autoFocus
            >
              ✕ &nbsp;Close
            </button>
            <span className="viewer__counter" aria-live="polite" aria-atomic="true">
              {currentIndex + 1} / {total}
            </span>
          </div>

          {/* Main image / media */}
          <div className="viewer__image-area">
            {(work.type === 'photo' || work.type === 'campaign') && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', width: '100%' }}>
                <img
                  key={work.id}
                  src={work.image || work.thumbnail}
                  alt={work.title}
                  className="viewer__image"
                  loading="lazy"
                />
                {work.url && (
                  <a
                    href={work.url}
                    className="viewer__reel-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${getPlatformLabel(work.platform)} — ${work.title}`}
                  >
                    ↗ &nbsp; {getPlatformLabel(work.platform)}
                  </a>
                )}
              </div>
            )}

            {(work.type === 'reel' || work.type === 'film') && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', width: '100%' }}>
                <img
                  key={work.id}
                  src={work.thumbnail}
                  alt={`${work.title} thumbnail`}
                  className="viewer__image"
                  loading="lazy"
                  style={{ maxHeight: '65vh', objectFit: 'contain' }}
                />
                {(work.url || work.video) && (
                  <a
                    href={work.url || work.video}
                    className="viewer__reel-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${getPlatformLabel(work.platform)} — ${work.title}`}
                  >
                    ▶ &nbsp; {getPlatformLabel(work.platform)}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          {currentIndex > 0 && (
            <button
              className="viewer__nav viewer__nav--prev"
              onClick={goPrev}
              aria-label="Previous work"
              id="viewer-prev-btn"
            >
              ←
            </button>
          )}
          {currentIndex < total - 1 && (
            <button
              className="viewer__nav viewer__nav--next"
              onClick={goNext}
              aria-label="Next work"
              id="viewer-next-btn"
            >
              →
            </button>
          )}

          {/* Info panel */}
          <div className="viewer__info">
            <div>
              <h2 className="viewer__info-title">{work.title}</h2>
              {work.description && (
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(238,229,213,0.45)', marginTop: '0.5rem', maxWidth: '60ch' }}>
                  {work.description}
                </p>
              )}
            </div>
            <div className="viewer__info-meta">
              <span className="viewer__info-year">{work.year}</span>
              {work.location && <span className="viewer__info-location">{work.location}</span>}
              <span className="viewer__info-type">{work.type}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
