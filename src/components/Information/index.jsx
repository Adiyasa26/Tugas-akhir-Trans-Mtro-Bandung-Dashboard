import React, {useState} from 'react'

import Calendar from '../Calendar'
import CardList from '../Card/General-Card/Card-List'

import './style.css'

import CalendarIcon from '../../icon/Calendar.svg'

function Information() {
    const [date, setDate] = useState('')
    
    const pull_calendar_value = (data) => {
        setDate(data);
    }

    return <div className='information-container'>
        <div className="information-container--header">
            <h1>Dashboard</h1>
            <div className="calendar">
                <div className="calendar--header">
                    <img src={CalendarIcon} alt="icon calendar" />
                    <p>Pilih bulan, tanggal, dan tahun</p>
                </div>
                <Calendar dateSplitter={pull_calendar_value} />
            </div>
        </div>
        <div className="information-container--main">
            <div className="information-container--main__left">
                <CardList dateValue={date} />
            </div>
            <div className="information-container--main__right">
                <div>1</div>
            </div>
        </div>
    </div>
}

export default Information