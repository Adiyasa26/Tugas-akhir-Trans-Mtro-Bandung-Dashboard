import React from 'react'

import './style.scss'

function Card(props) {
    return (
        <div className='universal-card-container'>
            <div className="universal-card-container--header">
                <h3>Penumpang</h3>
                <p>pada {props.tag}</p>
            </div>
            <div className="universal-card-container--main">
                <h1>{props.amount}</h1>
                <p>penumpang</p>
            </div>
        </div>
    )
}

export default Card;