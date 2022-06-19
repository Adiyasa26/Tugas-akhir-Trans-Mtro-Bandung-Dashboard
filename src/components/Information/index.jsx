import React, { useState, useEffect } from 'react';

import Passengers from '../Card/General-Card/Card-List/Passengers';
import Mask from '../Card/General-Card/Card-List/Healthcare';
import CalendarContainer from '../Calendar-container';
import MyResponsiveCalendar from '../Calendar-chart';
import { data } from '../Calendar-chart/data';

import './style.scss';

function Information(props) {
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
    <div className="information-container">
      <div className="information-container--header">
        <h1>Dashboard</h1>
        <CalendarContainer state={state} startDate={startDate} />
      </div>
      <div className="information-container--main">
        <div className="information-container--main__left">
          <Passengers date={searchDate} state={state} />
        </div>
        <div className="information-container--main__right">
          <Mask date={searchDate} state={state} />
        </div>
      </div>
      <MyResponsiveCalendar data = {data}/>
    </div>
  );
}
export default Information;
