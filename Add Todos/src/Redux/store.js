import { combineReducers, legacy_createStore as createStore} from "redux";
import {TodoReducer} from "./Todos/reducer";

const rootReducer = combineReducers({
    Todos : TodoReducer,
});



export const store = createStore(rootReducer);