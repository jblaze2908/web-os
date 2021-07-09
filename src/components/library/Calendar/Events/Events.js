import React from "react";
import "./style.scss";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Events(props) {
  let { selectedDate, selectDate, events } = props;
  return (
    <div className="events__container">
      <div className="events__date">
        <div className="events__date-date">
          {new Date(selectedDate).getDate()}
        </div>
        <div className="events__date-day">
          {days[new Date(selectedDate).getDay()]}
        </div>
      </div>
      <div className="events__content">
        {events.map((event, index) => {
          return <div className="events__content-event">{event.summary}</div>;
        })}
        {events.length === 0 ? (
          <div className="events__content-msg">No events</div>
        ) : null}
      </div>
    </div>
  );
}
