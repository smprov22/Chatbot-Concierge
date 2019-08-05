import React from "react";
import "./style.css";

export function StartBtn(props) {
  return (
    <button className="start-btn" {...props} tabIndex="0">
    Start
    </button>
  );
}

export function SubmitBtn(props) {
  return (
    <button className="submit-btn" {...props} tabIndex="0">
    Sumbit
    </button>
  );
}

export default SubmitBtn



