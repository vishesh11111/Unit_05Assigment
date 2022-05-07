
export const Add_Todo = "ADD_TODO";
export const Add_tod = "ADD_TOTO"
export const Add_Me = "Add_ToKO";
export const Login = "Login";
export const Set = "Set";

export const addTodo = (data)=>({
    type : Add_Todo,
    payload : data,
});


export const addData = (data) =>({
    type : Add_tod,
    payload : data,
});

export const addToko = (data) =>({
    type : Add_Me,
    payload : data,
});

export const addLogin = (data) =>({
    type : Login,
    payload : data,
});

export const AddLog = (data)=>({
    type : Set,
    payload : data,
})
