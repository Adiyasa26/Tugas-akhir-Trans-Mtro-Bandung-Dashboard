import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import busReducer from './bus.reducer';
import dateReducer from './date.reducer';
import searchReducer from './search.reducer';

const reducers = combineReducers({
  currentUser: userReducer,
  selectedBus: busReducer,
  startDate: dateReducer,
  search: searchReducer,
});

export default reducers;
