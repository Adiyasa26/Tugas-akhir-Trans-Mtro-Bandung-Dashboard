export const selectedBus = (payload) => {
    return(dispatch) => {
        dispatch({
            type: 'BUS_SELECTED',
            payload: payload
        });
    }
}

export const startDate = (payload) => {
    return(dispatch) => {
        dispatch({
            type: 'DATE_STARTED',
            payload: payload
        });
    }
}

export const search = (payload) => {
    return(dispatch) => {
        dispatch({
            type: 'SEARCH',
            payload: payload
        });
    }
}