import React from 'react';

import LogoChart from '../../icon/Chart.svg';

import './IsianTotalPenumpang.style.css';

function IsianTotalPenumpang(props) {
  return (
    <div className="total-penumpang">
      <h1>{props.tag}</h1>
      <div className="flex-row-total-penumpang">
        <img src={LogoChart} alt="Logo Chart" />
        <div className="flex-column-total-penumpang">
          <h2>{props.jumlah}</h2>
          <h4>Penumpang</h4>
        </div>
      </div>
    </div>
  );
}

export default IsianTotalPenumpang;
