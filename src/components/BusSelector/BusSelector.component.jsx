import React, { useState } from 'react';

import CardBus from '../CardBus/CardBus.component';

import './BusSelector.style.css'

function BusSelector(props) {
  const [selectedBus, setSelectedBus] = useState(1);

  return (
    <div className="bus-selector--container">
      {props.buses.map((bus) => {
        return <CardBus key={bus.busNumber} bus={bus} onClick={() => {setSelectedBus(bus.busNumber)} }
          isSelected={bus.busNumber === selectedBus} />
      })}
    </div>
  );
}

export default BusSelector;