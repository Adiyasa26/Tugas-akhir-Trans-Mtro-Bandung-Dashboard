import { ACTION_TYPES } from '../type';

const INITIAL_STATE = {
  healthcare: {
    mask: 0,
    nomask: 0,
    temp: 0,
    date: []
  },
  passengers: {
    today: 0,
    thismonth: 0,
    thisyear: 0
  } 
};

const passengersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_HEALTHCARE_DATA:
      return {
        ...state,
        healthcare: payload
      };
    case ACTION_TYPES.SET_PASSENGERS_DATA:
      return {
        ...state,
        passengers: payload
      };
    default:
      return state;
  }
};

export default passengersReducer;
