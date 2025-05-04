import React from 'react';
import { Play, BookText,University,GraduationCap } from 'lucide-react';

function Achievement() {
  return (
    <>
      <div className="achievement">
        <div className="achievement-banner">
          <div className="achievement-content">
            <h1>
              Taking Education to Next <br />
              Level with Technology
            </h1>
            <button className="watch-btn">
              <Play  className="play-icon" /> Watch Video
            </button>
          </div>
        </div>

        <div className="stats-box">
          <div className="stat-item">
            <BookText  className="stat-icon" />
            <div className="stat-number">2000</div>
            <div className="stat-label">DOCUMENTATION</div>
          </div>
          <div className="divider" />
          <div className="stat-item">
            <University  className="stat-icon" />
            <div className="stat-number">356</div>
            <div className="stat-label">COLLEGES</div>
          </div>
          <div className="divider" />
          <div className="stat-item">
            <GraduationCap  className="stat-icon" />
            <div className="stat-number">1100</div>
            <div className="stat-label">ADMISSIONS</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievement;
