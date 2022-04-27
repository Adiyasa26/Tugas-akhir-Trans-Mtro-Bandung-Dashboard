import React from 'react'

import Card from '../Card'

import './style.css'

function CardList(props) {
    console.log(props)
    return (
        <div className="card-list--container">
            <Card tag={`tanggal ${props.date[2]}`} amount="300"/>
            <Card tag={`bulan ${props.date[1]}`} amount="90000"/>
            <Card tag={`tahun ${props.date[3]}`} amount="108000"/>
        </div>
    )
}

export default CardList;