import React from 'react';

import CardBus from './carBus.component.jsx';

import './sideBar.style.css';

function SideBar() {
  return (
    <div className="sidebar">
      <h1>
        Aktivitas Armada <br /> Trans Metro Bandung
      </h1>
      <div className="card_container">
        <CardBus />
        <CardBus />
        <CardBus />
        <CardBus />
        <CardBus />
      </div>
    </div>
  );
}

export default SideBar;
