import React from "react";
import "./style.css";
// import { Link } from 'react-router-dom'

export function StartBtn(props) {
  return (
    <button className="start-btn btn btn-primary" {...props} >
    Start
    </button>
  );
}

export function SubmitBtn(props) {
  return (
    <button type="submit" className="submit-btn btn btn-primary" {...props} >
    Submit
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




