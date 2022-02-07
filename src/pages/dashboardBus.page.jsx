import React from 'react';

import Menubar from '../components/menuBar.component.jsx';
import NavigationBar from '../components/navigationBar.component.jsx';
import SideBar from '../components/sideBar.component.jsx';
import Filter from '../components/Filter.component.jsx';

import './dashboard.style.css';

function DashboardBus() {
  return (
    <div>
      <NavigationBar />
      <div className="dashboard grid">
        <Menubar className="menubar" />
        <SideBar className="sidebar" />
        <Filter className="filter" />
      </div>
    </div>
  );
}

export default DashboardBus;
