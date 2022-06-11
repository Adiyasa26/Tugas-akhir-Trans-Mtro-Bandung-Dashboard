import { ACTION_TYPES } from '../type';

const INITIAL_STATE = null


const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return payload
    default:
      return state;
  }
};

export default userReducer;
