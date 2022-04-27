import React from "react";
import "./bodyHeader.css";

function BodyHeader({innerText}) {
  return (
    <div className="bodyContainer">
      <h1 className="heading">{innerText}</h1>
    </div>
  );
}

export default BodyHeader;
