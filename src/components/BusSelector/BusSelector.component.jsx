import React from 'react';

import CardBus from '../CardBus/CardBus.component';

import './BusSelector.style.css'

function BusSelector() {
    
    const busInfo = {
        buses: [
          {
            armada: 1,
            jurusan: 'Cibiru - Cicaheum',
            pemberhentian: '09:20 - 09.45',
            lokasi: 'Jl.Jendral Sudirman'
          },
          {
            armada: 2,
            jurusan: 'Cicaheum - Cibereum',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 3,
            jurusan: 'Cibereum - Cicaheum',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 4,
            jurusan: 'Cicaheum - Cibiru',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 5,
            jurusan: 'Cicaheum - Leuwi Pandjang',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 6,
            jurusan: 'Leuwi Pandjang - Cicaheum',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 7,
            jurusan: 'Cicaheum - Dago',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 8,
            jurusan: 'Dago - Cicaheum',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 9,
            jurusan: 'Cicaheum - Buah Batu',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
          {
            armada: 10,
            jurusan: 'Buah Batu - Cicaheum',
            pemberhentian: '09:10 - 09.20',
            lokasi: 'Jl.Soekarno Hatta'
          },
        ]
    };

    return (
        <div className="bus-selector--container">
            {busInfo.buses.map((bus) => {
              return <CardBus busInfo={bus}/>    
            })}
        </div>
    );
}

export default BusSelector;