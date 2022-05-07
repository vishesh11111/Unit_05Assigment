import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todos/action";
import { AddLog } from "../Redux/Todos/action";
import { Login } from "./login";

export const Personal = () => {
  const [lohi, setlohin] = useState(false);
  const Todos = useSelector((e) => e.Todos.todos);
  console.log(lohi);

  const navigate = useNavigate();
  const [find1, setfind1] = useState("");
  const [find2, setfind2] = useState("");
  const [find3, setfind3] = useState(false);
  const dispatch = useDispatch();
  
  console.log(lohi);
  // dispatch(AddLog(setlohin));
  const handleAdd = () => {
    const payload = {
      title: find1,
      discription: find2,
      status: find3,
    };

    fetch(` http://localhost:8081/personal`, {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setfind1(""))
      .then(getData);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let data = await fetch(`http://localhost:8081/personal`);
      let res = await data.json();
      // setData(res);
      dispatch(addTodo(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          {"Back"}
        </button>
      </div>
      {/*  */}
      <div className="mn89">
        <div className="mn90">
          <h1>Add Data</h1>
          <input
            className="we-01"
            type="text"
            name=""
            id="l1"
            placeholder="Add Title"
            onChange={(e) => setfind1(e.target.value)}
          />
          <input
            className="we-01"
            type="text"
            name=""
            id="l2"
            placeholder="Add description"
            onChange={(e) => setfind2(e.target.value)}
          />
          <input
            className="we-03"
            type="checkbox"
            name=""
            id="l3"
            onChange={(e) => setfind3(!find3)}
          />
          <label className="we-02" for="vehicle1">
            Sub Task
          </label>
          <button className="btn-2" onClick={handleAdd}>
            Add +
          </button>
        </div>
        {/*  */}
        <div>
          <h1>Show Data</h1>
          {Todos.map((t) => (
            <div className="hy-1" key={t.id}>
              <button
                className="ht-1"
                onClick={() => {
                  navigate(`/personal/${t.id}`, { replace: true });
                }}
              >
                {t.title}
              </button>
              <button
                onClick={() => {
                  setfind3(!t.status);
                  const payload = {
                    title: t.title,
                    discription: t.discription,
                    status: !t.status,
                  };

                  fetch(` http://localhost:8081/personal/${t.id}`, {
                    body: JSON.stringify(payload),
                    headers: {
                      "content-type": "application/json",
                    },
                    method: "PATCH",
                  })
                    .then(() => setfind1(""))
                    .then(getData);
                }}
                className="ht-3"
              >
                {t.status ? "Completed" : "Not Complate"}
              </button>
              <button
                className="ht-2"
                onClick={() => {
                  fetch(` http://localhost:8081/personal/${t.id}`, {
                    headers: {
                      "content-type": "application/json",
                    },
                    method: "DELETE",
                  })
                    .then(() => setfind1(""))
                    .then(getData);
                }}
              >
                {"Delete"}
              </button>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  )
};
