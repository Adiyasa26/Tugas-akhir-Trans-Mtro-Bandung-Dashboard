import React, {useState} from 'react';

import './CardBus.style.css';

import TimeProgressThin from '../../icon/Time_progress_thin.svg';
import PinLight from '../../icon/Pin_light_thin.svg';

function CardBus(props) {
  const [isSelected, setIsSelected] = useState(false)

  const selectedHandler = () => {
    if (isSelected) {
      const card = document.querySelector('.card');
      card.classList.add('selected');
      return setIsSelected(!isSelected);
    }
    else {
      const card = document.querySelector('.card');
      card.classList.remove('selected');
      return setIsSelected(!isSelected);
    }
  } 
  
  return (
    <div className="card" onClick={selectedHandler}>
      <div className="bus--left">
        <h1>{props.busInfo.armada}</h1>
      </div>
      <div className="bus--right">
        <div className="title">
          <h1>{`Armada ${props.busInfo.armada}`}</h1>
          <h2>{props.busInfo.jurusan}</h2>
        </div>

        <div className="detail">
          <div className="detail--item">
            <div>
              <img src={TimeProgressThin} alt="Time Progress Logo" />
            </div>
            <div className="detail_content">
              <h3>Pemberhentian Terakhir</h3>
              <h3>{props.busInfo.pemberhentian}</h3>
            </div>
          </div>
          <div className="detail--item">
            <div>
              <img src={PinLight} alt="Pin Light Logo" />
            </div>
            <div className="detail_content">
              <h3>Lokasi Pemberhentian Terakhir</h3>
              <h3>{props.busInfo.lokasi}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBus;
