import React from 'react';

import CardBus from '../Bus';
import BusSelected from './Bus-List-Selected';

import './style.css'

function BusSelector(props) {
  const {buses, state, search, selectedBus} = props;

  const onCLickSelector = () => {
    buses.map(bus => {
      return bus.busNumber === state.selectedBus.busNumber ? search(bus.destination) : ''
    })
  }

  const onCLickClearSearch = () => {
      return search('')
  }

  return (
    <div className="bus-selector--container">
      <BusSelected className={`clear-search item ${(state.search) ? '' : 'hide'}`} busIsSelected={state.selectedBus.busNumber} onClickSelectedBus={onCLickSelector} onClickClearSearch={onCLickClearSearch}/>

      {buses.map((bus) => {
        return (
          <CardBus key={bus.busNumber} bus={bus} onClick={() => selectedBus(bus)}
            isSelected={bus.busNumber === state.selectedBus.busNumber} />
        )
      })}
    </div>
  );
}

export default BusSelector;