import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

const Calendar = (props) => {
    const {state, startDate} = props
    
    return (
      <DatePicker selected={state.startDate} onChange={(date) => startDate(date)} />
    )
};

  export default Calendar;