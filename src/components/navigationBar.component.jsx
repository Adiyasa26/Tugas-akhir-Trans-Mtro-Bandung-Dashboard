import React from 'react';

import './navigationBar.style.css';

import SignOutLogo from '../icon/Sign_out_squre_light.svg';
import UserLogo from '../icon/User_circle.svg';

function NavigationBar() {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={UserLogo} alt="User Logo" />
      </div>
      <div className="logout">
        <img src={SignOutLogo} alt="Logo sign out" />
        <span>Keluar</span>
      </div>
    </div>
  );
}

export default NavigationBar;
