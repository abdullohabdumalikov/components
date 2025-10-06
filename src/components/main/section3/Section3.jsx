import React from "react";
import "./section3.css";
import acc from "../../../assets/images/acc.png";
function Section3() {
  return (
    <div className="how-work">
      <h2>How the app works</h2>
      <div className="work">
        <img src={acc} alt="" />
        <div className="acc-cerat">
          <a href="#">Create an account</a>
          <h3>Create/login to an existing account to get started</h3>
          <p>An account is created with your email and a desired password</p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
