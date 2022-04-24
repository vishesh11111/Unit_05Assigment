import { useState } from "react";
// import "./css/Frist.css"
import { White, Black } from "./css/style";

export const Second = () => {
  const [data, setData] = useState(true);
  return data ? (
    <White className="main-1">
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
    </White>
  ) : (
    <Black className="main-1">
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
    </Black>
  );
};
