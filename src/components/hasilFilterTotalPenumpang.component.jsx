import React from 'react';

import IsianTotalPenumpang from './IsianTotalPenumpang.component';

import './hasilFilterTotalPenumpang.style.css';

function HasilFilterTotalPenumpang() {
  return (
    <div className="hasil-filter-total-penumpang">
      <h3>Total Penumpang</h3>
      <IsianTotalPenumpang tag="Per-tahun" jumlah="250.000" />
      <IsianTotalPenumpang tag="Per-bulan" jumlah="21.000" />
      <IsianTotalPenumpang tag="Per-hari" jumlah="700" />
    </div>
  );
}

export default HasilFilterTotalPenumpang;
