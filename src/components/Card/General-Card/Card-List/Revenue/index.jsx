import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '..';
import RevenueReportCard from '../../../../Revenue-report-card';
import { setRevenueData } from '../../../../../store/action';

const Revenue = () => {
  const passengersMap = useSelector(state => state.passengersData.passengers);
  const revenueMap = useSelector(state => state.busesData.busRevenue);

  const dispatch = useDispatch();

  useEffect(() => {
    const price = 3000;

    const revenueToday = price * passengersMap.today;
    const revenueMonth = price * passengersMap.thismonth;
    const revenueYear = price * passengersMap.thisyear;

    dispatch(setRevenueData({today: revenueToday, month: revenueMonth, year: revenueYear}))
  }, [dispatch, passengersMap.today, passengersMap.thismonth, passengersMap.thisyear]);

  return (
    <CardList
      className="card-list--container"
      title={'Total Pendapatan Berdasarkan Penumpang'}
      cardListType={"revenue"}
    >
      <div className="card-list--container-revenue">
        <RevenueReportCard
          name={"harian"}
          title={'Harian'}
          revenue={revenueMap.today}
        />
        <RevenueReportCard
          name={"bulanan"}
          title={'Bulanan'}
          revenue={revenueMap.month}
        />
        <RevenueReportCard
          name={"tahunan"}
          title={'Tahunan'}
          revenue={revenueMap.year}
        />
      </div>
    </CardList>
  );
};

export default Revenue;
