import { createAction } from '../../utils/reducer/reducer.utils';
import { ACTION_TYPES } from '../type';

export const setCurrentUser = payload =>
  createAction(ACTION_TYPES.SET_CURRENT_USER, payload);

export const setFeedbackUserMap = payload =>
  createAction(ACTION_TYPES.SET_FEEDBACK_USER, payload);  

export const setSelectedBus = payload =>
  createAction(ACTION_TYPES.SET_BUS_SELECTED, payload);

export const setStartDate = payload =>
  createAction(ACTION_TYPES.SET_DATE_STARTED, payload);

export const setSearch = payload =>
  createAction(ACTION_TYPES.SET_SEARCH, payload);
