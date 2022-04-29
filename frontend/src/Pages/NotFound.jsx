import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  const notFound = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    margin: "200px 0",
  };
  const h1Style = {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "70px",
    lineHeight: "76px",
    color: "#3f3d56",
  };
  const pStyle = {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "54px",
    lineHeight: "76px",
    color: "#3f3d56",
  };
  const homeStyle = {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "34px",
    lineHeight: "60px",
    color: "#3f3d56",
  };

  return (
    <div className="notFound" style={notFound}>
      <div className="notFoundWrapper">
        <h1 style={h1Style}>Oops!</h1>
        <p style={pStyle}>404 - Page not found!</p>
        <Link to={"/"} style={homeStyle}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
