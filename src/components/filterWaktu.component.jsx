import React from 'react';

import ExpandLeftExpandRight from './expandLeftExpandRight.component';

import './filterWaktu.style.css';

function FilterWaktu() {
  return (
    <div className="filter-waktu">
      <h1>Filter Monitoring</h1>
      <div className="flex-filter-waktu">
        <ExpandLeftExpandRight name="2021" />
        <ExpandLeftExpandRight name="Januari" />
        <ExpandLeftExpandRight name="1" />
      </div>
    </div>
  );
}
export default FilterWaktu;
