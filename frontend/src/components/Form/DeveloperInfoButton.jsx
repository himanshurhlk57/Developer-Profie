import React, { useState } from "react";
import "./developerButton.css";
import DeveloperForm from "./DeveloperForm";
function DeveloperInfoButton({ setIsSubmitted }) {
  const [clicked, setClicked] = useState(false);

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
      {clicked && (
        <DeveloperForm
          setClicked={setClicked}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </div>
  );
}

export default DeveloperInfoButton;
