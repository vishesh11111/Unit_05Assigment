import { Add_Todo, Check, Dlt } from "./action";
import { Toggle } from "./action";

const init = {
    todos : [],
};

export const TodoReducer = (store = init, {type, payload})=>{
 switch (type){
     case Add_Todo:
         return {...store, todos: payload};
         case Toggle :
             return {
                 ...store, todos : store.todos.map((todo)=>
                 todo.id ===payload ? {...todo, status : !todo.status} : todo)
             }
             case Check :
                 return {
                       ...store, payload : payload
                 }
                 case Dlt :
                     return {
                         ...store, todos: store.todos.filter((e)=> e.id !==payload)
                     }
         default:
             return store;
        }
 }   