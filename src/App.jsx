import { useState } from 'react';
import './styles/global.css';

import Header from './components/Header';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import WorkViewer from './components/WorkViewer';
import PaperMedia from './components/PaperMedia';
import About from './components/About';
import AiMl from './components/AiMl';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Data — add/remove works in src/data/works.json; site info in src/data/site.json
import worksData from './data/works.json';
import siteData from './data/site.json';

const { works } = worksData;

export default function App() {
  const [viewerIndex, setViewerIndex] = useState(null);

  // Featured hero photo — landscape Pinterest photo preferred for cinematic home page hero
  const featuredWork =
    works.find((w) => w.featured && w.platform === 'pinterest' && w.aspectRatio === '16/9') ||
    works.find((w) => w.platform === 'pinterest' && w.aspectRatio === '16/9') ||
    works.find((w) => w.featured && w.type === 'photo') ||
    works[0];

  const handleWorkClick = (work, clickedIndex) => {
    // Find the global index of the clicked work in the full works array
    const globalIndex = works.findIndex((w) => w.id === work.id);
    setViewerIndex(globalIndex >= 0 ? globalIndex : clickedIndex);
  };

  const handleViewerClose = () => setViewerIndex(null);
  const handleViewerNavigate = (newIndex) => setViewerIndex(newIndex);

  return (
    <div className="grain-overlay">
      {/* Skip to content */}
      <a href="#work" className="sr-only" style={{ position: 'fixed', top: 8, left: 8, zIndex: 9999, background: 'var(--burnt)', color: 'var(--ink)', padding: '8px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
        Skip to content
      </a>

      {/* Header */}
      <Header siteData={siteData} />

      {/* Main */}
      <main id="main-content">
        {/* Hero */}
        <Hero siteData={siteData} featuredWork={featuredWork} />

        {/* ── Editorial divider strip ── */}
        <div style={{
          background: 'var(--burgundy)',
          padding: '1.25rem var(--space-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(198,90,46,0.2)',
          borderBottom: '1px solid rgba(198,90,46,0.2)',
        }} aria-hidden="true">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(238,229,213,0.4)' }}>
            Atharv Kamble · Visual Archive · {siteData.year}
          </span>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(238,229,213,0.3)' }}>
            Photography · Film · Editing
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(238,229,213,0.4)' }}>
            India
          </span>
        </div>

        {/* Work Gallery — fully data-driven from works.json */}
        <div id="photo">
          <WorkGallery works={works} onWorkClick={handleWorkClick} />
        </div>

        {/* ── Section separator ── */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(90,23,27,0.4), transparent)' }} aria-hidden="true" />

        {/* Paper Media — Co-Founded Studio & Strategy */}
        <PaperMedia />

        {/* About */}
        <About siteData={siteData} />

        {/* AI / ML */}
        <AiMl />

        {/* Contact */}
        <Contact siteData={siteData} />
      </main>

      {/* Footer */}
      <Footer siteData={siteData} />

      {/* Fullscreen Work Viewer */}
      <WorkViewer
        works={works}
        currentIndex={viewerIndex}
        onClose={handleViewerClose}
        onNavigate={handleViewerNavigate}
      />
    </div>
  );
}
