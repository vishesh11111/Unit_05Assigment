// import moduleName from ".";
import "./Todo.css"
const TodoItem =({todo,handleStatus})=>{
 
    return (
        <div className="main-5">
            <div className="main-3"><input id="inp-1" type="checkbox" onClick={()=>handleStatus([todo.title])}/>
            <h1>{todo.title}</h1>
            </div>
            <p>This Item pushed {Math.floor(Math.random(12)*10)+" Second ago"}</p>
        </div>
        
    )
}

export {TodoItem}