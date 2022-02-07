import React from 'react';

import './menuBar.style.css';

import HomeLogo from '../icon/Home.svg';
import TimeProgress from '../icon/Time_progress.svg';

function MenuBar() {
  return (
    <div className="menubar">
      <a href="#main">
        <img src={HomeLogo} alt="Logo Home" />
      </a>
      <a href="#prediction">
        <img src={TimeProgress} alt="Logo Prediction" />
      </a>
    </div>
  );
}

export default MenuBar;
