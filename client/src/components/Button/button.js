import React from "react";
import "./style.css";


export function StartBtn(props) {
  return (
    <button className="start-btn btn btn-primary" {...props} tabIndex="0">
    Start
    </button>
  );
}

export function SubmitBtn(props) {
  return (
    <button  className="submit-btn btn btn-outline-info" {...props} tabIndex="0">
    Sumbit
    </button>
  );
}

export function BookBtn(props) {
  return (
    <button  className="book-btn btn btn-outline-info" {...props} tabIndex="0">
    Book
    </button>
  );
}


export default StartBtn




