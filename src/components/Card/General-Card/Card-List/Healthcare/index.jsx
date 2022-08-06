import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '..';
import Card from '../../Card';
import Button from '../../../../Button';
import { setHealthcareData, setBusData} from '../../../../../store/action';
import {
  getBusData,
  getMaskData,
  createMaskNoMaskData,
} from '../../../../../utils/firebase/Firebase.utils';

const Mask = props => {
  const [healthcare, setHealthcare] = useState([]);
  const [maskCount, setMaskCount] = useState(0);
  const [noMaskCount, setNoMaskCount] = useState(0);
  const { date } = props;

  const dispatch = useDispatch();

  const busDocumentMap = useSelector(state => state.busesData.busDocument);
  const busDataMap = useSelector(state => state.busesData.busData);
  const healthcareMap = useSelector(state => state.passengersData.healthcare);
  const selectedBus = useSelector(state => state.busesData.selectedBus);

  useEffect(() => {
    const getHealthInformationMap = async () => {
      const healthInformationMap = await getMaskData();
      setHealthcare(healthInformationMap);
    };
    getHealthInformationMap();
  }, []);

  const updateHandleClick = () => {
    const getHealthInformationMap = async () => {
      const healthInformationMap = await getMaskData();
      setHealthcare(healthInformationMap);
    };

    const getBusDataMap = async () => {
      const busDataArray = [];
      for(let data=0; data < busDocumentMap.length; data++) {
        const busDataMap = await getBusData(busDocumentMap[data][0]);
        busDataArray.push([busDocumentMap[data][1], busDataMap])
      }

      busDataArray.map(data => {
        if (selectedBus.busNumber === data[0].busNumber) {
          dispatch(setBusData(data[1]));
        }
        return true;
      })
    }
    getBusDataMap();
    getHealthInformationMap();
  };

  useEffect(() => {
    let mask = 0;
    let nomask = 0;
    let realMask = 0;
    let realNoMask = 0;
    for (let count = 0; count < healthcare.length; count++) {
      if (
        healthcare[count].date[0] === date[0] &&
        healthcare[count].date[1] === date[1] &&
        healthcare[count].date[2] === date[2]
      ) {
        if (healthcare[count].label === 'Mask') {
          mask += 1;
          realMask = Math.ceil(mask / 24);
          setMaskCount(realMask);
        } else {
          nomask += 1;
          realNoMask = Math.ceil(nomask / 24);
          setNoMaskCount(realNoMask);
        }

        const date_id =
          healthcare[count].date[0].toString() +
          healthcare[count].date[1].toString() +
          healthcare[count].date[2].toString();

        const setHealthcare = async () => {
          return await createMaskNoMaskData(
            healthcare[count].date,
            maskCount,
            noMaskCount,
            date_id
          );
        };
        setHealthcare();
      } else {
        continue;
      }
    }
  }, [date, healthcare, maskCount, noMaskCount]);

  useEffect(() => {
    for (let count = 0; count < busDataMap.length; count++) {
      if (
        date[0] === busDataMap[count].date[0] &&
        date[1] === busDataMap[count].date[1] &&
        date[2] === busDataMap[count].date[2]
      ) {
        dispatch(setHealthcareData(busDataMap[count]));
        break;
      } else
        dispatch(setHealthcareData({ mask: 0, nomask: 0, temp: 0, date: [] }));
    }
  }, [busDataMap, date, dispatch]);

  // const averageTempCounter = () => {
  //   return healthcareMap.mask !== 0 &&
  //     healthcareMap.nomask !== 0 &&
  //     healthcareMap.temp !== 0 &&
  //     healthcareMap.date !== []
  //     ? (healthcareMap.temp / (healthcareMap.mask + healthcareMap.nomask)).toFixed(
  //         1
  //       )
  //     : 0;
  // };

  return (
    <CardList
      className="card-list--container"
      title={'Protokol Kesehatan'}
      cardListType={'healthcare'}
    >
      <div className="healthcare--container">
        <Button buttonType={'google'} onClick={updateHandleClick}>Update Data</Button>
        <div className="healthcare--container-main">
          <Card
            name={'mask'}
            headerTitle={'Bermasker'}
            // headerTag={`${date[0] + ' ' + date[1] + ' ' + date[2]} `}
            mainTitle={healthcareMap.mask}
            mainTag={'penumpang'}
          />
          <Card
            name={'non-mask'}
            headerTitle={'Tanpa masker'}
            // headerTag={`${date[0] + ' ' + date[1] + ' ' + date[2]} `}
            mainTitle={healthcareMap.nomask}
            mainTag={'penumpang'}
          />
          {/* <Card
        name={'suhu'}
        headerTitle={'Suhu'}
        headerTag={`${date[0] + ' ' + date[1] + ' ' + date[2]} `}
        mainTitle={averageTempCounter()}
        mainTag={'celcius'}
      /> */}
        </div>
      </div>
    </CardList>
  );
};

export default Mask;
