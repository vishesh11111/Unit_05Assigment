// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [mesege, setmesege] = useState("");
  // const data = "hellolo";
  function setchange(data) {
    console.log(data, "Hii!");
    setmesege(data);
  }
  return (
    <div className="App">
      {/*<First data={data}/>*/} {/*>>> give data As a object */}
      <First find={setchange} />
      <Second mesege = {mesege}/>
    </div>
  );
}

function First({ find }) {
  // if take only data- then will give object other {data} mean key value give
  let data = "hello Vishesh";
  // console.log("recived:","findMe:",data);
  return <div>First,{data}
  <button onClick={()=>{
  find(data);

  }}>hii</button>
  </div>;
}

function Second({mesege}) {
  console.log("hello!",mesege);
  return <div>Second,{mesege}</div>;
}

export default App;
