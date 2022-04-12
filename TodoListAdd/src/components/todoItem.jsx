import "./todoItem.css";
export const TodoItem = ({todo, handlestatus})=>{
    return <div className="main-1">
        <div className="find">
        <div className="main-2">{todo.title}{" : "}{todo.status ? "Done" : "Not Done"}</div>
    <button className="btn-1" onClick={()=> handlestatus(todo.id)}>◉</button>
    </div>
    </div>
}