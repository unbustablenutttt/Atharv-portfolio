import '../styles/WorkGallery.css';

/**
 * WorkCard — renders a single Instagram work item (photo / reel / film)
 * Respects default Instagram aspect ratios (4:5 portrait, 16:9 widescreen)
 */
export default function WorkCard({ work, index, onClick }) {
  const isMedia = work.type === 'reel' || work.type === 'film';
  const isLandscape = work.aspectRatio === '16/9';
  const isVertical = work.aspectRatio === '9/16';
  const imageSrc = work.image || work.thumbnail;

  const typeLabel = {
    photo: 'Photo',
    reel:  'Reel',
    film:  'Film',
  }[work.type] || 'Work';

  const formatClass = isLandscape
    ? 'work-card--landscape'
    : isVertical
      ? 'work-card--vertical'
      : 'work-card--portrait';

  return (
    <article
      className={`work-card ${formatClass} ${work.featured ? 'work-card--featured' : ''}`}
      onClick={() => onClick(work, index)}
      role="button"
      tabIndex={0}
      aria-label={`${work.title} — ${work.year}${work.location ? ', ' + work.location : ''}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(work, index); }}
      id={`work-card-${work.id}`}
    >
      <div className="work-card__image-wrap">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={work.title}
            className="work-card__image"
            loading="lazy"
            decoding="async"
          />
        )}

        {/* Top Badges */}
        <div className="work-card__badge-row" aria-hidden="true">
          <span className="work-card__type-badge">
            {work.type === 'reel' && '▶ '}
            {work.type === 'film' && '🎬 '}
            {work.type === 'photo' && '📷 '}
            {typeLabel}
          </span>
          {work.platform === 'instagram' && (
            <span className="work-card__ig-pill" title="View on Instagram">
              IG
            </span>
          )}
          {work.platform === 'pinterest' && (
            <span className="work-card__pin-pill" title="View on Pinterest">
              PIN
            </span>
          )}
        </div>

        {/* Play indicator for reels/films */}
        {isMedia && (
          <div className="work-card__play" aria-hidden="true">
            <div className="work-card__play-triangle" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="work-card__hover" aria-hidden="true">
          <h3 className="work-card__hover-title">{work.title}</h3>
          <div className="work-card__hover-meta">
            <span className="work-card__hover-location">
              {work.location || '—'}
            </span>
            <span className="work-card__hover-year">{work.year}</span>
          </div>
          {work.description && (
            <p className="work-card__hover-desc">{work.description}</p>
          )}
          <span className="work-card__hover-action">
            {work.platform === 'pinterest'
              ? 'View on Pinterest ↗'
              : (work.type === 'photo' ? 'View Photo ↗' : 'Watch Video ↗')}
          </span>
        </div>
      </div>

      {/* Caption footer */}
      <div className="work-card__caption">
        <div className="work-card__caption-row">
          <span className="work-card__caption-title">{work.title}</span>
          <span className="work-card__caption-year">{work.year}</span>
        </div>
        {work.location && (
          <span className="work-card__caption-location">{work.location}</span>
        )}
      </div>
    </article>
  );
}
