import { ACTION_TYPES } from '../type';

const INITIAL_STATE = ''

const searchReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case ACTION_TYPES.SET_SEARCH:
            return payload
        default:
            return state
    }
}

export default searchReducer;