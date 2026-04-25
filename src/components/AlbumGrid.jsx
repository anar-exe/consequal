import React from 'react';
import { albums } from '../data/content';
import './AlbumGrid.css';

const AlbumGrid = () => {
  return (
    <section id="albums" className="albums-section container">
      <h2 className="section-title">Discography</h2>
      <div className="album-grid">
        {albums.map((album) => (
          <div key={album.id} className="album-card glass-panel">
            <div className="album-cover">
              {album.coverUrl ? (
                <img src={album.coverUrl} alt={album.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div className="cover-placeholder" style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--bg-color))` }}>
                  <span className="play-overlay">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    </svg>
                  </span>
                </div>
              )}
            </div>
            <div className="album-info">
              <h3>{album.title}</h3>
              <p className="album-meta">{album.year} • {album.tracks} Tracks</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumGrid;
