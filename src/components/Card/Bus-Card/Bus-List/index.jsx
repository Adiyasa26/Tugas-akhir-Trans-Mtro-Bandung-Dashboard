import React from 'react';

import CardBus from '../Bus';
import BusSelected from './Bus-List-Selected';

import './style.scss'

function BusSelector(props) {
  const {buses, state, search, setBusesData} = props;

  const onCLickSelector = () => {
    buses.map(bus => {
      return bus.busNumber === state.busesData.selectedBus.busNumber ? search(bus.destination) : ''
    })
  }

  const onCLickClearSearch = () => {
      return search('')
  }

  return (
    <div className="bus-selector--container">
      <BusSelected className={`clear-search item ${(state.search) ? '' : 'hide'}`} busIsSelected={state.busesData.selectedBus.busNumber} onClickSelectedBus={onCLickSelector} onClickClearSearch={onCLickClearSearch}/>

      {buses.map((bus) => {
        return (
          <CardBus key={bus.busNumber} bus={bus} onClick={() => setBusesData(bus)}
            isSelected={bus.busNumber === state.busesData.selectedBus.busNumber} />
        )
      })}
    </div>
  );
}

export default BusSelector;