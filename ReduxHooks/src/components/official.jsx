import { useNavigate } from "react-router-dom";
import { addData } from "../Redux/Todos/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Official = () => {
  const [frst1, setfrst1] = useState("");
  const [frst2, setfrst2] = useState("");
  const [frst3, setfrst3] = useState(false);
  const dat = useSelector((e) => e.Totos.totos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AddData = () => {
    const payload = {
      title: frst1,
      discription: frst2,
      status: frst3,
    };
    fetch(`http://localhost:8081/official`, {
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then(() => setfrst1(""))
      .then(GetData);
  };

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      let data = await fetch(`http://localhost:8081/official`);
      let res = await data.json();
      dispatch(addData(res));
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
      <div className="mn89">
        <div className="mn90">
          <h1>Add Data</h1>
          <input
            className="we-01"
            type="text"
            name=""
            id=""
            placeholder="Add Title"
            onChange={(e) => {
              setfrst1(e.target.value);
            }}
          />
          <input
            className="we-01"
            type="text"
            name=""
            id=""
            placeholder="Add description"
            onChange={(e) => {
              setfrst2(e.target.value);
            }}
          />
          <input
            className="we-03"
            type="checkbox"
            name=""
            id=""
            onChange={(e) => {
              setfrst3(!frst3);
            }}
          />
          <label className="we-02" for="vehicle1">
            Sub Task
          </label>
          <button className="btn-2" onClick={AddData}>
            Add +
          </button>
        </div>
        {/*  */}
        <div>
          <h1>Show Data</h1>
          {dat.map((t) => (
            <div className="hy-1">
              <button
                className="ht-1"
                onClick={() => {
                  navigate(`/official/${t.id}`, { replace: true });
                }}
              >
                {t.title}
              </button>
              <button
                className="ht-3"
                onClick={() => {
                  setfrst3(!t.status);
                  const payload = {
                    title: t.title,
                    discription: t.discription,
                    status: !t.status,
                  };

                  fetch(` http://localhost:8081/official/${t.id}`, {
                    body: JSON.stringify(payload),
                    headers: {
                      "content-type": "application/json",
                    },
                    method: "PATCH",
                  })
                    .then(() => setfrst1(""))
                    .then(GetData);
                }}
              >
                {t.status ? "Completed" : "Not Completed"}
              </button>
              <button
                className="ht-2"
                onClick={() => {
                  fetch(` http://localhost:8081/official/${t.id}`, {
                    headers: {
                      "content-type": "application/json",
                    },
                    method: "DELETE",
                  })
                    .then(() => setfrst1(""))
                    .then(GetData);
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
  );
};
