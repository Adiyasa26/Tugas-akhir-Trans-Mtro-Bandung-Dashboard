const initialState = new Date()

const startDate = (state = initialState, action) => {
    switch(action.type) {
        case 'DATE_STARTED':
            return action.payload
        default:
            return state
    }
}

export default startDate;