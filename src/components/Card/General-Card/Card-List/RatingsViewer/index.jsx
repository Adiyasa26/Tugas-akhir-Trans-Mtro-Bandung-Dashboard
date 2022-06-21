import React from 'react';

import CardList from '..';
import Star from '../../../../Ratings/Star';

const RatingsViewer = () => {
  return (
    <CardList
      className="card-list--container"
      title={'Peringkat Pengguna'}
      cardListType={'ratingsviewer'}
    >
      <div className="ratings-viewer--container">
        <div className="ratings-viewer--container-header">
          <div className="ratings-viewer--container-header__left">
            <h1>4.7</h1>
            <p>Rating Aplikasi</p>
          </div>
          <div className="ratings-viewer--container-header__right">
            <div className="star-container-feedback">
              <Star starCount={5} />
              <p>70%</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={4} />
              <p>22%</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={3} />
              <p>6%</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={2} />
              <p>1%</p>
            </div>
            <div className="star-container-feedback">
              <Star starCount={1} />
              <p>1%</p>
            </div>
          </div>
        </div>
      </div>
    </CardList>
  );
};

export default RatingsViewer;
