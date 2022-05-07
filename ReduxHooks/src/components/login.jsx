import { AddLog } from "../Redux/Todos/action";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addLogin } from "../Redux/Todos/action";
import { useNavigate } from "react-router-dom";

export const Login = ({pro}) => {
  const [leg, setleg] = useState(0);
  const [leg1, setleg1] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

console.log(pro)
console.log(leg, leg1)

  const handle = async () => {
    try {
      const Get = await fetch(`http://localhost:8081/login`);
      const res = await Get.json();
      console.log(res[0]);
      var g = false;
      var m = 0
      for (let i = 0; i < res.length; i++) {
          console.log(res[i].Number);
          m++;
        if ((res[i].Number == leg) && (res[i].password == leg1)) {
          g = true;
         
          break;
        } else{
            g = false;
        }
    }
    console.log(g);
    if(g){
        dispatch(addLogin(res[m-1]));
        dispatch(AddLog((true)));
        // pro(true)
        pro(true)
        navigate("/", {replace: true});
      }else{
          navigate("/signUp", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="Number"
          name=""
          id="m1"
          placeholder="Enter Mobile Number"
          onChange={(e) => {
            setleg(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id="m2"
          placeholder="Enter password"
          onChange={(e) => {
            setleg1(e.target.value);
          }}
        />
        <button onClick={handle}>submit</button>
      </div>
    </div>
  );
};
