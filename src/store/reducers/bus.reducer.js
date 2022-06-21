import { ACTION_TYPES } from '../type';

const INITIAL_STATE = {
  busNumber: 0,
  data: [
    {
      date: [],
      passengers: 0,
    },
  ],
};

const busReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_BUS_SELECTED:
      return payload;
    default:
      return state;
  }
};

export default busReducer;
