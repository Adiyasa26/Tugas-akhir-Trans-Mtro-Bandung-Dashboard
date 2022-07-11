import React from 'react';
import { useSelector } from 'react-redux';

import BiodataBus from '../../../../components/Card/General-Card/Card-List/Biodata-bus';
import RatingsViewer from '../../../../components/Card/General-Card/Card-List/RatingsViewer';
import FeedbackViewer from '../../../../components/Card/General-Card/Card-List/FeedbackViewer';
import Passengers from '../../../../components/Card/General-Card/Card-List/Passengers';
import Mask from '../../../../components/Card/General-Card/Card-List/Healthcare';
import CalendarContainer from '../../../../components/Calendar-container';
import Revenue from '../../../../components/Card/General-Card/Card-List/Revenue';
import BusNotSelected from '../../BusNotSelected';

import './style.scss';

const AdminPage = props => {
  const { state, startDate, searchDate } = props;

  console.log(state.busesData.selectedBus);
  return (
    <div className="admin-container">
      <div className="admin-container--header">
        <h1>Dashboard</h1>
        <CalendarContainer state={state} startDate={startDate} />
      </div>
      {state.busesData.selectedBus.busNumber !== 0 ? (
        <div className="admin-container--main">
          <div className="admin-container--main__header">
            <div className="admin-container--main__header--left">
              <div className="admin-container--main__header--left-flex">
                <BiodataBus date={searchDate} state={state} />
                <RatingsViewer date={searchDate} state={state} />
              </div>
              <Revenue date={searchDate} state={state} />
            </div>
            <div className="admin-container--main__header--right">
              <FeedbackViewer date={searchDate} state={state} />
            </div>
          </div>
          <div className="admin-container--main__content">
            <Passengers date={searchDate} state={state} />
            <Mask date={searchDate} state={state} />
          </div>
        </div>
      ) : (
        <BusNotSelected />
      )}
    </div>
  );
};

export default AdminPage;
