import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardList from '..';
import Card from '../../Card';
import { getBusInformation, getBusData } from '../../../../../utils/firebase/Firebase.utils';
import { setBusDocument, setBusData, setPassengersData } from '../../../../../store/action';

const Passenger = props => {
  const { state, date } = props;
  const { busesData } = state;
  const { selectedBus } = busesData;

  const busDocumentMap = useSelector(state => state.busesData.busDocument);
  const busDataMap = useSelector(state => state.busesData.busData);
  const passengersMap = useSelector(state => state.passengersData.passengers)
  
  const dispatch = useDispatch();  

  useEffect(() => {
    const getBusInformationMap = async () => {
      const busDataInformationMap = await getBusInformation();
      dispatch(setBusDocument(busDataInformationMap));
    }
    getBusInformationMap();
  }, [dispatch]);

  useEffect(() => {
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
  }, [busDocumentMap, dispatch, selectedBus.busNumber]);

  useEffect(() => {
    let passengersToday = 0;
    let passengersThisMonth = 0; 
    let passengersThisYear = 0;

    for(let count = 0; count < busDataMap.length; count++) {
      if (
        date[0] === busDataMap[count].date[0] &&
        date[1] === busDataMap[count].date[1] &&
        date[2] === busDataMap[count].date[2]
        ) {
        passengersToday = busDataMap[count].mask + busDataMap[count].nomask;
      } 
      
      if (
        date[1] === busDataMap[count].date[1] &&
        date[2] === busDataMap[count].date[2]
        ) {
        passengersThisMonth = busDataMap[count].mask + busDataMap[count].nomask + passengersThisMonth;
      }

      if (
        date[2] === busDataMap[count].date[2]
        ) {
        passengersThisYear = busDataMap[count].mask + busDataMap[count].nomask + passengersThisYear;
      }

      else {
        passengersToday = 0;
        passengersThisMonth = 0; 
        passengersThisYear = 0;
      }
    }
    dispatch(setPassengersData({ today: passengersToday, thismonth: passengersThisMonth, thisyear: passengersThisYear }));
  }, [busDataMap, date, dispatch])

  // useEffect(() => {
  //   let amountDay;
  //   if (setBuses.data[0].date[2] === date[2]) {
  //     amountDay = setBuses.data[0].passengers;
  //     setPassengers(amountDay);
  //   } else {
  //     setPassengers(0);
  //   }
  // }, [date, setBuses.data]);

  return (
    <CardList
      className="card-list--container"
      title={'Total Penumpang Berdasarkan Protokol Kesehatan'}
      cardListType={"passengers"}
    >
      <Card
        name={"tanggal"}
        headerTitle={'Penumpang'}
        headerTag={`tanggal ${date[0]}`}
        mainTitle={passengersMap.today}
        mainTag={'penumpang'}
      />
      <Card
        name={"bulan"}
        headerTitle={'Penumpang'}
        headerTag={`bulan ${date[1]}`}
        mainTitle={passengersMap.thismonth}
        mainTag={'penumpang'}
      />
      <Card
        name={"tahun"}
        headerTitle={'Penumpang'}
        headerTag={`tahun ${date[2]}`}
        mainTitle={passengersMap.thisyear}
        mainTag={'penumpang'}
      />
    </CardList>
  );
};

export default Passenger;
