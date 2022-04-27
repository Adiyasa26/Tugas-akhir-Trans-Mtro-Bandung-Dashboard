import React from 'react';
import { useSelector, useDispatch  } from "react-redux"
import { action } from "../store"
import { bindActionCreators } from 'redux'

import Menubar from '../components/MenuBar';
import SideBar from '../components/SideBar';
import Information from '../components/Information';

import './style.css';

function Page() {
  const dispatch = useDispatch()

  const state = useSelector((state) => state)

  const { search, selectedBus, startDate } = bindActionCreators(action, dispatch);

  return (
    <div>
      <div className="grid">
        <Menubar className="menubar" />
        <SideBar className="sidebar" search={search} state={state} selectedBus={selectedBus} startDate={startDate}/>
        <Information state={state} selectedBus={selectedBus} startDate={startDate} />
      </div>
    </div>
  );
}

export default Page;
