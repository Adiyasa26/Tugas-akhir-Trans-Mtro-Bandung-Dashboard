import React from 'react';

import './NavigationBar.style.css';

import SignOutLogo from '../../icon/Sign_out_squre_light.svg';
import UserLogo from '../../icon/User_circle.svg';
import LogoUnduh from '../../icon/Download.svg';

function NavigationBar() {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={UserLogo} alt="User Logo" />
      </div>

      <div className='button-container'>
        <div className="unduh-data">
          <img src={LogoUnduh} alt="Logo Unduh" />
          <span>Unduh Data</span>
        </div>
        <div className="logout">
          <img src={SignOutLogo} alt="Logo sign out" />
          <span>Keluar</span>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
