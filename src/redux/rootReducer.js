import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import darkModeReducer from "./darkMode/darkModeReducer";
import {filtersSortTypesReducer, productsReducer} from "./products/productsReducer";

const rootReducer = combineReducers({
    darkModeState: darkModeReducer,
    allFiltersState : filtersSortTypesReducer,
    productsState : productsReducer,
    cartState: cartReducer,
})

export default rootReducer;