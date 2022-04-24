import "./css/Second.css";
import { useState } from "react";
import { Whit, Blac } from "./css/style1";

export const Frist = () => {
  const [data, setData] = useState(false);
  return data ? (
    <Whit className="main-1">
      <button
        onClick={() => {
          setData(false);
        }}
      ></button>
      <button
        onClick={() => {
          setData(true);
        }}
      ></button>
      <div>
        <h2>About Me</h2>
        <p>This Is Vishesh Here</p>
        <p>"From Masai School student"</p>
      </div>
    </Whit>
  ) : (
    <Blac className="main-1">
      <button
        onClick={() => {
          setData(false);
        }}
      ></button>
      <button
        onClick={() => {
          setData(true);
        }}
      ></button>
      <div>
        <h2>About Me</h2>
        <p>This Is Vishesh Here</p>
        <p>"From Masai School student"</p>
      </div>
    </Blac>
  );
};
