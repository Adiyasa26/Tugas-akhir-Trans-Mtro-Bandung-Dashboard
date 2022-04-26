import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

function Calendar(props) {
    const [startDate, setStartDate] = useState(new Date());
    
    useEffect(() => {
      let date_value = startDate.toString().split(' ')
      let new_date_value = [ date_value[0], date_value[1], date_value[2], date_value[3], date_value[4], date_value[5], date_value[6] + ' ' + date_value[7]+ ' ' + date_value[8] ]
      props.dateSplitter(new_date_value)
    }, [startDate])
    
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    )
};

  export default Calendar;