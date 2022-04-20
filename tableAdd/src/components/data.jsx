import { useState } from "react";
import "./css/data.css"
export const DataV = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState(0);
  const [text3, setText3] = useState("");
  // const [text4 ,setText4] = useState("");
  const [text5, setText5] = useState(0);
  // const [text6 ,setText6] = useState("");
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
 console.log(text1);
 console.log(text2);
 console.log(text3);
 console.log(t1);
 console.log(t2);
 console.log(text5);
  const sel2 = () => {
    let a = document.getElementById("select-2").value;
    setT2(a);
  };

  console.log(t1);
  const sel1 = () => {
    let a = document.getElementById("select-1").value;
    setT1(a);
  };

  return (
    <div>
     
      <div className="mai-1">
      <h1>Add Data</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Name.."
          onChange={(e) => {
            setText1(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Age.."
          onChange={(e) => {
            setText2(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Adress"
          onChange={(e) => {
            setText3(e.target.value);
          }}
        />
        <select
          name=""
          id="select-1"
          onClick={sel1}
        >
          <option value="">Select Department</option>
          <option value={"Science"}>Science</option>
          <option value={"Art"}>Art</option>
          <option value={"Commerse"}>Commerse</option>
          <option value={"Biology"}>Biology</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Salary"
          onChange={(e) => {
            setText5(e.target.value);
          }}
        />
        <select
          name=""
          id="select-2"
          onClick={sel2}
         
        >
          <option value="">Select State</option>
          <option value={"Maharasta"}>Maharastra</option>
          <option value={"Hariyana"}>Hariyana</option>
          <option value={"Uttar-Pradesh"}>Uttar Pradesh</option>
          <option value={"Madhya-Pradesh"}>Madhya Pradesh</option>
          <option value={"Tamil"}>TamilNandu</option>
          <option value={"Bengal"}>Bengal</option>
          <option value={"Rajstana"}>Rajsthan</option>
          <option value={"Himanchal"}>Himanchal Pradesh</option>
          <option value={"Panjab"}>Panjab</option>
          {/* <option value=""></option>
                   <option value=""></option>
                   <option value=""></option>
                   <option value=""></option>
                   <option value=""></option>
                   <option value=""></option> */}
        </select>
        <button onClick={() => {
                        const payload = {
                          Name: text1,
                          Age: text2,
                          Address: text3,
                          Department: t1,
                          Salary: text5,
                          State: t2,
                           
                        };
                        fetch("http://localhost:8081/employee",{
                            method : "POST",
                            headers : {
                                "content-type" : "application/json"
                            },
                            body : JSON.stringify(payload)
                        })
                    }}>Submit</button>
      </div>
    </div>
  );
};
