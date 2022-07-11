import React from 'react';

import BusLogo from '../../../icon/bus-svgrepo-com.svg'

import './style.scss';

const BusNotSelected = () => {
  return (
    <div className="bus-not-selected--container">
        <h2>Trans Metro bandung</h2>
        <img src={BusLogo} alt="Bus Logo" />
        <h3>Anda belum memilih Bus  yang akan anda lihat informasinya</h3>
    </div>
  )
}

export default BusNotSelected