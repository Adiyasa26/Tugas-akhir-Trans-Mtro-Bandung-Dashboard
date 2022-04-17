import React from 'react';

import HasilFilterTotalPenumpang from '../HasilFilterTotalPenumpang/HasilFilterTotalPenumpang.component';
import ProtokolKesehatan from '../ProtokolKesahatan/ProtokolKesehatan.component';
import TotalPendapatan from '../TotalPendapatan/TotalPendapatan.component';

import './Filter.style.css';

function Filter() {
  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <ProtokolKesehatan />
      </div>
      <div className="grid-item item2">
        <HasilFilterTotalPenumpang />
      </div>
      <div className="grid-item item3">
        <TotalPendapatan />
      </div>
    </div>
  );
}

export default Filter;
