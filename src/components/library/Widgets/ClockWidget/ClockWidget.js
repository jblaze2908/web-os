import React, { useEffect, useState } from "react";
import Variant1 from "./Variant1";
import Variant2 from "./Variant2";
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
const addZero = (num) => {
  var str = "" + num;
  if (str.length === 1) return "0" + str;
  else return str;
};
export default function ClockWidget({ variant }) {
  let interval;
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const updateTime = () => {
    setTime(new Date());
  };
  if (variant === 1)
    return (
      <Variant1
        time={time}
        updateTime={updateTime}
        months={months}
        days={days}
        addZero={addZero}
      />
    );
  else if (variant === 2)
    return (
      <Variant2
        time={time}
        updateTime={updateTime}
        months={months}
        days={days}
        addZero={addZero}
      />
    );
}
