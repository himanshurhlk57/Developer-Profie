import React from "react";
import logoImg from "../static/undraw_dev_productivity_umsq 1.png";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <div className="headerText">
        <p className="title titleMarginOne">The Developer</p>
        <p className="title titleMarginTwo">Repository</p>
      </div>
      <div className="headerImage">
        <img className="logoImg" src={logoImg} alt="" />
      </div>
    </div>
  );
}

export default Header;
