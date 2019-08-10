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
    Submit
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

// export function ApproveBtn(props) {
//   return (
//     <button className="approve-btn btn btn-success" {...props} id={submission.id} onClick={(event) => props.handleApproveButton(event)}>
//     Approve
//     </button>
//   );
// }

// export function DeleteBtn(props) {
//   return (
//     <button className="delete-btn btn btn-error" {...props} tabIndex="0">
//     Delete
//     </button>
//   );
// }


export default StartBtn




