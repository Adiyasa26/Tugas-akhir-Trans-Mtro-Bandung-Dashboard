import { ACTION_TYPES } from '../type';

const INITIAL_STATE = new Date()


const dateReducer= (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case ACTION_TYPES.SET_DATE_STARTED:
            return payload
        default:
            return state
    }
}

export default dateReducer;