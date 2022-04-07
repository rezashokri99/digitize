import { combineReducers } from "redux";
import {filtersSortTypesReducer, productsReducer} from "./products/productsReducer";

const rootReducer = combineReducers({
    allFiltersState : filtersSortTypesReducer,
    productsState : productsReducer,
})

export default rootReducer;