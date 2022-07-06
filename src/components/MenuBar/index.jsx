import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { SignOutUser } from '../../utils/firebase/Firebase.utils';

import './style.css';

import HomeLogoActive from '../../icon/Home.svg';
import TimeProgressActive from '../../icon/Time_progress.svg';
import HomeLogo from '../../icon/Home_gray.svg';
import TimeProgress from '../../icon/Time_progress_grey.svg';
import UserLogo from '../../icon/User_box_fill.svg';
import SignOutLogo from '../../icon/Sign_out_squre_light.svg';

function MenuBar() {
  const [homeActive, setHomeActive] = useState(true);
  const [predictionActive, setPredictionActive] = useState(false);

  return (
    <div className="menubar">
      <div className="logo">
        <img src={UserLogo} alt="User Logo" />
      </div>
      <div className="menu-container">
        <Link
          to="/"
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
        </Link>
        {/* <Link
          to="prediction"
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
        </Link> */}
      </div>
      <div className="log-out" onClick={SignOutUser}>
        <img src={SignOutLogo} alt="Logo log-out" />
      </div>
    </div>
  );
}

export default MenuBar;
