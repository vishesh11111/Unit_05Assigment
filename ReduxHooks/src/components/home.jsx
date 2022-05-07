import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [show, setShow] = useState(true);
  const [sho, setSho] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-1">
        <div>Toggle</div>
        <div>
          <button
            onClick={() => {
              setShow(!show);
              navigate("/login", {replace: true});
            }}
          >
            {show ? "Login" : "LogOut"}
          </button>
        </div>
      </div>
      <div className="main-3">
        <div className="m-1">
          <button
            onClick={() => {
              setSho(!sho);
            }}
          >
            {" "}
            Add Todos +{" "}
          </button>
        </div>
        <div>{sho ? <AddTodo/> : null}</div>
      </div>
    </div>
  );
};
