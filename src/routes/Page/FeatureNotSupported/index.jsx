import React from 'react'

import NotFoundLogo from '../../../icon/20945990.jpg';

import './style.scss';

const FeatureNotSupported = () => {
  return (
    <div className="feature-not-supported--container">
        <h2>Trans Metro bandung</h2>
        <img src={NotFoundLogo} alt="Bus Logo" />
        <h3>Mohon maaf. Fitur ini belum tersedia pada bus yang dipilih!</h3>
    </div>
  )
}

export default FeatureNotSupported