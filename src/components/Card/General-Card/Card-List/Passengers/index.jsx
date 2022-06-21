import React, { useState, useEffect } from 'react';

import CardList from '..';
import Card from '../../Card';

const Passenger = props => {
  const [passengers, setPassengers] = useState(0);
  const { state, date } = props;
  const { selectedBus } = state;

  useEffect(() => {
    let amountDay;
    if (selectedBus.data[0].date[2] === date[2]) {
      amountDay = selectedBus.data[0].passengers;
      setPassengers(amountDay);
    } else {
      setPassengers(0);
    }
  }, [date, selectedBus.data]);

  return (
    <CardList
      className="card-list--container"
      title={'Total Penumpang Berdasarkan Protokol Kesehatan'}
      cardListType={"passengers"}
    >
      <Card
        key="tanggal"
        headerTitle={'Penumpang'}
        headerTag={`tanggal ${date[2]}`}
        mainTitle={passengers}
        mainTag={'penumpang'}
      />
      <Card
        key="bulan"
        headerTitle={'Penumpang'}
        headerTag={`bulan ${date[1]}`}
        mainTitle="90000"
        mainTag={'penumpang'}
      />
      <Card
        key="tahun"
        headerTitle={'Penumpang'}
        headerTag={`tahun ${date[3]}`}
        mainTitle="108000"
        mainTag={'penumpang'}
      />
    </CardList>
  );
};

export default Passenger;
