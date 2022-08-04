import React from 'react'

import NotFoundLogo from '../../../icon/20945990.jpg';

import './style.scss';

const FeatureNotSupported = () => {
  return (
    <div className="feature-not-supported--container">
        <h2>Trans Metro bandung</h2>
        <img src={NotFoundLogo} alt="Bus Logo" />
        <a href="http://www.freepik.com">Designed by vectorjuice / Freepik</a>
        <h3>Mohon maaf. Fitur ini belum tersedia pada bus yang dipilih! <br/> Silahkan memilih Bus lainnya. Terimakasih.</h3>
    </div>
  )
}

export default FeatureNotSupported