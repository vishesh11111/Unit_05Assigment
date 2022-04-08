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
    <div className="main">
      <div className="main-1">
        <div>LOGOBAKERY</div>
      </div>
      <div className="main-2">
        <a href="">Services</a>
        <a href="https://github.com/vishesh11111/Unit_05Assigment/tree/main/Mobile_os">Project</a>
        <a href="">About</a>
      </div>
      <div className="main-3">
        <button className="btn">Contact</button>
      </div>
    </div>
  );
}

function SKILL(){
  return <p>Skil: Windows</p>
}

export default App;
