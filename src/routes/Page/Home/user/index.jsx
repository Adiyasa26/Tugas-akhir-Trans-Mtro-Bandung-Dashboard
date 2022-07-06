import React from 'react';

import BiodataPenumpang from '../../../../components/Card/General-Card/Card-List/UserProfile';
import FeedbackUser from '../../../../components/Card/General-Card/Card-List/FeedbackUser';
import RatingsViewer from '../../../../components/Card/General-Card/Card-List/RatingsViewer';

import './style.scss';

const UserPage = props => {
  const { state, searchDate } = props;
  const { userData } = state;
  const { currentUser } = userData
  
  return (
    <div className="user-container">
      <div className="user-container--header">
        <h1>Dashboard</h1>
      </div>
      <div className="user-container--main">
        <div className="user-container--main__header">
          <h1>Selamat Datang di Website Trans Metro Bandung</h1>
        </div>
        <div className="user-container--main__content">
          <div className="user-container--main__content--head">
            <BiodataPenumpang date={searchDate} state={state}/>
            <RatingsViewer date={searchDate} state={state} />
          </div>
          <div className="user-container--main__content--main">
            <FeedbackUser date={searchDate} state={state}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
