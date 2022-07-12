import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AdminPage from './admin';
import UserPage from './user';

import { getAccount } from '../../../utils/firebase/Firebase.utils';

import { setUserRole } from '../../../store/action';

const Home = props => {
  const { state, startDate } = props;
  const [searchDate, setSearchDate] = useState(state.startDate);

  const currentUser = useSelector(state => state.userData.currentUser);
  const userRoleData = useSelector(state => state.userData.userRole);

  const dispatch = useDispatch();

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
    getAccountsData();
  }, [dispatch, currentUser.uid]);

  useEffect(() => {
    const monthNumber = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let date_value = state.startDate.toString().split(' ');
    const date = parseInt(date_value[2])
    const month = monthNumber.indexOf(date_value[1]) + 1
    const year = parseInt(date_value[3])
    let new_date_value = [
      date,
      month,
      year,
    ];
    setSearchDate(new_date_value);
  }, [state.startDate]);

  return (
    <div>
      {userRoleData === 'admin' ? (
        <AdminPage
          state={state}
          startDate={startDate}
          searchDate={searchDate}
        />
      ) : (
        <UserPage state={state}/>
      )}
    </div>
  );
};
export default Home;
