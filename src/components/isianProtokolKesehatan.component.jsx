import React from 'react';

import LogoMasker from '../icon/Masker.svg';

import './isianProtokolKesehatan.style.css';

function IsianProtokolKesehatan(props) {
  return (
    <div className="flex-row-prokes">
      <img src={props.img} alt="Logo Masker" />
      <div className="flex-column-prokes">
        <h2>{props.total}</h2>
        <h3>{props.tag}</h3>
      </div>
    </div>
  );
}

export default IsianProtokolKesehatan;
