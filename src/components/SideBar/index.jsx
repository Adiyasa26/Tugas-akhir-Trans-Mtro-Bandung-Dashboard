import React, { useState } from 'react';

import BusSelector from '../Card/Bus-Card/Bus-List';
import SearchBox from '../SearchBox';

import './style.scss';

const SideBar = (props) => {
  const { state, search, setBusesData, startDate } = props;
  const [buses] = useState([
    {
      busNumber: 1,
      destination: 'Cibiru - Cibereum',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      detailInformation:
        'Pemberhentian pertama rute TMB KORIDOR 1 bis adalah Bunderan Cibiru dan pemberhentian terakhir adalah Terminal Damri Elang. TMB KORIDOR 1 (Cibeureum) iberoperasi selama setiap hari.',
      additionalInformation:
        'Informasi tambahan: TMB KORIDOR 1 memiliki 33 pemberhentian dan total durasi waktu perjalanan rute ini sekitar 50 menit.',
      data: [
        {
          date: [],
          passengers: 0,
        },
      ],
    },
    {
      busNumber: 2,
      destination: 'Cicaheum - Cibereum',
      stopTime: '09:20 - 09.45',
      stopLocation: 'Jl.Jendral Sudirman',
      detailInformation:
        'Pemberhentian pertama rute TMB KORIDOR 2 bis adalah Jalan A.H. Nasution 918 dan pemberhentian terakhir adalah Terminal Damri Elang. TMB KORIDOR 2 (Cibeureum) iberoperasi selama setiap hari.',
      additionalInformation:
        'Informasi tambahan: TMB KORIDOR 2 memiliki 18 pemberhentian dan total durasi waktu perjalanan rute ini sekitar 28 menit.',
      data: [
        {
          date: [
            'Fri',
            'Apr',
            '08',
            '2022',
            '20:17:18',
            'GMT+0700',
            '(Western Indonesia Time)',
          ],
          passengers: 300,
        },
        {
          date: [
            'Sat',
            'Apr',
            '09',
            '2022',
            '20:17:18',
            'GMT+0700',
            '(Western Indonesia Time)',
          ],
          passengers: 260,
        },
        {
          date: [
            'Sun',
            'Apr',
            '10',
            '2022',
            '20:17:18',
            'GMT+0700',
            '(Western Indonesia Time)',
          ],
          passengers: 310,
        },
        {
          date: [
            'Mon',
            'Apr',
            '11',
            '2022',
            '20:17:18',
            'GMT+0700',
            '(Western Indonesia Time)',
          ],
          passengers: 290,
        },
        {
          date: [
            'Tue',
            'Apr',
            '12',
            '2022',
            '20:17:18',
            'GMT+0700',
            '(Western Indonesia Time)',
          ],
          passengers: 275,
        },
      ],
    },
    {
      busNumber: 3,
      destination: 'Cicaheum - Sarijadi',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      detailInformation:
        'Pemberhentian pertama rute TMB KORIDOR 3 bis adalah Jalan Lemahnendeut 82 dan pemberhentian terakhir adalah Jalan Antapani Lama 44. TMB KORIDOR 3 (Cicaheum) iberoperasi selama setiap hari.',
      additionalInformation:
        'Informasi tambahan: TMB KORIDOR 3 memiliki 18 pemberhentian dan total durasi waktu perjalanan rute ini sekitar 24 menit.',
      data: [
        {
          date: [],
          passengers: 0,
        },
      ],
    },
    {
      busNumber: 4,
      destination: 'Terminal Antapani - Terminal Leuwipanjang',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      detailInformation:
        'Pemberhentian pertama rute TMB KORIDOR 4 bis adalah Terminal Leuwi Panjang dan pemberhentian terakhir adalah Terminal Antapani. TMB KORIDOR 4 (Terminal Antapani) iberoperasi selama setiap hari.',
      additionalInformation:
        'Informasi tambahan: TMB KORIDOR 4 memiliki 13 pemberhentian dan total durasi waktu perjalanan rute ini sekitar 25 menit.',
      data: [
        {
          date: [],
          passengers: 0,
        },
      ],
    },
    {
      busNumber: 5,
      destination: 'Terminal Antapani - Stasiun Hall',
      stopTime: '09:10 - 09.20',
      stopLocation: 'Jl.Soekarno Hatta',
      detailInformation:
        'Pemberhentian pertama rute TMB KORIDOR 5 bis adalah Terminal Antapani dan pemberhentian terakhir adalah Bus Terminal St. Hall. TMB KORIDOR 5 (St. Hall) iberoperasi selama setiap hari.',
      additionalInformation:
        'Informasi tambahan: TMB KORIDOR 5 memiliki 10 pemberhentian dan total durasi waktu perjalanan rute ini sekitar 15 menit.',
      data: [
        {
          date: [],
          passengers: 0,
        },
      ],
    },
  ]);

  const handleChange = e => {
    search(e.target.value);
  };

  const filteredBus = buses.filter(bus =>
    bus.destination.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Smart Metro</h1>
        <SearchBox
          placeholder="Keberangkatan/Kedatangan"
          handleChange={handleChange}
        />
      </div>

      <div className="card_container">
        <BusSelector
          buses={filteredBus}
          setBusesData={setBusesData}
          search={search}
          state={state}
          startDate={startDate}
        />
      </div>
    </div>
  );
}

export default SideBar;
