import React, {useState, useEffect} from 'react'

import Calendar from '../Calendar'
import CardList from '../Card/General-Card/Card-List'

import './style.css'

import CalendarIcon from '../../icon/Calendar.svg'

function Information(props) {
    const {state, startDate} = props
    const [searchDate, setSearchDate] = useState(state.startDate)

    useEffect(() => {
        let date_value = state.startDate.toString().split(' ')
        let new_date_value = [ date_value[0], date_value[1], date_value[2], date_value[3], date_value[4], date_value[5], date_value[6] + ' ' + date_value[7]+ ' ' + date_value[8] ]
        setSearchDate(new_date_value)
    }, [state.startDate])

    return <div className='information-container'>
        <div className="information-container--header">
            <h1>Dashboard</h1>
            <div className="calendar">
                <div className="calendar--header">
                    <img src={CalendarIcon} alt="icon calendar" />
                    <p>Pilih bulan, tanggal, dan tahun</p>
                </div>
                <Calendar state={state} startDate={startDate} />
            </div>
        </div>
        <div className="information-container--main">
            <div className="information-container--main__left">
                <CardList date={searchDate} state={state}/>
            </div>
            <div className="information-container--main__right">
                <div>1</div>
            </div>
        </div>
    </div>
}
export default Information