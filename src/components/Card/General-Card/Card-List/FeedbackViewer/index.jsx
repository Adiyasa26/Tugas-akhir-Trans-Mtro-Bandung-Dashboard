import React from 'react';

import CardList from '..';
import Star from '../../../../Ratings/Star';
import FeedbackReportCard from '../../../../Feedback-report-card';

const FeedbackViewer = props => {
  const { state, date } = props;
  const { selectedBus } = state;

  return (
    <CardList
      className="card-list--container"
      title={'Timbal Balik Pengguna'}
      cardListType={'feedbackviewer'}
    >
      <div className="feedback-viewer--container">
        <div className="feedback-viewer--container-content">
          <div className="feedback-viewer--container-content__header">
            <h1>Review Pengguna</h1>
          </div>
          <div className="feedback-viewer--container-content__content">
            <FeedbackReportCard starCount={3}/>
            <FeedbackReportCard starCount={4}/>
            <FeedbackReportCard starCount={4}/>
            <FeedbackReportCard starCount={5}/>
            <FeedbackReportCard starCount={4}/>
            <FeedbackReportCard starCount={4}/>
            <FeedbackReportCard starCount={4}/>
          </div>
        </div>
      </div>
    </CardList>
  );
};

export default FeedbackViewer;
