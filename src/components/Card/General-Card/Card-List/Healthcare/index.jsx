import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '..';
import Card from '../../Card';
import { setHealthcareData } from '../../../../../store/action';

const Mask = props => {
  const { date } = props;

  const dispatch = useDispatch();

  const busDataMap = useSelector(state => state.busesData.busData);
  const healtcareMap = useSelector(state => state.passengersData.healthcare);

  useEffect(() => {
    for(let count = 0; count < busDataMap.length; count++) {
      if (
        date[2] === busDataMap[count].date[2] &&
        date[1] === busDataMap[count].date[1] &&
        date[3] === busDataMap[count].date[3]
      ) {
        dispatch(setHealthcareData(busDataMap[count]));
        break;
      } else dispatch(setHealthcareData({ mask: 0, nomask: 0, temp: 0, date: [] }));
    }
  }, [busDataMap, date, dispatch]);

  const averageTempCounter = () => {
    return healtcareMap.mask !== 0 &&
      healtcareMap.nomask !== 0 &&
      healtcareMap.temp !== 0 &&
      healtcareMap.date !== []
      ? (healtcareMap.temp / (healtcareMap.mask + healtcareMap.nomask)).toFixed(
          1
        )
      : 0;
  };

  return (
    <CardList
      className="card-list--container"
      title={'Protokol Kesehatan'}
      cardListType={'healthcare'}
    >
      <Card
        name={'mask'}
        headerTitle={'Bermasker'}
        headerTag={`${date[2] + ' ' + date[1] + ' ' + date[3]} `}
        mainTitle={healtcareMap.mask}
        mainTag={'penumpang'}
      />
      <Card
        name={'non-mask'}
        headerTitle={'Tanpa masker'}
        headerTag={`${date[2] + ' ' + date[1] + ' ' + date[3]} `}
        mainTitle={healtcareMap.nomask}
        mainTag={'penumpang'}
      />
      <Card
        name={'suhu'}
        headerTitle={'Suhu'}
        headerTag={`${date[2] + ' ' + date[1] + ' ' + date[3]} `}
        mainTitle={averageTempCounter()}
        mainTag={'celcius'}
      />
    </CardList>
  );
};

export default Mask;
