import { useState } from "react";

function ButtonX(props) {
  const [buttonText, setButtonText] = useState(".");
  const buttonHandler = (text) => setButtonText(text);
  return (
    <button className="ButtonX" onClick={() => buttonHandler("X")}>
      {buttonText + props.text}
    </button>
  );
}

export default ButtonX;
