import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import feedbackReducer from './feedback.reducer';
import busReducer from './bus.reducer';
import dateReducer from './date.reducer';
import searchReducer from './search.reducer';
import passengersReducer from './passengers.reducer'

const reducers = combineReducers({
  currentUser: userReducer,
  feedbackUser: feedbackReducer,
  busesData: busReducer,
  startDate: dateReducer,
  search: searchReducer,
  passengersData: passengersReducer
});

export default reducers;
