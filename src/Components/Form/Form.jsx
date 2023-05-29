import React from "react";
import style from "./Forms.module.css"

import button1 from "../../Assets/Icon 1.png"
import button2 from "../../Assets/Icon 1 (1).png"
import subscription from "../../Assets/Icon Clock.png"
import razor from "../../Assets/Razorpay Icon.png"
import { useState } from "react";


export default function Form() {
  const price = [
    {
      id: 1,
      offerExpired: true,
      recommend: false,
      name: "first",
      text: "12 Months Subscription",
      total_rs: 99,
      perMonth_rs: 8
    },
    {
      id: 2,
      offerExpired: false,
      recommend: true,
      name: "second",
      text: "12 Months Subscription",
      total_rs: 179,
      perMonth_rs: 15
    },
    {
      id: 3,
      offerExpired: false,
      recommend: false,
      name: "third",
      text: "6 Months Subscription",
      total_rs: 149,
      perMonth_rs: 25
    },
    {
      id: 4,
      offerExpired: false,
      recommend: false,
      name: "four",
      text: "3 Months Subscription",
      total_rs: 99,
      perMonth_rs: 33
    }
  ];

  const [list, setList] = useState(price);
  const [value, setValue] = useState(149);
  function handleChange(event, el) {
    console.log(event.target.value - event.target.value * 16.7 / 100);
    setValue(Math.floor(event.target.value - event.target.value * 16.7 / 100));
    list.forEach(x => {
      x.recommend = false;
    });
    el.recommend = true;
    setList([...list]);
  }

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.button}>
          <img src={button1} alt="button1" />
          <span>Sign Up</span>
        </div>

        <div className={style.button}>
          <img src={button2} alt="button2" />
          <span>Subscribe</span>
        </div>
      </div>
      <p className={style.plan}>Select your subcription plan</p>
      
      {list.map((el, ind) =>
        <div
          id={style.name}
          className={
            el.recommend
              ? style.recommend
              : el.offerExpired ? style.expire : style.inputBorder
          }
        >
          <label htmlFor={el.id}>
            <div>
              <input
                checked={el.recommend}
                disabled={el.offerExpired}
                onChange={event => handleChange(event, el)}
                id={el.id}
                type="radio"
                value={el.total_rs}
                name="priceOption"
                
              />
              
              <span>
                {el.text}
              </span>
            </div>
            <div className={style.totalRupees}>
              <p className={style.rs}>
                Total <strong> ₹{el.total_rs}</strong>
              </p>
              <span className={style.month}>
              <strong> ₹{el.perMonth_rs}/</strong> <span className={style.mo}>mo</span>
              </span>
            </div>
          </label>
        </div>
      )}
      
     <hr color="black"/>
      <div className={style.expired_flag}>
        <p>Offer expired</p>
      </div>
      <div className={style.recommend_flag}>
        <p>Recommended</p>
      </div>
      
      <div className={style.subscription_Container}>
        <p className={style.subscription}>Subscription Fee</p>
        <p className={style.fee}>₹18,500</p>
      </div>
   
      <div className={style.limited} >
        <div className={style.limited1}>
            <span>Limited time</span>
            <span color="black">-₹18,400</span>
        </div>
        <div className={style.limited2}>
        <img  src={subscription} alt="sub" />
        <span>Offer valid till 25th March 2023</span>
        </div>
      
      </div>
     
      <div className={style.total}>
        <p>
          <span style={{ fontWeight: "600" }}>Total </span>(Incl. of 18% GST)
        </p>
        <p style={{ fontWeight: "600", fontSize: "1.2rem" }}>
          ₹{value}
        </p>
      </div>

      <div className={style.btn}>
        <button className={style.cancel}>CANCEL</button>
        <button
          className={style.pay}
          onClick={() => {
            alert(`You have sucessfully subscribed ₹${value}`);
          }}
        >
          PROCEED TO PAY
        </button>
      </div>
      <div className={style.razorContainer}>
        <img src={razor} alt="razorPay" />
      </div>
    </div>
  );
}