import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SignOutUser } from '../../utils/firebase/Firebase.utils';

import './style.scss';

import BackLogoActive from '../../icon/Out_1.svg';
import HomeLogoActive from '../../icon/Home.svg';
import TimeProgressActive from '../../icon/Time_progress.svg';
import BackLogo from '../../icon/Out.svg';
import HomeLogo from '../../icon/Home_gray.svg';
import TimeProgress from '../../icon/Time_progress_grey.svg';
import UserLogo from '../../icon/User_box_fill.svg';
import SignOutLogo from '../../icon/Sign_out_squre_light.svg';

const MenuBar = () => {
  const [backActive, setBackActive] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const [predictionActive, setPredictionActive] = useState(false);
  
  const navigate = useNavigate();

  const state = useSelector(state => state);

  const handleLogout = () => {
    try {
      SignOutUser();
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="menubar">
      <div className="logo">
        <img src={UserLogo} alt="User Logo" />
      </div>
      <div className="menu-container">
      <Link
          to="/"
          onClick={() => {
            if (backActive === false) {
              setBackActive(true);
              setHomeActive(false);
              setPredictionActive(false);
            }
          }}
          className={backActive ? 'active' : ''}
        >
          <img
            src={backActive === true ? BackLogoActive : BackLogo}
            alt="Logo Back"
          />
        </Link>
        <Link
          to="/trans-metro-bandung/home"
          onClick={() => {
            if (homeActive === false) {
              setBackActive(false);
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
        <Link
          to="/trans-metro-bandung/prediction"
          onClick={() => {
            if (predictionActive === false) {
              setBackActive(false);
              setHomeActive(false);
              setPredictionActive(true);
            }
          }}
          className={predictionActive ? 'active' : ''}
        >
          <img
            src={
              !predictionActive === false ? TimeProgressActive : TimeProgress
            }
            alt="Logo Prediction"
          />
        </Link>
      </div>
      {state.userData.currentUser ? (
        <div className="log-out" onClick={handleLogout}>
          <img src={SignOutLogo} alt="Logo log-out" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MenuBar;
