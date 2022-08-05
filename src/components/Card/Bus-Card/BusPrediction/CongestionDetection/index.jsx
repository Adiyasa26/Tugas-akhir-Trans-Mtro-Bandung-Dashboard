import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import TmbLogo from '../../../../../icon/Logo_TMB_Trans_Metro_Bandung.jpg';
import Maps from '../../../../../icon/worldwide-map-svgrepo-com.svg';

const CongestionDetection = () => {
  const busPredictionParams = useSelector(
    state => state.busesData.busPredictionParams
  );
  const busPredictionResult = useSelector(
    state => state.busesData.busPredictionResult
  );

  const busPath = [
    'Terminal Cicaheum-Halte Padasuka',
    'Halte Padasuka-Halte AH Yani',
    'Halte AH Yani-Halte Bank Mahyapada',
    'Halte Bank Mahyapada-Halte BTM',
    'Halte BTM-Halte Jl Jakarta',
    'Halte Jl Jakarta-Halte KONI',
    'Halte KONI-Halte Plaza IBCC',
    'Halte Plaza IBCC-Halte Jaya Plaza',
    'Halte Jaya Plaza-Halte Jl Ketapang',
    'Halte Jl Ketapang-Halte HSBC',
    'Halte HSBC-Halte Halte Alun-Alun',
    'Halte Halte Alun-Alun-Halte KEB Hana',
    'Halte KEB Hana-Halte Mahaypada Tower',
    'Halte Mahaypada Tower-Halte Jendral Sudirman',
    'Halte Jendral Sudirman-Halte Bunderan Sudirman',
    'Halte Bunderan Sudirman-Halte Jendral Sudirman 3',
    'Halte Jendral Sudirman 3-Terminal Cibereum',
  ];

  const congestionSelector = params => {
    if (params === 1) {
      return ['Macet', 'color-1'];
    } else if (params === 2) {
      return ['Jalan Ramai Lancar', 'color-2'];
    } else {
      return ['Lancar', 'color-3'];
    }
  };

  console.log(congestionSelector(1)[0]);

  return (
    <div className="congestion-predicition-card--container">
      <div className="congestion-predicition-card--container-left">
        <img className="logo" src={TmbLogo} alt="Gambar Bus" />
        {busPredictionParams.path === 'Cibereum-Cicaheum' ? (
          <></>
        ) : (
          <img src={Maps} alt="Gambar Maps" />
        )}
      </div>
      <div className="congestion-predicition-card--container-right">
        {busPredictionParams.path === 'Cibereum-Cicaheum' ? (
          <h2 className="error-handler">
            Mohon maaf, fitur ini belum tersedia pada jalur yang anda pilih.
          </h2>
        ) : (
          <>
            <h2>Prediksi kemacetan pada titik,</h2>
            <ul>
              {busPath.map((value, index) => {
                return (
                  <li
                    className={`${
                      congestionSelector(busPredictionResult[1][index])[1]
                    }`}
                    key={index}
                  >
                    {`${value} (${
                      congestionSelector(busPredictionResult[1][index])[0]
                    })`}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CongestionDetection;
