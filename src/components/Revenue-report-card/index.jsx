import React from 'react';

import './style.scss';

const RevenueReportCard = props => {
  const { key, title, revenue } = props;
  return (
    <div key={key} className="revenue-report-card--container">
      <div className="revenue-report-card--container__header">
        <h3>{title}</h3>
      </div>
      <div className="revenue-report-card--container__main">{revenue}</div>
    </div>
  );
};

export default RevenueReportCard;
