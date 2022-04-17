import React from 'react';

import BusSelector from '../BusSelector/BusSelector.component.jsx';
import Calendar from '../Calendar/Calendar.component.jsx';

import './SideBar.style.css';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>
          Dashboard Smart Metro
        </h1>

        <Calendar />
      </div>
      
      <div className="card_container">
        <BusSelector />
      </div>
    </div>
  );
}

export default SideBar;
