const initialState = false;

const darkModeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CHANGE":
            return !state;
    
        default:
            return state;
    }
}

export default darkModeReducer;