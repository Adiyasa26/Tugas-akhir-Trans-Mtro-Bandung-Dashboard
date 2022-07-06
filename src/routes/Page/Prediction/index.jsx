import React, { useState, useEffect } from 'react';

import CalendarContainer from '../../../components/Calendar-container';

import './style.scss';

const Prediction = (props) => {
  const { state, startDate } = props;
  const [searchDate, setSearchDate] = useState(state.startDate);

  useEffect(() => {
    let date_value = state.startDate.toString().split(' ');
    let new_date_value = [
      date_value[0],
      date_value[1],
      date_value[2],
      date_value[3],
      date_value[4],
      date_value[5],
      date_value[6] + ' ' + date_value[7] + ' ' + date_value[8],
    ];
    setSearchDate(new_date_value);
  }, [state.startDate]);

  return (
    <div className="prediction-container">
      <div className="prediction-container--header">
        <h1>Prediksi</h1>
        <CalendarContainer state={state} startDate={startDate} />
      </div>
      <div className="prediction-container--main">
        <div className="prediction-container--main__header">
        </div>
        <div className="prediction-container--main__content">
        </div>
      </div>
    </div>
  );
}
export default Prediction;
