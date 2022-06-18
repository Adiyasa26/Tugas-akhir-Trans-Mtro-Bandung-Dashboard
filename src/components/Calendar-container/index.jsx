import React from 'react';

import Calendar from '../Calendar';

import CalendarIcon from '../../icon/Calendar.svg';

import './style.scss';

const CalendarContainer = props => {
  const { state, startDate } = props;
  return (
    <div className="calendar">
      <div className="calendar--header">
        <img src={CalendarIcon} alt="icon calendar" />
        <p>Pilih bulan, tanggal, dan tahun</p>
      </div>
      <Calendar state={state} startDate={startDate} />
    </div>
  );
};

export default CalendarContainer;
