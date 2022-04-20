// import logo from './logo.svg';
// import styled from "styled-components";
import "./App.css";
import { Button, Buttn , Buton } from "./components/button";

function App() {
  return (
    <div className="App">
      <Buton children={"Primary Button Button"} onClick={()=>{

alert("Primary Button")
}}/>
      <Button children={"Default Button"} onClick={()=>{

alert("Default Button")
}}/>
      {/* <Button children={"Dashed Button"} /> */}
      <Button onClick={()=>{

        alert("Dashed Button")
      }}>Dashed Button</Button>
      <Button onClick={()=>{

        alert("Text Button")
      }}>Text Button</Button>
      {/* <Button children= {"Text Button"}/> */}
      <Buttn children={"Link Button"} onClick={()=>{

alert("Link Button")
}}/>
    </div>
  );
}

export default App;
