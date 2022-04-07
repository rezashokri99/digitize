import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import {filtersSortTypesReducer, productsReducer} from "./products/productsReducer";

const rootReducer = combineReducers({
    allFiltersState : filtersSortTypesReducer,
    productsState : productsReducer,
    cartState: cartReducer,
})

export default rootReducer;