import { useEffect, useState } from "react";
import "./css/food.css";
import { Payment } from "./payment";
import { Form } from "./form";

export const Food = () => {
  const [food, setfood] = useState([]);
  const [cout, setCout] = useState(1);
  const [loading, setloading] = useState(true);
  const [openModel, setOpenModel] = useState(false);
  const [data, setData] = useState("");
  const [form, setForm] = useState(false);
  const [prev, setprev] = useState(1);

  function mydata(){
    let a = document.getElementById("select-2").value;
    if (a == "high") {
      setfood("");
      let newfood = [...food].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setfood(newfood);
    //   console.log(newfood);

    } else if (a == "low") {
      setfood("");
      let newfood = [...food].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setfood(newfood);
    //   console.log(newfood);
    }
  }

  const hight = () => {
    let a = document.getElementById("select-1").value;
    if (a == "high") {
      setfood("");
      let newfood = [...food].sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
      );
      setfood(newfood);
    //   console.log(newfood);

    } else if (a == "low") {
      setfood("");
      let newfood = [...food].sort(
        (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
      );
      setfood(newfood);
    //   console.log(newfood);
    }
  };
  useEffect(() => {
    foodData();
  }, [prev]);

  // console.log(food);
  function method() {
    setOpenModel(true);
  }

  function meth() {
    setForm(true);
  }

  useEffect(() => {
    foodData();
  }, []);

  const foodData = async () => {
    let data = await fetch(`http://localhost:8080/food?_page=${prev}&_limit=5`); //?_page=${prev}&_limit=5
    let res = await data.json();
    setfood(res);
    // console.log(res);
    setloading(false);
  };
  // foodData();
console.log(food);
  return loading ? <div className="img-091"><img  src="https://i.stack.imgur.com/ATB3o.gif" alt="" /></div> :(
    <div>
      <div className="m-09">
        <div className="short">
          <select name="" id="select-1" onClick={hight}>
            <option value="">Sort by Rating</option>
            <option value="high">High To low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
        <div>
          <select name="" id="select-2" onClick={mydata}>
            <option value="">Sort by Price</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
        <div>
          <button onClick={meth}>SetFood Details</button>
        </div>
      </div>

      <div className="main">
        {food.map((f) => (
          <div
            className="fin-1"
            onClick={() => {
              setData("");
              setCout(cout + 1);
              setData(f);
            }}
          >
            <div className="main-1">
              <div className="main-2">
                <img src={f.imge} alt="" />
              </div>
              <div className="main-3">
                <div className="m-1">
                  <h2>{f.name}</h2>
                  <p>{f.type}</p>
                  <p>{f.price + "₹"}</p>
                  <p>Accept Online Payment only</p>
                </div>
                <div className="m-2">
                  <p className="p21">{f.rating + "*"}</p>
                  <p1>votes</p1>
                  <p>{cout}</p>
                </div>
              </div>
            </div>
            <div className="m-3">
              <div></div>
              <button onClick={method} className="g12">
                {"Order Online >"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {form && <Form d={setForm} />}
      {openModel && <Payment chnageModel={setOpenModel} data={data} />}
      <div className="e12">
        <button
          onClick={() => {
            setprev(prev - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setprev(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setprev(prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
