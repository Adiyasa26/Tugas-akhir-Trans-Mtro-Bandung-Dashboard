const initialState = {
    busNumber: 1,
    destination: '',
    stopTime: '',
    stopLocation: '',
    isSelected: false,
    data: []
}

const selectedBus = (state = initialState, action) => {
    switch(action.type) {
        case 'BUS_SELECTED':
            return action.payload
        default:
            return state
    }
}

export default selectedBus;