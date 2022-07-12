import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardList from '..';
import FeedbackReportCard from '../../../../Feedback-report-card';

import { getFeedback } from '../../../../../utils/firebase/Firebase.utils';
import { setFeedbackUserMap } from '../../../../../store/action';

const FeedbackViewer = () => {
  const feedbackUser = useSelector((state) => state.feedbackUser);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getFeedbackUserMap = async () => {
      const feedbackMap = await getFeedback();
      dispatch(setFeedbackUserMap(feedbackMap))
    }
    getFeedbackUserMap();
  }, [dispatch]);

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
            {feedbackUser.map(user => {
              const { displayName, star, feedback } = user;
              return <FeedbackReportCard reviewer={displayName} starCount={star} feedback={feedback}/>
            })}
          </div>
        </div>
      </div>
    </CardList>
  );
};

export default FeedbackViewer;
