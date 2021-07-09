import React, { useState, useEffect } from "react";
import TitleBar from "../Common/TitleBar";
import "./style.scss";
import Axios from "axios";
import CalendarBody from "./CalendarBody";
import Events from "./Events";
const findEvent = (date, holidays) => {
  return holidays.filter((val) => {
    let startDate = new Date(val.start.date);

    return startDate.toDateString() === new Date(date).toDateString();
  });
};
export default function Calendar(props) {
  const { startDragging } = props;
  const [holidays, setHolidays] = useState([]);
  const [selectedDate, selectDate] = useState(new Date());
  useEffect(() => {
    let url =
      "https://www.googleapis.com/calendar/v3/calendars/en.indian%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBEMbA8vH79UiELzNap7FJM9wDyy5FRf-Y";
    Axios.get(url).then((res) => {
      let holidays = res.data.items;
      setHolidays([...holidays]);
    });
    return () => {};
  }, []);
  return (
    <div className="calendar__container">
      <TitleBar
        label="Calendar"
        theme="dark"
        resizing={false}
        startDragging={startDragging}
      />
      <div className="calendar__content">
        <CalendarBody holidays={holidays} selectDate={selectDate} />
        <Events
          selectedDate={selectedDate}
          events={findEvent(selectedDate, holidays)}
        />
      </div>
    </div>
  );
}
