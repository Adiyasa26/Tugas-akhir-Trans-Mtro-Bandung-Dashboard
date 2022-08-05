import React from 'react';
import { useEffect } from 'react';

import FilterPrediction from '../../../../components/Card/General-Card/Card-List/FilterPrediction';
import ResultPrediction from '../../../../components/Card/General-Card/Card-List/ResultPrediction';

import './style.scss';

export const destination = {
  'Cicaheum-Cibereum': {
    'Terminal Cicaheum': [
      'Halte Padasuka',
      'Halte AH Yani',
      'Halte Bank Mahyapada',
      'Halte BTM',
      'Halte Jl Jakarta',
      'Halte KONI',
      'Halte Plaza IBCC',
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Padasuka': [
      'Halte AH Yani',
      'Halte Bank Mahyapada',
      'Halte BTM',
      'Halte Jl Jakarta',
      'Halte KONI',
      'Halte Plaza IBCC',
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte AH Yani': [
      'Halte Bank Mahyapada',
      'Halte BTM',
      'Halte Jl Jakarta',
      'Halte KONI',
      'Halte Plaza IBCC',
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Bank Mahyapada': [
      'Halte BTM',
      'Halte Jl Jakarta',
      'Halte KONI',
      'Halte Plaza IBCC',
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte BTM': [
      'Halte Jl Jakarta',
      'Halte KONI',
      'Halte Plaza IBCC',
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Jl Jakarta': [
      'Halte KONI',
      'Halte Plaza IBCC',
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte KONI': [
      'Halte Plaza IBCC',
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Plaza IBCC': [
      'Halte Jaya Plaza',
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Jaya Plaza': [
      'Halte Jl Ketapang',
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Jl Ketapang': [
      'Halte HSBC',
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte HSBC': [
      'Halte Alun-alun',
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Halte Alun-Alun': [
      'Halte KEB Hana',
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte KEB Hana': [
      'Halte Mahyapada Tower',
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Mahaypada Tower': [
      'Halte Jendral Sudirman',
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],

    'Halte Jendral Sudirman': [
      'Halte Bunderan Sudirman',
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],
    'Halte Bunderan Sudirman': [
      'Halte Jendral Sudirman 3',
      'Terminal Cibereum',
    ],
    'Halte Jendral Sudirman 3': ['Terminal Cibereum'],
  },
  'Cibereum-Cicaheum': {
    'Terminal Cibereum': [
      'Halte FIF Grub',
      'Halte Toko Akbar',
      'Halte Stasiun',
      'Halte Stasiun Timur',
      'Halte Perintis',
      'Halte Bank CIMB',
      'Halte Veteran',
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],

    'Halte FIF Grub': [
      'Halte Toko Akbar',
      'Halte Stasiun',
      'Halte Stasiun Timur',
      'Halte Perintis',
      'Halte Bank CIMB',
      'Halte Veteran',
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],

    'Halte Toko Akbar Jaya': [
      'Halte Stasiun',
      'Halte Stasiun Timur',
      'Halte Perintis',
      'Halte Bank CIMB',
      'Halte Veteran',
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],

    'Halte Stasiun': [
      'Halte Stasiun Timur',
      'Halte Perintis',
      'Halte Bank CIMB',
      'Halte Veteran',
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],

    'Halte Stasiun Timur': [
      'Halte Perintis',
      'Halte Bank CIMB',
      'Halte Veteran',
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],

    'Halte Perintis': [
      'Halte Bank CIMB',
      'Halte Veteran',
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],
    'Halte Bank CIMB': [
      'Halte Veteran',
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],
    'Halte Veteran': [
      'Halte Toto Bycycle',
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],
    'Halte Toto Bicycle': [
      'Halte Persib',
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],
    'Halte Persib': [
      'Halte BRI AH Yani',
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],
    'Halte BRI AH Yani': [
      'Halte Bank AH Yani',
      'Halte Padasuka2',
      'Terminal Cicaheum',
    ],
    'Halte Bank AH Yani': ['Halte Padasuka2', 'Terminal Cicaheum'],
    'Halte Padasuka 2': ['Terminal Cicaheum'],
  },
};

const PredictionContainer = () => {
  useEffect(() => {
    const pathSelection = document.getElementById('path');
    const halteStartSelection = document.getElementById('halteStart');
    const halteEndSel = document.getElementById('halteEnd');
    for (let x in destination) {
      pathSelection.options[pathSelection.options.length] = new Option(x, x);
    }
    pathSelection.onchange = function () {
      halteEndSel.length = 1;
      halteStartSelection.length = 1;
      for (let y in destination[this.value]) {
        halteStartSelection.options[halteStartSelection.options.length] =
          new Option(y, y);
      }
    };

    halteStartSelection.onchange = function () {
      halteEndSel.length = 1;
      let z = destination[pathSelection.value][this.value];
      for (let i = 0; i < z.length; i++) {
        halteEndSel.options[halteEndSel.options.length] = new Option(
          z[i],
          z[i]
        );
      }
    };
  }, []);

  return (
    <div className="prediction-container">
      <div className="prediction-container--header">
        <h1>Prediksi</h1>
      </div>
      <div className="prediction-container--main">
        <div className="prediction-container--main__header">
          <FilterPrediction />
          <ResultPrediction />
        </div>
        <div className="prediction-container--main__content"></div>
      </div>
    </div>
  );
};
export default PredictionContainer;
