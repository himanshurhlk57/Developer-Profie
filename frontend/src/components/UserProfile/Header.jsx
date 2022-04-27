import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h3 className="h3Style left">The Developer Profile</h3>
        </Link>

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h3 className="h3Style right">All Developers</h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
