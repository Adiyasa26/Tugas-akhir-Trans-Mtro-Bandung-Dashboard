import React from 'react';
import IsianTotalPendapatan from '../IsianTotalPendapatan/IsianTotalPendapatan.component';

import './TotalPendapatan.style.css';

function TotalPendapatan() {
  return (
    <div className="total-pendapatan">
      <h1>Total Pendapatan</h1>
      <IsianTotalPendapatan tag="Per-tahun" nominal="Rp1.012.000.000.00" />
      <IsianTotalPendapatan tag="Per-bulan" nominal="Rp1.012.000.000.00" />
      <IsianTotalPendapatan tag="Per-hari" nominal="Rp1.012.000.000.00" />
    </div>
  );
}

export default TotalPendapatan;
