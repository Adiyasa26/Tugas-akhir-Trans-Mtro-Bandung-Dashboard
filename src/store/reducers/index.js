import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import feedbackReducer from './feedback.reducer';
import busReducer from './bus.reducer';
import dateReducer from './date.reducer';
import searchDateReducer from './searchDate.reducer';
import searchReducer from './search.reducer';
import passengersReducer from './passengers.reducer'

const reducers = combineReducers({
  userData: userReducer,
  feedbackUser: feedbackReducer,
  busesData: busReducer,
  startDate: dateReducer,
  searchDate: searchDateReducer,
  search: searchReducer,
  passengersData: passengersReducer
});

export default reducers;
