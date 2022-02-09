import React from 'react';

import LogoChart from '../icon/Chart.svg';

import './IsianTotalPenumpang.style.css';

function IsianTotalPenumpang() {
  return (
    <div className="total-penumpang">
      <h1>Per-tahun</h1>
      <div className="flex-row-total-penumpang">
        <img src={LogoChart} alt="Logo Chart" />
        <div className="flex-column-total-penumpang">
          <h2>250.000</h2>
          <h4>Penumpang</h4>
        </div>
      </div>
    </div>
  );
}

export default IsianTotalPenumpang;
