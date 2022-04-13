import React from 'react';

import FilterWaktu from '../FilterWaktu/FilterWaktu.component';
import HasilFilterTotalPenumpang from '../HasilFilterTotalPenumpang/HasilFilterTotalPenumpang.component';
import ProtokolKesehatan from '../ProtokolKesahatan/ProtokolKesehatan.component';
import TotalPendapatan from '../TotalPendapatan/TotalPendapatan.component';

import './Filter.style.css';

function Filter() {
  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <FilterWaktu />
      </div>
      <div className="grid-item item2">
        <ProtokolKesehatan />
      </div>
      <div className="grid-item item3">
        <HasilFilterTotalPenumpang />
      </div>
      <div className="grid-item item4">
        <TotalPendapatan />
      </div>
    </div>
  );
}

export default Filter;
