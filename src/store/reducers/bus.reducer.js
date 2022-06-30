import { ACTION_TYPES } from '../type';

const INITIAL_STATE = {
  busDocument: [],
  busData: [],
  selectedBus: {
    busNumber: 0,
    destination: '',
    data: [
      {
        date: [],
        passengers: 0,
      },
    ],
  }
};

const busReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_BUS_SELECTED:
      return {
        ...state,
        selectedBus: payload
      };
    case ACTION_TYPES.SET_BUS_DOCUMENT:
      return {
        ...state,
        busDocument: payload
      };
    case ACTION_TYPES.SET_BUS_DATA:
      return {
        ...state,
        busData: payload
      };
    default:
      return state;
  }
};

export default busReducer;
