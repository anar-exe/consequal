import React, { useState, useRef } from 'react';
import { demos } from '../data/content';
import './DemosSection.css';

const DemosSection = () => {
  const [playingId, setPlayingId] = useState(null);
  const audioRefs = useRef({});

  const togglePlay = (id) => {
    if (playingId === id) {
      audioRefs.current[id].pause();
      setPlayingId(null);
    } else {
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      audioRefs.current[id].play();
      setPlayingId(id);
    }
  };

  return (
    <section id="demos" className="demos-section container">
      <h2 className="section-title">Raw Demos</h2>
      <p className="demos-subtitle">A glimpse into the creative process. Unfinished, raw, and pure.</p>
      
      <div className="demos-list">
        {demos.map((demo) => (
          <div key={demo.id} className="demo-track glass-panel">
            <button 
              className={`play-btn ${playingId === demo.id ? 'playing' : ''}`}
              onClick={() => demo.audioUrl && togglePlay(demo.id)}
              disabled={!demo.audioUrl}
            >
              {playingId === demo.id ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5V19L19 12L8 5Z" />
                </svg>
              )}
            </button>
            
            {demo.audioUrl && (
              <audio 
                ref={(el) => (audioRefs.current[demo.id] = el)} 
                src={demo.audioUrl} 
                onEnded={() => setPlayingId(null)}
              />
            )}

            <div className="track-info">
              <h4>{demo.title}</h4>
              <span>{demo.date}</span>
            </div>
            <div className="waveform-mock">
              {/* Pseudo waveform for visual effect */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="wave-bar" style={{ height: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
            <div className="track-duration">{demo.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemosSection;
