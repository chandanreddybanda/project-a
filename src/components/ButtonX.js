import { useState } from "react";

function ButtonX(props) {
  const [buttonText, setButtonText] = useState("Next");
  const buttonHandler = (text) => setButtonText(text);
  return <button onClick={() => buttonHandler("nice")}>{buttonText}</button>;
}

export default ButtonX;
