import { ACTION_TYPES } from '../type';

const INITIAL_STATE = '';

const searchDateReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_SEARCH_DATE:
      return payload;
    default:
      return state;
  }
};

export default searchDateReducer;
