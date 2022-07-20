import React from 'react';

import BusLogo from '../../../icon/bus-svgrepo-com.svg'

import './style.scss';

const BusNotSelected = () => {
  return (
    <div className="bus-not-selected--container">
        <h2>Trans Metro bandung</h2>
        <img src={BusLogo} alt="Bus Logo" />
        <h3>Silahkan memilih Bus terlebih dahulu!</h3>
    </div>
  )
}

export default BusNotSelected