import React, { useEffect } from 'react';

import CardList from '..';
import RevenueReportCard from '../../../../Revenue-report-card';

const Revenue = props => {
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
          revenue={'Rp2.000.000,00'}
        />
        <RevenueReportCard
          name={"bulanan"}
          title={'Bulanan'}
          revenue={'Rp60.000.000,00'}
        />
        <RevenueReportCard
          name={"tahunan"}
          title={'Tahunan'}
          revenue={'Rp720.000.000,00'}
        />
      </div>
    </CardList>
  );
};

export default Revenue;
