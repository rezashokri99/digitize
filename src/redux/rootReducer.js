import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import darkModeReducer from "./darkMode/darkModeReducer";
import {filtersSortTypesReducer, productsReducer} from "./products/productsReducer";

const rootReducer = combineReducers({
    allFiltersState : filtersSortTypesReducer,
    productsState : productsReducer,
    cartState: cartReducer,
    darkModeState: darkModeReducer
})

export default rootReducer;