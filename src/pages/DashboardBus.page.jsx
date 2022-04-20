import React from 'react';

import Menubar from '../components/MenuBar/MenuBar.component.jsx';
import SideBar from '../components/SideBar/SideBar.component.jsx';
// import Filter from '../components/Filter/Filter.component.jsx';

import './Dashboard.style.css';

function DashboardBus() {
  return (
    <div>
      <div className="dashboard grid">
        <Menubar className="menubar" />
        <SideBar className="sidebar" />
        {/* <Filter className="filter" /> */}
      </div>
    </div>
  );
}

export default DashboardBus;
