import { useState, useEffect } from "react";

export const StopWatch = () => {
  const [hours, sethours] = useState(0);
  const [Minutes, setMinuts] = useState(0);
  const [second, setSecond] = useState(0);
  const [show, setshow] = useState(false);

  var timer;
  useEffect(() => {
    if (show) {
      timer = setInterval(() => {
        setSecond(second + 1);
        if (second == 59) {
          setMinuts(Minutes + 1);
          setSecond(0);
        }
        if (Minutes == 59) {
          sethours(hours + 1);
          setMinuts(0);
        }
      }, 30);
    }
    return () => clearInterval(timer);
  });

  return (
    <div>
      <div>
        <div>
          <h1>Stop Watch</h1>
          <h2 className="head">
            {hours < 10 ? "0" + hours : hours}:
            {Minutes < 10 ? "0" + Minutes : Minutes}:
            {second < 10 ? "0" + second : second}
          </h2>
          <button
            onClick={() => {
              setshow(true);
            }}
          >
            Start
          </button>
          <button
            onClick={() => {
              clearInterval(timer);
              setshow(false);
            }}
          >
            Stop
          </button>
          <button onClick={()=>{
              sethours(0)
              setMinuts(0)
              setSecond(0)
              setshow(0)
          }}>Resume</button>
        </div>
      </div>
    </div>
  );
};
