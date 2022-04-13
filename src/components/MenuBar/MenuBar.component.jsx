import React, { useState } from 'react';

import './MenuBar.style.css';

import HomeLogoActive from '../../icon/Home.svg';
import TimeProgressActive from '../../icon/Time_progress.svg';
import HomeLogo from '../../icon/Home_gray.svg';
import TimeProgress from '../../icon/Time_progress_grey.svg';

function MenuBar() {
  const [homeActive, setHomeActive] = useState(true);
  const [predictionActive, setPredictionActive] = useState(false);

  return (
    <div className="menubar">
      <a
        href="#main"
        onClick={() => {
          if (homeActive === false) {
            setHomeActive(true);
            setPredictionActive(false);
          }
        }}
        className={homeActive ? 'active' : ''}
      >
        <img
          src={homeActive === true ? HomeLogoActive : HomeLogo}
          alt="Logo Home"
        />
      </a>
      <a
        href="#prediction"
        onClick={() => {
          if (predictionActive === false) {
            setHomeActive(false);
            setPredictionActive(true);
          }
        }}
        className={predictionActive ? 'active' : ''}
      >
        <img
          src={!predictionActive === false ? TimeProgressActive : TimeProgress}
          alt="Logo Prediction"
        />
      </a>
    </div>
  );
}

export default MenuBar;
