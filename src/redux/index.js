import { combineReducers } from "redux";
import { managerReducer } from "./managerReducer";

const reducers = combineReducers({
    manager : managerReducer
});

export default reducers;