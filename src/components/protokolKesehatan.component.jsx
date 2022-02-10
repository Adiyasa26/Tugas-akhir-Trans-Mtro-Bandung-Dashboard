import React from 'react';

import LogoMasker from '../icon/Masker.svg';
import LogoNoMasker from '../icon/Sad_alt_2.svg';
import LogoSuhu from '../icon/Temperature.svg';

import IsianProtokolKesehatan from './isianProtokolKesehatan.component';

import './protokolKesehatan.style.css';

function ProtokolKesehatan() {
  return (
    <div className="prokes">
      <h1>Protokol Kesehatan</h1>
      <div className="logo-flex-column">
        <div className="logo-flex-row">
          <IsianProtokolKesehatan
            img={LogoMasker}
            total="3000"
            tag="Penumpang"
          />
          <IsianProtokolKesehatan
            img={LogoNoMasker}
            total="2970"
            tag="Penumpang"
          />
        </div>
        <IsianProtokolKesehatan
          img={LogoSuhu}
          total="37.8"
          tag="Derajat Celcius"
        />
      </div>
    </div>
  );
}

export default ProtokolKesehatan;
