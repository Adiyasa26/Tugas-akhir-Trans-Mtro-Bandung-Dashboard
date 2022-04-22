import React from 'react'

import Calendar from '../Calendar/Calendar.component'

import './Information.style.css'

import CalendarIcon from '../../icon/Calendar.svg'

function Information() {
    return <div className='information-container'>
        <div className="information-container--header">
            <h1>Dashboard</h1>
            <div className="calendar">
                <div className="calendar--header">
                    <img src={CalendarIcon} alt="icon calendar" />
                    <p>Pilih tanggal, bulan, dan tahun</p>
                </div>
                <Calendar />
            </div>
        </div>
    </div>
}

export default Information