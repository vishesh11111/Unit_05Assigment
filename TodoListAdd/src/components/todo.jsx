import { useState } from "react"
import { TodoInput } from "./todoInput"
import {TodoItem} from "./todoItem"
import {nanoid} from 'nanoid';
import "./todo.css"
// import {handlestatus} from './todoItem';
function Todo() {
    const [TodoList, setTodoList] = useState([{title:"Assigment"}]);
    const getD = (todo) => {
        //    console.log("llllll",todo)
        const payload ={
            title: todo,
            status : false,
            id: nanoid(5),
        }
        setTodoList([...TodoList, payload])
    }


    const handlestatus = (id)=>{
        console.log("id",id);
        setTodoList(
            TodoList.map((e)=>(e.id===id ? {...e, status: !e.status} : e)));
        };
    return (
        <div>
              <div className="main-1">
                {TodoList.map((e) => (
                    <TodoItem handlestatus={handlestatus} todo={e}/>
                )
                )}
            </div>
            <TodoInput getD={getD} />
            {/* Todo List */}
          
        </div>
    )
}



export { Todo}