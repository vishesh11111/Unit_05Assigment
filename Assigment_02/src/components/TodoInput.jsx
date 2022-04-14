import { useState } from "react";
import "./Todo.css"

const TodoInput =({getFromData})=>{
const [text, setText] = useState("");
function getData (e){
    setText(e.target.value);
}

    return (
        <div className="main-2">
            <button className="btn-1" onClick={()=>{
                getFromData(text)
            }}>+</button>
            <input className="input-1" type="text" placeholder="Add To- Do"
            onChange={getData}/>
        </div>
    )
}
export {TodoInput};