import logo from "./logo.svg";
import "./App.css";

function App() {
  // <div>
  //   <h1>Vishesh</h1>
  //   <button>serach</button>
  // </div>
  const name = "Visehs";
  const age = 23;
  const skill = ["Android", "BlackBerry", "iPhone", "Windows Phone"];
  const compnies = ["Sumsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="">
      <p className="main">
        Mobile Operating System:
        {skill.map((e) => {
          return <li className="main-1">{e}</li>;
        })}
      </p>
      {/* <SKILL /> */}
      <p className="main">
        Mobile Manufaturers:
        {compnies.map((e) => {
          return <li className="main-1">{e}</li>;
        })}
      </p>
    </div>
  );
}

function SKILL(){
  return <p>Skil: Windows</p>
}

export default App;
