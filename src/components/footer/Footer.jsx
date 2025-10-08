import React from "react";
import "./footer.css";
import lo from "../../assets/images/logo.png";

function Footer() {
  return <div>
    <div className="sectin">
      <div className="img">
        <img src={lo} alt="" />
      </div>
      <div className="icon">
        <i class="fa-brands fa-twitter"></i><br />
        <i class="fa-brands fa-facebook"></i><br />
        <i class="fa-brands fa-instagram"></i>
      </div>
      <div className="tex">
        <p>Copywright 2020 Bella Onojie.com</p>
      </div>
    </div>
  </div>;
}

export default Footer;
