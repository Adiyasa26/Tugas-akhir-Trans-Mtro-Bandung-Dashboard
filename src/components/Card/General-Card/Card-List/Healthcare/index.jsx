import React, { useState, useEffect } from 'react';

import CardList from '..';
import Card from '../../Card';

const Mask = props => {
  const [mask, setMask] = useState(0);
  const [noMask, setNoMask] = useState(0);
  const { state, date } = props;
  const { selectedBus } = state;

  useEffect(() => {
    let amountDay;
    if (selectedBus.data[0].date[2] === date[2]) {
      amountDay = selectedBus.data[0].passengers;
      setMask(amountDay);
    } else {
      setMask(0);
    }
  }, [date, selectedBus.data]);

  return (
    <CardList className="card-list--container" title={'Protokol Kesehatan'}>
      <Card
        key="mask"
        headerTitle={'Bermasker'}
        headerTag={`tanggal ${date[2] + ' ' + date[1] + ' ' + date[3]} `}
        mainTitle={'2000'}
        mainTag={'penumpang'}
        colorType={"cold"}
      />
      <Card
        key="non-mask"
        headerTitle={'Tidak Bermasker'}
        headerTag={`tanggal ${date[2] + ' ' + date[1] + ' ' + date[3]} `}
        mainTitle={'3000'}
        mainTag={'penumpang'}
        colorType={"neutral"}
      />
      <Card
        key="suhu"
        headerTitle={'Suhu Rata-rata'}
        headerTag={`tanggal ${date[2] + ' ' + date[1] + ' ' + date[3]} `}
        mainTitle={'36.7'}
        mainTag={'celcius'}
        colorType={"warm"}
      />
    </CardList>
  );
};

export default Mask;
