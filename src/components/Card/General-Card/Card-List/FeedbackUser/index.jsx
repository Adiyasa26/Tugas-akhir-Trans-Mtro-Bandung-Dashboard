import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CardList from '..';
import Star from '../../../../Ratings/Star';
import Button from '../../../../Button';

import { createUserFeedback } from '../../../../../utils/firebase/Firebase.utils';

const FeedbackUser = () => {
  const [starClicked, setStarClicked] = useState(0);
  const [feedback, setFeedback] = useState('');

  const currentUser = useSelector(state => state.userData.currentUser)

  useEffect(() => {
    const starOne = document
      .querySelector('.feedback-viewer--container-content__content')
      .querySelector('#star1');
    const starTwo = document
      .querySelector('.feedback-viewer--container-content__content')
      .querySelector('#star2');
    const starThree = document
      .querySelector('.feedback-viewer--container-content__content')
      .querySelector('#star3');
    const starFour = document
      .querySelector('.feedback-viewer--container-content__content')
      .querySelector('#star4');
    const starFive = document
      .querySelector('.feedback-viewer--container-content__content')
      .querySelector('#star5');

    starOne.onclick = () => setStarClicked(1);
    starTwo.onclick = () => setStarClicked(2);
    starThree.onclick = () => setStarClicked(3);
    starFour.onclick = () => setStarClicked(4);
    starFive.onclick = () => setStarClicked(5);
  });

  const onClickSubmitHandler = async () => {
    await createUserFeedback(currentUser, starClicked, feedback);
    setStarClicked(0);
  }

  const handleChange = (e) => {
    setFeedback(e.target.value);
  }

  return (
    <CardList
      className="card-list--container"
      title={'Timbal Balik Pengguna'}
      cardListType={'feedbackviewer'}
    >
      <div className="feedback-viewer--container">
        <div className="feedback-viewer--container-content">
          <div className="feedback-viewer--container-content__header-user">
            <h1>Kritik, pesan, dan pesan anda untuk Trans Metro Bandung?</h1>
          </div>
          <div className="feedback-viewer--container-content__content">
            {starClicked ? (
              <>
                <Star starCount={starClicked} className={'review'} />
                <textarea onChange={handleChange} />
                <Button buttonType={'google'} onClick={onClickSubmitHandler}>SUBMIT</Button>
              </>
            ) : (
              <>
                <Star starCount={starClicked} className={'review-alone'} />
              </>
            )}
          </div>
        </div>
      </div>
    </CardList>
  );
};

export default FeedbackUser;
