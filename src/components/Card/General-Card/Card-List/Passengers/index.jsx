import React, { useState, useEffect } from 'react';

import CardList from '..';
import Card from '../../Card';

const Passenger = (props) => {
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
      title={'Prediksi Jumlah Penumpang Berdasarkan Protokol Kesehatan'}
    >
      <Card key="tanggal" tag={`tanggal ${date[2]}`} amount={passengers} />
      <Card key="bulan" tag={`bulan ${date[1]}`} amount="90000" />
      <Card key="tahun" tag={`tahun ${date[3]}`} amount="108000" />
    </CardList>
  );
}

export default Passenger;
