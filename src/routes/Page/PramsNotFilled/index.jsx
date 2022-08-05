import React from 'react'

import PointingUpside from '../../../icon/keatas.png';

import './style.scss';

const ParamsNotFilled = () => {
  return (
    <div className="params-not-filled--container">
        <img src={PointingUpside} alt="Bus Logo" />
        <a href="https://id.pikbest.com//png-images/tim-orang-menunjuk-jari-ke-atas_6146257.html">Bebas elemen grafis dari id.pikbest.com</a>
        <h3>Mohon mengisi hari, jam, jalur, halte keberangkatan, serta halte tujuan anda. <br/> Setelah itu tekan tombol "Prediksi". Terimakasih.</h3>
    </div>
  )
}

export default ParamsNotFilled;