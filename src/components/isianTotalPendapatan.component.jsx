import React from 'react';

import LogoDompet from '../icon/Wallet_alt_fill.svg';

import './isianTotalPendapatan.style.css';

function IsianTotalPendapatan(props) {
  return (
    <div className="isian-total-pendapatan">
      <h2>{props.tag}</h2>
      <div className="flex-total-pendapatan">
        <img src={LogoDompet} alt="Logo Dompet" />
        <h3>{props.nominal}</h3>
      </div>
    </div>
  );
}

export default IsianTotalPendapatan;
