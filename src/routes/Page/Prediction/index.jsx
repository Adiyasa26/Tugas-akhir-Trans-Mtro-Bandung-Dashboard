import React from 'react';
import { useSelector } from 'react-redux';

import { destination } from './PredictionContainer';
import FeatureNotSupported from '../FeatureNotSupported';
import BusNotSelected from '../BusNotSelected';
import PredictionContainer from './PredictionContainer';

const Prediction = () => {
  const selectedBus = useSelector(state => state.busesData.selectedBus);

  console.log( selectedBus.destination === Object.keys(destination)[0] ||
  selectedBus.destination === Object.keys(destination)[1]);
  console.log(selectedBus.busNumber === 0);

  return (
    <div className="prediction">
      {selectedBus.busNumber !== 0 ? (
        selectedBus.destination === Object.keys(destination)[0] ||
        selectedBus.destination === Object.keys(destination)[1] ? (
          <PredictionContainer />
        ) : (
          <FeatureNotSupported />
        )
      ) : (
        <BusNotSelected />
      )}
    </div>
  );
};

export default Prediction;
