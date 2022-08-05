import React from 'react';

import CardList from '..';
import BusPredicitonCard from '../../../Bus-Card/BusPrediction';

const ResultPrediction = () => {
  return (
    <CardList
      className="card-list--container"
      title={'Filter Prediksi'}
      cardListType={'filterprediction'}
    >
      <BusPredicitonCard />
    </CardList>
  );
};

export default ResultPrediction;
