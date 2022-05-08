
export const Add_Todo = "ADD_TODOS";
export const Toggle = "TOGGLE";
export const Check = "Check";
export const Dlt = "Dlt";

export const useTODO = (data)=>({
    type: Add_Todo,
    payload : data,
});

export const Togglem = (id) =>{
    return {
        type : Toggle,
        payload : id,
    }
} 

export const CheckAdd = (d)=>{
    return {
        type :Check,
        payload : d,
    }
}

export const DeleteTdo = (id)=>{
    return {
        type : Dlt,
        payload : id
    }
}