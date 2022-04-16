import { useEffect, useState } from "react";
import "./SetTimer.css"

export const SetTimer = () => {
  const [second, setSecond] = useState(59);
  const [Minutes, setMinuts] = useState(4);
  const [show, setshow] = useState(false)

  
    var timer;
    useEffect(() => {
      if(show){
      timer = setInterval(() => {
        setSecond(Math.abs(second - 1));
        if (second == 0) {
          setMinuts(Minutes - 1);
          setSecond(59);
        }
      }, 1000);
    }
      return () => clearInterval(timer);
    });
  


  return (
    <div className="timer">
      <div className="container">
        <div className="timer-container">
          <h1>SetTimer</h1>
          <h1>
            {Minutes < 10 ? "0" + Minutes : Minutes}:
            {second < 10 ? "0" + second : second}
          </h1>
          <button onClick={()=>{
            setshow(true)
          }}>start</button>
          <button className="restart" onClick={()=>{
              setMinuts(4);
              setSecond(59);
             
          }}>
            Restart
          </button>
          <button className="stop" onClick={()=>{
              clearInterval(timer);
              setshow(false)
          }}>
            stop
          </button>
        </div>
      </div>
    </div>
  );
};
