//      All imports
import { combineReducers } from "redux";
import { cart } from "./reducers";

//      Combine All the reducers
const rootReducers = combineReducers({
    cart,
})

export default rootReducers;