
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PersonalDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tofo, setTodo] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(`http://localhost:8081/personal/${id}`);
      const res = await data.json();
      setTodo(res);
    } catch {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate("/personal", { replace: true });
          }}
        >
          Back
        </button>
      </div>
      <div>
        <h1>Task :-</h1>
        <p>{tofo.title}</p>
        <h1>Description</h1>
        <textarea value={tofo.discription} name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button>{tofo.status ? "Completed" : "Not Completed"}</button>
    </div>
  );
};
