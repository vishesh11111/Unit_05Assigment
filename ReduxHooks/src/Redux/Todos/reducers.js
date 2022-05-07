import { Add_Me, Add_Todo } from "./action";
import { Add_tod } from "./action";
import { Login } from "./action";
import { Set } from "./action";

const init = {
  todos: [],
  totos: [],
  dotos: [],
  logi : [],
  rseed : ""
};

export const todosReduser = (store = init, { type, payload }) => {
  switch (type) {
    case Add_Todo:
      return { ...store, todos: payload };
    case Add_tod:
      return { ...store, totos: payload };
    case Add_Me:
      return { ...store, dotos: payload };
    case Login:
      return { ...store, logi: payload};
      case Set:
        return { ...store, payload};
    default:
      return store;
  }
};
