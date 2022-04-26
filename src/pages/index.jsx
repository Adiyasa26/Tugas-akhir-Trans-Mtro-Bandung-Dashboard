import React from 'react';

import Menubar from '../components/MenuBar';
import SideBar from '../components/SideBar';
import Information from '../components/Information';

import './style.css';

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
