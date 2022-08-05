import React from 'react';
import { useSelector } from 'react-redux';

import CardList from '..';
import TimeArrivalCard from '../../../Bus-Card/BusPrediction/TimeArrival';
import CongestionDetection from '../../../Bus-Card/BusPrediction/CongestionDetection';
import ParamsNotFilled from '../../../../../routes/Page/PramsNotFilled';

const ResultPrediction = () => {
  const busPredictionResult = useSelector(
    state => state.busesData.busPredictionResult
  );

  return (
    <CardList
      className="card-list--container"
      title={'Hasil Prediksi'}
      cardListType={'resultprediction'}
    >
      <div className="resultprediction--container">
        {busPredictionResult.length === 0 ? (
          <ParamsNotFilled />
        ) : (
          <>
            <TimeArrivalCard />
            <CongestionDetection />
          </>
        )}
      </div>
    </CardList>
  );
};

export default ResultPrediction;
