import { ACTION_TYPES } from '../type';

const now = new Date();
let now_hour = now.getHours();
let now_minute = now.getMinutes();

if (now_hour < 10) {
  now_hour = '0' + now_hour;
}

if (now_minute < 10) {
  now_minute = '0' + now_minute;
}

const time_params = now_hour + ':' + now_minute;

const INITIAL_STATE = {
  busPredictionParams: {
    deptime: time_params,
    day: '',
    path: '',
    halteStart: '',
    halteEnd: '',
  },
  busPredictionResult: [],
  busDocument: [],
  busData: [],
  busRevenue: {
    today: 0,
    month: 0,
    year: 0,
  },
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
    
    case ACTION_TYPES.SET_BUS_PREDICTION_PARAMS:
      return {
        ...state,
        busPredictionParams: payload
      };
    case ACTION_TYPES.SET_BUS_PREDICTION_RESULT:
      return {
        ...state,
        busPredictionResult: payload
      };
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
    case ACTION_TYPES.SET_REVENUE_DATA:
      return {
        ...state,
        busRevenue: payload
      };
    default:
      return state;
  }
};

export default busReducer;
