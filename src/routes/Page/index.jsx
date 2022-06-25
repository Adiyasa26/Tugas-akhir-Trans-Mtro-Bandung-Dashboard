import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { action } from '../../store';

import Menubar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import Home from './Home';

import './style.scss';

const Page = () => {
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const setSearch = payload => dispatch(action.setSearch(payload));
  const setSelectedBus = payload => dispatch(action.setSelectedBus(payload));
  const setStartDate = payload => dispatch(action.setStartDate(payload));

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
        <Routes>
          <Route
            index
            element={<Home state={state} startDate={setStartDate} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Page;
