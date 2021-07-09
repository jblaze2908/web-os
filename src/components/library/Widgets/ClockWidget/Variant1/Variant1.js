import React from "react";
import "./style.scss";
export default function Variant1(props) {
  const { addZero, time, months, days } = props;
  return (
    <div className="clockWidget1__container">
      <div className="clockWidget1__hour">{addZero(time.getHours() % 12)}</div>
      <div className="clockWidget1__minutes">{addZero(time.getMinutes())}</div>
      <div className="clockWidget1__date">
        <div className="clockWidget1__date-day">{days[time.getDay()]}</div>
        <div className="clockWidget1__date-date">
          {months[time.getMonth()] + " ." + addZero(time.getDate())}
        </div>
      </div>
    </div>
  );
}
