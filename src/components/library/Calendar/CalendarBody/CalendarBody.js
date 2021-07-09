import React, { useState, useEffect } from "react";
import "./style.scss";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const getDaysInMonth = (yy, mm) => {
  return 32 - new Date(yy, mm, 32).getDate();
};
const getDayOnLastDate = (yy, mm) => {
  let date = getDaysInMonth(yy, mm);
  return new Date(yy, mm, date).getDay();
};
const filterHolidaysByMonth = (holidays, month) => {
  let filtered = holidays.filter((el) => {
    let startDate = new Date(el.start.date);
    return startDate.getMonth() === month;
  });
  return filtered;
};
const checkIfHoliday = (date, filteredHolidays, year) => {
  let index = filteredHolidays.findIndex((el) => {
    let startDate = new Date(el.start.date);
    return startDate.getDate() === date && startDate.getFullYear() === year;
  });
  return index !== -1;
};
export default function CalendarBody(props) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  // const [date, setDate] = useState(new Date().getDate());
  const [firstDay, setFirstDay] = useState(new Date().getDay());
  const [holidaysInMonth, setHolidaysInMonth] = useState([]);
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(new Date().getFullYear(), new Date().getMonth())
  );
  const { holidays, selectDate } = props;
  let filteredHolidays = [];
  useEffect(() => {
    filteredHolidays = filterHolidaysByMonth(holidays, month);
    setHolidaysInMonth(filteredHolidays);
    return () => {};
  }, [holidays, month]);
  const updateYear = (inc) => {
    let newYear;
    if (inc) newYear = year + 1;
    else newYear = year - 1;
    setYear(newYear);
    updateFirstDay(newYear, month);
    setDaysInMonth(getDaysInMonth(newYear, month));
  };
  const incMonth = () => {
    let newMonth, newYear;
    if (month === 11) {
      newMonth = 0;
      newYear = year + 1;
      setMonth(newMonth);
      setYear(newYear);
    } else {
      newMonth = month + 1;
      newYear = year;
      setMonth(newMonth);
    }
    updateFirstDay(newYear, newMonth);
    setDaysInMonth(getDaysInMonth(newYear, newMonth));
  };
  const decMonth = () => {
    let newMonth, newYear;
    if (month === 0) {
      newMonth = 11;
      newYear = year - 1;
      setMonth(newMonth);
      setYear(newYear);
    } else {
      newMonth = month - 1;
      newYear = year;
      setMonth(newMonth);
    }
    updateFirstDay(newYear, newMonth);
    setDaysInMonth(getDaysInMonth(newYear, newMonth));
  };
  const updateFirstDay = (yy, mm) => {
    let firstDay = new Date(yy, mm).getDay();
    setFirstDay(firstDay);
  };

  return (
    <div className="calendarbody__container">
      <div className="calendarbody__year">
        <div
          className="calendarbody__year-btn calendarbody__year-btn-prev"
          onClick={() => {
            updateYear(false);
          }}
        >
          <i className="fas fa-angle-left" />
        </div>
        <div className="calendarbody__year-val">{year}</div>
        <div
          className="calendarbody__year-btn calendarbody__year-btn-next"
          onClick={() => {
            updateYear(true);
          }}
        >
          <i className="fas fa-angle-right" />
        </div>
      </div>
      <div className="calendarbody__month">
        <div
          className="calendarbody__month-btn calendarbody__month-btn-prev"
          onClick={decMonth}
        >
          <i className="fas fa-angle-left" />
        </div>
        <div className="calendarbody__month-val">{months[month]}</div>
        <div
          className="calendarbody__month-btn calendarbody__month-btn-next"
          onClick={incMonth}
        >
          <i className="fas fa-angle-right" />
        </div>
      </div>
      <div className="calendarbody__table">
        <div className="calendarbody__table-row">
          {days.map((day, index) => {
            return (
              <div
                key={"day" + index}
                className="calendarbody__table-cell calendarbody__table-cell-day"
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="calendarbody__table-values">
          {[...Array(firstDay)].map((val, index) => {
            let temp = getDaysInMonth(year, month - 1);
            return (
              <div
                key={"emptyday" + index}
                className="calendarbody__table-cell calendarbody__table-cell-unfocused"
              >
                {temp - index}
              </div>
            );
          })}
          {[...Array(daysInMonth)].map((val, index) => {
            let holiday = checkIfHoliday(index + 1, holidaysInMonth, year);
            return new Date().toDateString() !==
              new Date(year, month, index + 1).toDateString() ? (
              <div
                key={"date" + index}
                className={
                  "calendarbody__table-cell" +
                  (holiday ? " calendarbody__table-cell-holiday" : "")
                }
                onClick={() => {
                  selectDate(new Date(year, month, index + 1));
                }}
              >
                {index + 1}
              </div>
            ) : (
              <div
                key={"date" + index}
                className={
                  "calendarbody__table-cell calendarbody__table-cell-active " +
                  (holiday ? " calendarbody__table-cell-holiday" : "")
                }
                onClick={() => {
                  selectDate(new Date(year, month, index + 1));
                }}
              >
                <div className="calendarbody__table-cell-border">
                  {index + 1}
                </div>
              </div>
            );
          })}
          {[...Array(6 - getDayOnLastDate(year, month))].map((val, index) => {
            return (
              <div
                key={"emptyday" + index}
                className="calendarbody__table-cell calendarbody__table-cell-unfocused"
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
