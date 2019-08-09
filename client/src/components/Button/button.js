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
    <button  className="submit-btn btn btn-primary" {...props} >
    Sumbit
    </button>
  );
}


export function BookBtn(props) {
  return (
    <button  className="book-btn btn btn-outline-info" {...props} >
    Book
    </button>
  );
}

// export class BookBtn extends React.Component{
//   render() { return <Link to={this.props.} />; }
// }


export default StartBtn




