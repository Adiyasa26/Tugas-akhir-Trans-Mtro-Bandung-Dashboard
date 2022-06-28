import React from 'react';

import Star from '../Ratings/Star';

import './style.scss';

const FeedbackReportCard = props => {
  const { reviewer, starCount, feedback } = props;
  // console.log(reviewer, starCount, feedback)

  return (
    <div className="feedback-report-card--container">
      <div className="feedback-report-card--container-photo">
        <h1>{reviewer[0].toUpperCase()}</h1>
      </div>
      <div className="feedback-report-card--container-review">
        <h2>{reviewer}</h2>
        <Star starCount={starCount} />
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default FeedbackReportCard;
