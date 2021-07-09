import React from "react";
import "./styles.scss";
export default function Display(props) {
  const { row1, row2 } = props;
  return (
    <div className="calcdisp__container">
      <div className="calcdisp__row1">{row1}</div>
      <div className="calcdisp__row2">{row2}</div>
    </div>
  );
}
