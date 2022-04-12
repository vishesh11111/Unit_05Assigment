import { useState } from "react";
import "./todoInput.css"

const TodoInput = ({getD})=>{

    const [text, setText] = useState("");
    function getData(e){
        console.log(e.target.value);
        setText(e.target.value);
    }
    return (
        <div>
            <input onChange={getData} type="text"
             placeholder="Enter Notes Title" />
            <button onClick={()=>{
                getD(text)
            }}>+</button>
            {/* Todo List */}
            {/* {text} */}
        </div>
    )
}

export {TodoInput};