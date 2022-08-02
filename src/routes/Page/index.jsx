import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { action } from '../../store';

import Menubar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import AdminPage from './Home/admin';
import UserPage from './Home/user';
import Prediction from './Prediction';

import './style.scss';

import { getAccount } from '../../utils/firebase/Firebase.utils';

import { setUserRole, setSearchDate } from '../../store/action';

const Page = () => {
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const currentUser = useSelector(state => state.userData.currentUser);
  const startDate = useSelector(state => state.startDate);
  const userDataRole = useSelector(state => state.userData.userRole);
  const searchDate = useSelector(state => state.searchDate);

  const setSearch = payload => dispatch(action.setSearch(payload));
  const setBusesData = payload => dispatch(action.setBusesData(payload));
  const setStartDate = payload => dispatch(action.setStartDate(payload));

  useEffect(() => {
    const getAccountsData = async () => {
      const accountsDataMap = await getAccount();
      for (let userCount = 0; userCount < accountsDataMap.length; userCount++) {
        if (
          accountsDataMap[userCount][0] === currentUser.uid &&
          accountsDataMap[userCount][1].role &&
          accountsDataMap[userCount][1].role === 'admin'
        ) {
          dispatch(setUserRole(accountsDataMap[userCount][1].role));
          break;
        } else {
          dispatch(setUserRole('user'));
        }
      }
    };
    if (currentUser) {
      getAccountsData();
    }
  }, [dispatch, currentUser]);

  useEffect(() => {
    const monthNumber = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let date_value = startDate.toString().split(' ');
    const date = parseInt(date_value[2]);
    const month = monthNumber.indexOf(date_value[1]) + 1;
    const year = parseInt(date_value[3]);
    let new_date_value = [date, month, year];
    dispatch(setSearchDate(new_date_value));
  }, [dispatch, startDate]);

  return (
    <div>
      <div className="grid">
        <Menubar className="menubar" />
        <SideBar
          className="sidebar"
          search={setSearch}
          state={state}
          startDate={setStartDate}
          setBusesData={setBusesData}
        />
        <Routes>
          {userDataRole === 'admin' ? (
            <Route
              path="/home"
              element={
                <AdminPage
                  state={state}
                  startDate={setStartDate}
                  searchDate={searchDate}
                />
              }
            />
          ) : (
            <Route path="/home" element={<UserPage state={state} />} />
          )}
          <Route
            path="/prediction"
            element={<Prediction state={state} startDate={setStartDate} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Page;
