import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../../../store';

import Menubar from '../../../components/MenuBar';
import SideBar from '../../../components/SideBar';
import Information from '../../../components/Information';

import './style.css';

function Home() {
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const setSearch = (payload) => dispatch(action.setSearch(payload));
  const setSelectedBus = (payload) => dispatch(action.setSelectedBus(payload));
  const setStartDate = (payload) => dispatch(action.setStartDate(payload));

  return (
    <div>
      <div className="grid">
        <Menubar className="menubar" />
        <SideBar
          className="sidebar"
          search={setSearch}
          state={state}
          selectedBus={setSelectedBus}
          startDate={setStartDate}
        />
        <Information state={state} startDate={setStartDate} />
      </div>
    </div>
  );
}

export default Home;
