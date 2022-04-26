import React from 'react'

import './style.css'

import SignOutLogo from '../../icon/Sign_out_squre_light.svg';

function Keluar (props) {
    return (
        <div className={props.className}>
            <h1>Hi, Admin</h1>
            <div className='button-container'>
                <img src={SignOutLogo} alt="sign out logo" />
                <h2>Keluar</h2>
            </div>
        </div>
    )
}

export default Keluar;