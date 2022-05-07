
import { legacy_createStore as createStore , combineReducers} from "redux";
import { todosReduser } from "./Todos/reducers";

const rootReducer = combineReducers({
    Todos : todosReduser,
    Totos : todosReduser,
    Dotos : todosReduser,
    Login : todosReduser
});


export const store = createStore(rootReducer);

console.log(store);