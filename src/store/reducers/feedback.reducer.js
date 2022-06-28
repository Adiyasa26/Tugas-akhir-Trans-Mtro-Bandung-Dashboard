import { ACTION_TYPES } from '../type';

const INITIAL_STATE = [];


const feedbackReducer= (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case ACTION_TYPES.SET_FEEDBACK_USER:
            return payload
        default:
            return state
    }
}

export default feedbackReducer;