import { createAction } from '../../utils/reducer/reducer.utils';
import { ACTION_TYPES } from '../type';

export const setCurrentUser = payload =>
  createAction(ACTION_TYPES.SET_CURRENT_USER, payload);

export const setUserRole = payload =>
  createAction(ACTION_TYPES.SET_USER_ROLE, payload);

export const setFeedbackUserMap = payload =>
  createAction(ACTION_TYPES.SET_FEEDBACK_USER, payload);  

export const setBusesData = payload =>
  createAction(ACTION_TYPES.SET_BUS_SELECTED, payload);

export const setBusDocument = payload =>
  createAction(ACTION_TYPES.SET_BUS_DOCUMENT, payload);

export const setBusData = payload =>
  createAction(ACTION_TYPES.SET_BUS_DATA, payload);

export const setBusPredictionParams = payload => 
  createAction(ACTION_TYPES.SET_BUS_PREDICTION_PARAMS, payload);

export const setBusPredictionResult = payload => 
  createAction(ACTION_TYPES.SET_BUS_PREDICTION_RESULT, payload);

export const setRevenueData = payload =>
  createAction(ACTION_TYPES.SET_REVENUE_DATA, payload);

export const setStartDate = payload =>
  createAction(ACTION_TYPES.SET_DATE_STARTED, payload);

export const setSearchDate = payload => 
  createAction(ACTION_TYPES.SET_SEARCH_DATE, payload);

export const setSearch = payload =>
  createAction(ACTION_TYPES.SET_SEARCH, payload);

export const setHealthcareData = payload =>
  createAction(ACTION_TYPES.SET_HEALTHCARE_DATA, payload);

export const setPassengersData = payload =>
  createAction(ACTION_TYPES.SET_PASSENGERS_DATA, payload);
