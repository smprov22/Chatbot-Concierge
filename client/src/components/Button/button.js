import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'

export function StartBtn(props) {
  return (
    <button className="start-btn btn btn-primary" {...props} >
    Start
    </button>
  );
}

export function SubmitBtn(props) {
  return (
    <button  className="submit-btn btn btn-primary animated pulse" {...props} >
    Submit
    </button>
  );
}


// export function BookBtn(props) {
//   return (
//     <button  className="book-btn btn btn-outline-info" {...props} >
//     Book
//     </button>
//   );
// }

export class BookBtns extends React.Component{
  btnClick() {
    window.open("https://www.google.com");
}
render() {
  return (<div>
          <button  className="book-btn btn btn-outline-info "  onClick={this.btnClick.bind(this)}> Book </button>
      </div>);
}
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




