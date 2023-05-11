import { combineReducers, createStore } from "redux";
import { DarkModeReducer } from "./Reducers/DarkModeReducer";

const AllReducers = combineReducers({
    modeReducer: DarkModeReducer
})


const store = createStore(AllReducers)



export default store