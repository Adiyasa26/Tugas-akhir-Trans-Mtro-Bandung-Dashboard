import {combineReducers} from "redux";

import selectedBus from './selectedBus';
import startDate from './startDate'
import search from './search'
 
const reducers = combineReducers({
    selectedBus,
    startDate,
    search
})

export default reducers