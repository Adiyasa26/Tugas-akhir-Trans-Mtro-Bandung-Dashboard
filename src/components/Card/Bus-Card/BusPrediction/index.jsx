import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import TmbLogo from '../../../../icon/Logo_TMB_Trans_Metro_Bandung.jpg'
import Bus from '../../../../icon/tour-bus.svg'

const BusPredicitonCard = () => {
  const busPredictionParams = useSelector(
    state => state.busesData.busPredictionParams
  );
  const busPredictionResult = useSelector(
    state => state.busesData.busPredictionResult
  );

  return (
    <div className="bus-predicition-card--container">
      <div className="bus-predicition-card--container-left">
        <img className="logo" src={TmbLogo} alt="Gambar Bus" />
        <img src={Bus} alt="Gambar Bus" />
      </div>
      <div className="bus-predicition-card--container-right">
        <h2>Prediksi waktu perjalanan anda pada,</h2>
        <h5>
          hari
          <span className="color">{` ${busPredictionParams.day}`}</span> pukul
          <span className="color">{` ${busPredictionParams.deptime}, `}</span>
        </h5>
        <h5>
          jurusan
          <span className="color">{` ${busPredictionParams.path}, `}</span>
        </h5>
        <h5>
          keberangkatan dari
          <span className="color">{` ${busPredictionParams.halteStart} `}</span>
          menuju
          <span className="color">{` ${busPredictionParams.halteEnd}, `}</span>
        </h5>
        <h5>menempuh waktu</h5>
        <h1>{`${busPredictionResult[0]} menit`}</h1>
      </div>
    </div>
  );
};

export default BusPredicitonCard;
