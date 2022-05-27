import React from 'react'

import SignInForm from '../../components/Sign-in-form'
import SignUnForm from '../../components/Sign-up-form'

import './style.scss'

function authentication () {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUnForm />
        </div>
    )
}

export default authentication