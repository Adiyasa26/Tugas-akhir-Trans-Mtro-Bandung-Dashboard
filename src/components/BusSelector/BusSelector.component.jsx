import React, { useState } from 'react';

import CardBus from '../CardBus/CardBus.component';

import './BusSelector.style.css'

function BusSelector() {
  const [selectedBus, setSelectedBus] = useState(1);
  const [buses, setBuses] = useState([
    {
      busNumber: 1,
      destination: 'Cibiru - Cicaheum',
      stopTime: '09:20 - 09.45',
      stopLocation: 'Jl.Jendral Sudirman',
      isSelected: false
    },
    {
      busNumber: 2,
      destination: 'Cicaheum - Cibereum',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 3,
      destination: 'Cibereum - Cicaheum',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 4,
      destination: 'Cicaheum - Cibiru',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 5,
      destination: 'Cicaheum - Leuwi Pandjang',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 6,
      destination: 'Leuwi Pandjang - Cicaheum',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 7,
      destination: 'Cicaheum - Dago',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 8,
      destination: 'Dago - Cicaheum',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 9,
      destination: 'Cicaheum - Buah Batu',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
    {
      busNumber: 10,
      destination: 'Buah Batu - Cicaheum',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      isSelected: false
    },
  ]);

  return (
    <div className="bus-selector--container">
      {buses.map((bus) => {
        return <CardBus key={bus.busNumber} eachBus={bus} buses={buses} setBuses={setBuses} onClick={() => {setSelectedBus(bus.busNumber)} }
          isSelected={bus.busNumber === selectedBus} />
      })}
    </div>
  );
}

export default BusSelector;