import React, { useState } from "react";
import "./developerButton.css";
import DeveloperForm from "./DeveloperForm";
function DeveloperInfoButton() {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <div className="buttonContainer">
        <button onClick={handleClick} className="button">
          Add developer info
        </button>
      </div>
      {clicked && <DeveloperForm clicked={clicked} setClicked={setClicked} />}
    </div>
  );
}

export default DeveloperInfoButton;
