import React, { useState } from 'react';

import CardList from '..';
import SelectFilter from '../../../../SelectFilter';
import Button from '../../../../Button';

const FilterPrediction = () => {
  const now = new Date();
  let now_hour = now.getHours();
  let now_minute = now.getMinutes();

  if (now_minute < 10) {
    now_minute = '0' + now_minute;
  }

  const time_params = now_hour + ':' + now_minute;

  const defaultValue = {
    deptime: time_params,
    day: '',
    path: '',
    halteStart: '',
    halteEnd: '',
  };

  const [selected, setSelected] = useState(defaultValue);
  const [prediction, setPrediction] = useState('');
  const { deptime, day, path, halteStart, halteEnd } = selected;

  console.log(selected);

  const handleChange = event => {
    const { name, value } = event.target;
    setSelected({ ...selected, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const params = { deptime, day, path, halteStart, halteEnd };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    };
    fetch('/predict', requestOptions)
      .then(response => response.json())
      .then(data => setPrediction(data));
  };

  console.log(prediction);

  return (
    <CardList
      className="card-list--container"
      title={'Filter Prediksi'}
      cardListType={'filterprediction'}
    >
      <form>
        <div className="input-time">
          <h5>Jam Berangkat</h5>
          <input
            type="time"
            name="deptime"
            id="deptime"
            className="custom-select"
            required="required"
            defaultValue={time_params}
            onChange={handleChange}
          />
        </div>
        <SelectFilter
          title="Hari Berangkat"
          name="day"
          id="day"
          required="required"
          className="custom-select"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Pilih Hari
          </option>
          <option value="senin">Senin</option>
          <option value="selasa">Selasa</option>
          <option value="rabu">Rabu</option>
          <option value="kamis">Kamis</option>
          <option value="jumat">Jumat</option>
          <option value="sabtu">Sabtu</option>
          <option value="minggu">Minggu</option>
        </SelectFilter>
        <SelectFilter
          title="Jalur"
          name="path"
          id="path"
          required="required"
          className="custom-select"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Pilih jalur
          </option>
        </SelectFilter>
        <SelectFilter
          title="Halte Naik"
          name="halteStart"
          id="halteStart"
          required="required"
          className="custom-select"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Pilih Halte Keberangkatan
          </option>
        </SelectFilter>
        <SelectFilter
          title="Halte Turun"
          name="halteEnd"
          id="halteEnd"
          required="required"
          className="custom-select"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled>
            Pilih Halte Tujuan
          </option>
        </SelectFilter>
        <div className="button-container-form">
          <h1>Tombol Prediksi</h1>
          <Button
            type="submit"
            buttonType={'prediction'}
            onClick={handleSubmit}
          >
            Prediksi
          </Button>
        </div>
      </form>
    </CardList>
  );
};

export default FilterPrediction;
