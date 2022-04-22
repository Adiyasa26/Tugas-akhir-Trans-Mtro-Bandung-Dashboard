import React from 'react'

import './BusSelected.style.css'

function BusSelected(props) {
    return (
        <div className="selected-bus--container">
            <div className="selected-bus item" onClick={props.onClickSelectedBus}>
                {props.busIsSelected}
            </div>
            <div className={props.className} onClick={props.onClickClearSearch}>
                &times;
            </div>
        </div>
    )
}

export default BusSelected;