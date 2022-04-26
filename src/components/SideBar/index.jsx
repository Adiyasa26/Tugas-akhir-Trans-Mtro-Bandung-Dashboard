import React, {useState} from 'react';

import BusSelector from '../Card/Bus-Card/Bus-List';
import SearchBox from '../SearchBox'

import './style.css';

function SideBar(props) {
  const [searchField, setSearchField] = useState('');
  const [buses] = useState([
    {
      busNumber: 1,
      destination: 'Cibiru - Cicaheum',
      stopTime: '09:20 - 09.45',
      stopLocation: 'Jl.Jendral Sudirman',
      isSelected: false,
      data: [
        {
          date: ['Fri', 'Apr', '08', '2022', '20:17:18', 'GMT+0700', '(Western Indonesia Time)'],
          passengers: 300,
        },
        {
          date: ['Sat', 'Apr', '09', '2022', '20:17:18', 'GMT+0700', '(Western Indonesia Time)'],
          passengers: 260,
        },
        {
          date: ['Sun', 'Apr', '10', '2022', '20:17:18', 'GMT+0700', '(Western Indonesia Time)'],
          passengers: 310,
        },
        {
          date: ['Mon', 'Apr', '11', '2022', '20:17:18', 'GMT+0700', '(Western Indonesia Time)'],
          passengers: 290,
        },
        {
          date: ['Tue', 'Apr', '12', '2022', '20:17:18', 'GMT+0700', '(Western Indonesia Time)'],
          passengers: 275,
        }
      ]
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

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  const filteredBus = buses.filter(bus => bus.destination.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>
          Smart Metro
        </h1>
        <SearchBox placeholder='Keberangkatan/Kedatangan' handleChange={handleChange} />
      </div>
      
      <div className="card_container">
        <BusSelector buses={filteredBus} setSearchField={setSearchField} searchField={searchField} />
      </div>
      
    </div>
  );
}

export default SideBar;
