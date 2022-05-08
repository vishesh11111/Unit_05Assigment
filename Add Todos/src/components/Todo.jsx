import { useTODO } from "../Redux/Todos/action";
import { store } from "../Redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Togglem } from "../Redux/Todos/action";
import { Link } from "react-router-dom";
import { CheckAdd } from "../Redux/Todos/action";
import { DeleteTdo } from "../Redux/Todos/action";

export const Todos = () => {
  const Todod = useSelector((e) => e.Todos.todos);
  const [ch, setch] = useState(false);
  const [df, setdf] = useState("");
  const dispatch = useDispatch();

  dispatch(CheckAdd(setch));
  console.log("all check", ch);
  const handleTodo = () => {
    const payload = {
      title: df,
      status: false,
    };
    fetch(`http://localhost:8080/Todos`, {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setdf(""))
      .then(getData);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let data = await fetch(`http://localhost:8080/Todos`);
      let res = await data.json();
      dispatch(useTODO(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setdf(e.target.value)}
        />
        <button onClick={handleTodo}>Add Todos+</button>
      </div>
      <div>
        {Todod.map((t) => (
          <div className="my">
            <Link to={`/todos/${t.id}`}><p>{t.title}</p></Link>
            <button
              onClick={() => {
                dispatch(Togglem(t.id));
              }}
            >
              {t.status ? "Complted" : "Not Done"}
            </button>
            <button
              onClick={() => {
                dispatch(DeleteTdo(t.id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
