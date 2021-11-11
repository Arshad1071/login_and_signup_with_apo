import currentReducer from "./currentReducer";
import validationRaducer from "./validationRaducer";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
    currentReducer,
    validationRaducer
});

export default rootReducer;