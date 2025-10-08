import React from "react";
import "./section5.css";
import rec from "../../../assets/images/Rectangle (2).png";

function Section5() {
  return (
    <div>
      <section className="header">
        <div className="img">
          <img src={rec} alt="" />
        </div>
        <div className="text">
          <h3>
            <span>Checkout</span>
          </h3>
          <br />
          <h1>When you done check out <br /> and get it delivered.</h1>
          <br />
          <p>When you done check out and get it <br /> delivered with ease.</p>
        </div>
      </section>
      ;
    </div>
  );
}

export default Section5;
