import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import {nanoid} from 'nanoid';
import "./Todo.css"
const Todo = ()=>{
    const [take, takeData] = useState([]);
    const [TodoList, SetTodoList] = useState([{title: "Milk"},{title : "bread"}])
    const getFromData = (todo)=>{
        const ObjData = {
            title : todo,
            price : Math.random(10),
            id : nanoid(5)
        }
        SetTodoList([...TodoList,ObjData]);
    }
// console.log(take)
    const handleStatus = (id) =>{
        // findMe(id)
        // console.log(id);
        takeData({id})
        SetTodoList(
            TodoList.map((e)=>(e.id===id ? {...e, status: !e.status} : e)));
    };
    
    return (
        <div className="main-1">
            <TodoInput getFromData={getFromData}/>
            {TodoList.map((e)=>(
                <TodoItem handleStatus={handleStatus} todo = {e} />
            ))}
            <div className="h-1"><h>Show COMPLETED TO-DOS</h></div>
            <div className="m-1"><input type="checkbox" /><h>{take.id}</h></div>
        </div>
    
    );
}

export {Todo};