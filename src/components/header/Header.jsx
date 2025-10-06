import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
function Header() {
  return (
    <div> 
      <header>
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
