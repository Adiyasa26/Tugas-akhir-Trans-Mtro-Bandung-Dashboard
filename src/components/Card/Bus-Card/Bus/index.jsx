import React from 'react';

import './style.css';

import TimeProgressThin from '../../../../icon/Time_progress_thin.svg';
import PinLight from '../../../../icon/Pin_light_thin.svg';

function CardBus(props) {
  let { bus, isSelected, onClick} = props;

  return (
    <div key={bus.key} className={`card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="bus--left">
        <h1>{bus.busNumber}</h1>
      </div>
      <div className="bus--right">
        <div className="title">
          <h1>{`Armada ${bus.busNumber}`}</h1>
          <h2>{bus.destination}</h2>
        </div>

        <div className="detail">
          <div className="detail--item">
            <div>
              <img src={TimeProgressThin} alt="Time Progress Logo" />
            </div>
            <div className="detail_content">
              <h3>Pemberhentian Terakhir</h3>
              <h3>{bus.stopTime}</h3>
            </div>
          </div>
          <div className="detail--item">
            <div>
              <img src={PinLight} alt="Pin Light Logo" />
            </div>
            <div className="detail_content">
              <h3>Lokasi Pemberhentian Terakhir</h3>
              <h3>{bus.stopLocation}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBus;
