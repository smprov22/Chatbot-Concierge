import React from "react";

export function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export function ApproveBtn(props) {
  return (
    <span className="approve-btn" {...props} role="button" tabIndex="0">
      ✔
    </span>
  );
}

