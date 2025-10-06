import React from "react";
import "./section1.css";
// import sect1Bg from "../../../assets/images.sect1-bg.png";
function Section1() {
  return (
    <div className="bg">
      <a href="#">Food app</a>
      <h1>Why stay hungry when you can order form Bella Onojie</h1>
      <p>Download the bella onoje’s food app now on</p>
      <form>
        <button>
          <span>Playstore</span>
        </button>
        <button>
          <span>App store</span>
        </button>
      </form>
    </div>
  );
}

export default Section1;
