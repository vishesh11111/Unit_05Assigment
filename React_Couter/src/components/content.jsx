import { useState } from "react";
import "./content.css"
export const Inventory = ()=>{
    const [counter, setCounter] = useState(0);
    const addNumber = ()=>{
        setCounter(counter+1)
    }
    const SubNumber = ()=>{
        if(counter==0) return
        setCounter(counter-1)
    }
    const DubNumber = ()=>{
        setCounter(counter*2)
    }
    const ClearNumber = ()=>{
        setCounter(counter*0)
    }
    return (
        <div className = "main">
            <h1 className={`${counter % 2 ===0 ? "even" : "odd"}`}>{counter}</h1>
            <button onClick={addNumber}>+</button>
            <button onClick={DubNumber}>Double</button>
            <button onClick={SubNumber}>-</button>
            <button onClick={ClearNumber}>Clear</button>
        </div>
    )
}

