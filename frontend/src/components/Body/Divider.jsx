import React from "react";

function Divider() {
  const dividerStyle = {
    width: "90%",
    height: "2px",
    color: "#d0cde1",
    margin: "0 auto",
  };
  return (
    <div>
      <hr className="divider" style={dividerStyle} />
    </div>
  );
}

export default Divider;
