import React from 'react';

import BiodataPenumpang from '../../../../components/Card/General-Card/Card-List/UserProfile';
import FeedbackUser from '../../../../components/Card/General-Card/Card-List/FeedbackUser';
import RatingsViewer from '../../../../components/Card/General-Card/Card-List/RatingsViewer';
import BusNotSelected from '../../BusNotSelected';
import UserSignIn from '../../../../components/Card/General-Card/Card-List/UserSignIn';

import './style.scss';

const UserPage = props => {
  const { state, searchDate } = props;

  return (
    <div className="user-container">
      <div className="user-container--header">
        <h1>Dashboard</h1>
      </div>
      {state.busesData.selectedBus.busNumber !== 0 ? (
        <div className="user-container--main">
          <div className="user-container--main__header">
            <h1>Selamat Datang di Website Trans Metro Bandung</h1>
          </div>
          <div className="user-container--main__content">
            <div className="user-container--main__content--head">
              <BiodataPenumpang date={searchDate} state={state} />
              <RatingsViewer date={searchDate} state={state} />
            </div>
            <div className="user-container--main__content--main">
              {state.userData.currentUser ? (
                <FeedbackUser date={searchDate} state={state} />
              ) : (
                <UserSignIn />
              )}
            </div>
          </div>
        </div>
      ) : (
        <BusNotSelected />
      )}
    </div>
  );
};

export default UserPage;
