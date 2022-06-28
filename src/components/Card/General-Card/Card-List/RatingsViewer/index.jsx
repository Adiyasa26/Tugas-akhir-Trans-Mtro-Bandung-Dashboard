import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '..';
import Star from '../../../../Ratings/Star';
import { getFeedback } from '../../../../../utils/firebase/Firebase.utils';
import { setFeedbackUserMap } from '../../../../../store/action';

const RatingsViewer = () => {
  let totalFiveStars = 0;
  let totalFourStars = 0;
  let totalThreeStars = 0;
  let totalTwoStars = 0;
  let totalOneStars = 0;

  const feedbackUser = useSelector(state => state.feedbackUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const getFeedbackUserMap = async () => {
      const feedbackMap = await getFeedback();
      dispatch(setFeedbackUserMap(feedbackMap));
    };
    getFeedbackUserMap();
  }, [dispatch]);

  for (let count = 0; count < feedbackUser.length; count++) {
    switch (feedbackUser[count].star) {
      case 5:
        totalFiveStars += 1;
        break;

      case 4:
        totalFourStars += 1;
        break;

      case 3:
        totalThreeStars += 1;
        break;

      case 2:
        totalTwoStars += 1;
        break;

      case 1:
        totalOneStars += 1;
        break;
    
      default:
        break;
    }
  }

  const totalFeedback = feedbackUser.length;
  const percentageOfFiveStars = (totalFiveStars / totalFeedback) * 100;
  const percentageOfFourStars = (totalFourStars / totalFeedback) * 100;
  const percentageOfThreeStars = (totalThreeStars / totalFeedback) * 100;
  const percentageOfTwoStars = (totalTwoStars / totalFeedback) * 100;
  const percentageOfOneStars = (totalOneStars / totalFeedback) * 100;


  const calculationOfRatings = ((totalFiveStars * 5) + (totalFourStars * 4) + (totalThreeStars * 3) + (totalTwoStars * 2) + (totalOneStars * 1)) / totalFeedback

  return (
    <CardList
      className="card-list--container"
      title={'Peringkat Pengguna'}
      cardListType={'ratingsviewer'}
    >
      <div className="ratings-viewer--container">
        <div className="ratings-viewer--container-header">
          <div className="ratings-viewer--container-header__left">
            <h1>{calculationOfRatings}</h1>
            <p>Rating Aplikasi</p>
          </div>
          <div className="ratings-viewer--container-header__right">
            <div className="star-container-feedback">
              <Star starCount={5} />
              <p>{`${percentageOfFiveStars}%`}</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={4} />
              <p>{`${percentageOfFourStars}%`}</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={3} />
              <p>{`${percentageOfThreeStars}%`}</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={2} />
              <p>{`${percentageOfTwoStars}%`}</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={1} />
              <p>{`${percentageOfOneStars}%`}</p>
            </div>
          </div>
        </div>
      </div>
    </CardList>
  );
};

export default RatingsViewer;
