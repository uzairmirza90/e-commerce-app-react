//      All imports
import { createStore } from "redux";
import rootReducers from "./index";
import { persistedState } from "./reducers";

//      Create Store with All Reducers
const store = createStore(rootReducers, persistedState)

//      Subscribe to the store to get Persisted state from local storage
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;