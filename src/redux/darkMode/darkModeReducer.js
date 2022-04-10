const initialState = {
    darkMode: false
};

const darkModeReducer = (state=initialState, action) => {
    switch (action.type) {
        case "LIGHT_MODE":
            return {
                darkMode: false
            };
        case "DARK_MODE":
            return {
                darkMode: true
            };
    
        default:
            return state;
    }
}

export default darkModeReducer;