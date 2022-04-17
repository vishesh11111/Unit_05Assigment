import React from "react";
import "./css/payment.css";

export const Payment = ({ chnageModel, data }) => {
  // console.log(data.map((f)=>));
  console.log(data);
  return (
    <div className="modelBackground">
      <div className="modelContainer">
        <button
          className="btn-1"
          onClick={() => {
            chnageModel(false);
          }}
        >
          {" "}
          X{" "}
        </button>
        <div className="Title">
          <h1> Payment </h1>
          <div className="main01">
            <p className="p21">{data.name}</p>
            <p className="price21">Total : {data.price}₹</p>
          </div>
          <select name="" id="">
            <option value="">Select Card Type</option>
            <option value="">Credit Card</option>
            <option value="">Debit Card</option>
          </select>
          <input
            type="select"
            name=""
            id=""
            placeholder="Enter card number..."
          />
          <input type="date" name="" id="" placeholder="Enter card date..." />
          <input
            type="cvv"
            name=""
            id=""
            placeholder="Enter card cvv number..."
          />
        </div>
        <div className="body">
            <div className="img-01">
                <img src="https://iconape.com/wp-content/uploads/1/12/google-pay-logo-0%D9%A2.png" alt="" />
                <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="" />
            </div>
        </div>
        <div className="footer">
          <button
            className="btn-2"
            onClick={() => {
              chnageModel(false);
            }}
          >
            Cencel
          </button>
          <button className="btn-3">Continue</button>
        </div>
      </div>
    </div>
  );
};
