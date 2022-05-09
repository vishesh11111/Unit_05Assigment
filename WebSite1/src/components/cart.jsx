import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import "../css/products.css";

export const Cart = () => {
  const [data, setdata] = useState([]);


  // console.log(data1[0].name);
  console.log(data);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const data = await fetch(`http://localhost:8080/cart`);
      const res = await data.json();
      // console.log(res);
      setdata(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>
      <h1 className="h12">Belts</h1>
      <div className="mni-1">
        {/*  */}
        {/*  */}
        <div className="gh-2">
          {data.map((e) => (
            <div className="nh-2">
              <img src={e.image} alt="" />
              <p>{e.qty}</p>
              <p>{e.name}</p>
              <p>₹ {e.price}</p>
              <p>{e.name}</p>
              <button className="by-1">Buy Now</button>
              <button className="by-2">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
