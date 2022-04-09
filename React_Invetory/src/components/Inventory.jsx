import { useState } from "react";

export const Inventory = () => {
  const [counter, setCounter] = useState(10);
  const [counte, setCounte] = useState(13);
  const [count, setCount] = useState(13);
  const [inv, setInv] = useState({
    books: counter,
    notebooks: counte,
    pens: count,
  });

  let handleAdd = ()=>{
    setCounter(counter+1);
  }
  let handleSub = ()=>{
    if(counter<=0) return;
    setCounter(counter-1)
  }
  let handleAdd1 = ()=>{
    setCounte(counte+1);
  }
  let handleSub1 = ()=>{
    if(counte<=0) return;
    setCounte(counte-1)
  }
  let handleAdd2 = ()=>{
    setCount(count+1);
  }
  let handleSub2 = ()=>{
    if(count<=0) return;
    setCount(count-1)
  }
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={handleAdd}>+</button>
        <button className="circlularButton" onClick={handleSub}>-</button>
        <span>{counter}</span>
        {/* {inv.books} */}
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={handleAdd1}>+</button>
        <button className="circlularButton"  onClick={handleSub1}>-</button>
        <span>{counte}</span>
        {/* {inv.notebooks} */}
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={handleAdd2}>+</button>
        <button className="circlularButton" onClick={handleSub2}>-</button>
        <span>{count}</span>
        {/* {inv.pens} */}
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {counter+counte+count}
    </div>
  );
};
