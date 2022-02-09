import React from 'react';

import FilterWaktu from './filterWaktu.component';

import './Filter.style.css';

function Filter() {
  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <FilterWaktu />
      </div>
      <div className="grid-item item2">2</div>
      <div className="grid-item item3">3</div>
      <div className="grid-item item4"></div>
      <div className="grid-item item5">
        <button>Test</button>
      </div>
    </div>
  );
}

export default Filter;
