import React from 'react';

import FilterWaktu from './filterWaktu.component';
import HasilFilterTotalPenumpang from './hasilFilterTotalPenumpang.component';
import ProtokolKesehatan from './protokolKesehatan.component';
import TotalPendapatan from './totalPendapatan.component';

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
      <div className="grid-item item5">
        <button>Test</button>
      </div>
    </div>
  );
}

export default Filter;
