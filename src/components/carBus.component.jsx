import React from 'react';

import './cardBus.style.css';

import TimeProgressThin from '../icon/Time_progress_thin.svg';
import PinLight from '../icon/Pin_light_thin.svg';

function CardBus() {
  return (
    <div className="card">
      <div className="bus--left">
        <h1>1</h1>
      </div>
      <div className="bus--right">
        <div className="title">
          <h1>Armada 1</h1>
          <h2>Jurusan Cibiru - Cicaheum</h2>
        </div>

        <div className="detail">
          <div className="detail--item">
            <div>
              <img src={TimeProgressThin} alt="Time Progress Logo" />
            </div>
            <div className="detail_content">
              <h3>Pemberhentian Terakhir</h3>
              <h3>09.20 : 09.45</h3>
            </div>
          </div>
          <div className="detail--item">
            <div>
              <img src={PinLight} alt="Pin Light Logo" />
            </div>
            <div className="detail_content">
              <h3>Lokasi Pemberhentian Terakhir</h3>
              <h3>Jl. Jendral Sudirman</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBus;
