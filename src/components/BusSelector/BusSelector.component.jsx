import React, { useState } from 'react';

import CardBus from '../CardBus/CardBus.component';
import BusSelected from './BusSelected.component';

import './BusSelector.style.css'

function BusSelector(props) {
  const {buses, searchField, setSearchField} = props;
  const [selectedBus, setSelectedBus] = useState(1);

  const onCLickSelector = () => {
    buses.map(bus => {
      return bus.busNumber === selectedBus ? setSearchField(bus.destination) : ''
    })
  }

  const onCLickClearSearch = () => {
      return setSearchField('')
  }

  return (
    <div className="bus-selector--container">
      <BusSelected className={` clear-search item ${(searchField) ? '' : 'hide'}`} busIsSelected={selectedBus} onClickSelectedBus={onCLickSelector} onClickClearSearch={onCLickClearSearch}/>
      {buses.map((bus) => {
        return (
          <CardBus key={bus.busNumber} bus={bus} onClick={() => {setSelectedBus(bus.busNumber)}}
            isSelected={bus.busNumber === selectedBus} />
        )
      })}
    </div>
  );
}

export default BusSelector;