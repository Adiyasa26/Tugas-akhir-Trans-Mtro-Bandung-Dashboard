import React from 'react';

import Menubar from '../components/MenuBar/MenuBar.component.jsx';
import SideBar from '../components/SideBar/SideBar.component.jsx';
import Information from '../components/Information/Information.component.jsx';

import './Dashboard.style.css';

function DashboardBus() {
  return (
    <div>
      <div className="dashboard grid">
        <Menubar className="menubar" />
        <SideBar className="sidebar" />
        <Information />
      </div>
    </div>
  );
}

export default DashboardBus;
