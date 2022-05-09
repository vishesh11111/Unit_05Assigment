import { useEffect, useState } from "react";
import "../css/products.css";

export const Product1 = () => {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  // console.log(data1[0].name);
  console.log(count);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const data = await fetch(`http://localhost:8080/belts`);
      const res = await data.json();
      // console.log(res);
      setdata(res[0].first);
      setdata1(res[1].second);
      setdata2(res[2].third);
      setdata3(res[3].four);
      setdata4(res[4].five);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="h12">Belts</h1>
      <div className="mni-1">
        {/*  */}
        {/*  */}
        <div className="gh-1">
          {data.map((e) => (
            <div className="nh-1">
              <img src={data[count].image} alt="" />
              <p>{e.qty}</p>
              <p>{data[count].name}</p>
              <p>₹ {e.price}</p>
              <p>{e.name}</p>
              <button className="by-1">Buy Now</button>
              <button
                className="by-2"
                onClick={() => {
                  const payload = {
                    id: e.id,
                    image: e.image,
                    name: e.name,
                    qty: e.qty,
                    price: e.price,
                    color: e.color,
                  };
                  fetch(`http://localhost:8080/cart`,{
                    method : "POST",
                    headers : {
                      "content-type": "application/json",
                    },
                    body : JSON.stringify(payload)
                  });
                }}
              >
                Add To Cart
              </button>
              <div className="mn9">
                <div
                  className="mnu-1"
                  value="lm"
                  onClick={() => {
                    setCount(0);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount(1);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount(2);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount(3);
                  }}
                ></div>
              </div>
            </div>
          ))}
          ;
        </div>
        {/*  */}
        <div className="gh-1">
          {data.map((e) => (
            <div className="nh-1">
              <img src={data1[count1].image} alt="" />
              <p>{e.qty}</p>
              <p>{data[count1].name}</p>
              <p>₹ {e.price}</p>
              <p>{e.name}</p>
              <button className="by-1">Buy Now</button>
              <button className="by-2" onClick={() => {
                  const payload = {
                    id: e.id,
                    image: e.image,
                    name: e.name,
                    qty: e.qty,
                    price: e.price,
                    color: e.color,
                  };
                  fetch(`http://localhost:8080/cart`,{
                    method : "POST",
                    headers : {
                      "content-type": "application/json",
                    },
                    body : JSON.stringify(payload)
                  });
                }}>Add To Cart</button>
              <div className="mn9">
                <div
                  className="mnu-1"
                  value="lm"
                  onClick={() => {
                    setCount1(0);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount1(1);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount1(2);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount1(3);
                  }}
                ></div>
              </div>
            </div>
          ))}
          ;
        </div>
        {/*  */}
        <div className="gh-1">
          {data.map((e) => (
            <div className="nh-1">
              <img src={data2[count2].image} alt="" />
              <p>{e.qty}</p>
              <p>{data[count].name}</p>
              <p>₹ {e.price}</p>
              <p>{e.name}</p>
              <button className="by-1">Buy Now</button>
              <button className="by-2" onClick={() => {
                  const payload = {
                    id: e.id,
                    image: e.image,
                    name: e.name,
                    qty: e.qty,
                    price: e.price,
                    color: e.color,
                  };
                  fetch(`http://localhost:8080/cart`,{
                    method : "POST",
                    headers : {
                      "content-type": "application/json",
                    },
                    body : JSON.stringify(payload)
                  });
                }}>Add To Cart</button>
              <div className="mn9">
                <div
                  className="mnu-1"
                  value="lm"
                  onClick={() => {
                    setCount2(0);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount2(1);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount2(2);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount2(3);
                  }}
                ></div>
              </div>
            </div>
          ))}
          ;
        </div>
        {/*  */}
        <div className="gh-1">
          {data.map((e) => (
            <div className="nh-1">
              <img src={data3[count3].image} alt="" />
              <p>{e.qty}</p>
              <p>{data[count3].name}</p>
              <p>₹ {e.price}</p>
              <p>{e.name}</p>
              <button className="by-1">Buy Now</button>
              <button className="by-2" onClick={() => {
                  const payload = {
                    id: e.id,
                    image: data[count3].image,
                    name: e.name,
                    qty: e.qty,
                    price: e.price,
                    color: e.color,
                  };
                  fetch(`http://localhost:8080/cart`,{
                    method : "POST",
                    headers : {
                      "content-type": "application/json",
                    },
                    body : JSON.stringify(payload)
                  });
                }}>Add To Cart</button>
              <div className="mn9">
                <div
                  className="mnu-1"
                  value="lm"
                  onClick={() => {
                    setCount3(0);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount3(1);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount3(2);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount3(3);
                  }}
                ></div>
              </div>
            </div>
          ))}
          ;
        </div>
        {/*  */}
        <div className="gh-1">
          {data.map((e) => (
            <div className="nh-1">
              <img src={data4[count4].image} alt="" />
              <p>{e.qty}</p>
              <p>{data[count].name}</p>
              <p>₹ {e.price}</p>
              <p>{e.name}</p>
              <button className="by-1">Buy Now</button>
              <button className="by-2" onClick={() => {
                  const payload = {
                    id: e.id,
                    image: e.image,
                    name: e.name,
                    qty: e.qty,
                    price: e.price,
                    color: e.color,
                  };
                  fetch(`http://localhost:8080/cart`,{
                    method : "POST",
                    headers : {
                      "content-type": "application/json",
                    },
                    body : JSON.stringify(payload)
                  });
                }}>Add To Cart</button>
              <div className="mn9">
                <div
                  className="mnu-1"
                  value="lm"
                  onClick={() => {
                    setCount4(0);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount4(1);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount4(2);
                  }}
                ></div>
                <div
                  className="mnu-1"
                  onClick={() => {
                    setCount4(3);
                  }}
                ></div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
};
