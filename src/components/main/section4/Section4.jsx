import React from "react";
import "./section4.css";
import exp from "../../../assets/images/explore.png";

function Section4() {
  return (
    <div className="exp">
      <div className="work">
        <div className="acc-cerat">
          <a href="#">Explore varieties</a>
          <h3>Shop for your favorites meal as e dey hot.</h3>
          <p>
            Shop for your favorite meals or drinks and enjoy while doing it.
          </p>
        </div>
        <img src={exp} alt="" />
      </div>
    </div>
  );
}

export default Section4;
