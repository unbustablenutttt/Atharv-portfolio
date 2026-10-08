import { useState, useMemo } from 'react';
import WorkCard from './WorkCard';
import '../styles/WorkGallery.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'photo', label: 'Photography' },
  { id: 'film', label: 'Film' },
  { id: 'reel', label: 'Reels' },
  { id: 'pinterest', label: 'Pinterest' },
];

/**
 * WorkGallery — editorial masonry grid driven entirely by works.json.
 * Add/remove works in src/data/works.json — no component edits needed.
 */
export default function WorkGallery({ works, onWorkClick }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return works;
    if (activeFilter === 'pinterest') return works.filter((w) => w.platform === 'pinterest');
    return works.filter((w) => w.type === activeFilter);
  }, [works, activeFilter]);

  return (
    <section className="work" id="work" aria-labelledby="work-section-title">
      <div className="work__header">
        <div className="work__title-group">
          <span className="work__label" aria-hidden="true">Selected Work</span>
          <h2 className="work__title" id="work-section-title">Visual Archive</h2>
        </div>

        {/* Filters */}
        <div className="work__filters" role="group" aria-label="Filter work by type">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`work__filter-btn ${activeFilter === f.id ? 'work__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
              aria-pressed={activeFilter === f.id}
              id={`filter-${f.id}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="work__grid" role="list">
        {filtered.length > 0 ? (
          filtered.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              index={index}
              onClick={onWorkClick}
            />
          ))
        ) : (
          <div className="work__empty" role="status">No works in this category yet.</div>
        )}
      </div>
    </section>
  );
}
