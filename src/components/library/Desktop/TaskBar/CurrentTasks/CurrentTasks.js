import React from "react";
import "./style.scss";
import Calculator from "../../../../../assets/appIcon/calc.svg";
import Calendar from "../../../../../assets/appIcon/calendar.svg";
import Camera from "../../../../../assets/appIcon/camera.svg";
import Notepad from "../../../../../assets/appIcon/notepad.svg";
import Ide from "../../../../../assets/appIcon/ide.svg";
import Chat from "../../../../../assets/appIcon/chat.png";
import { useSelector } from "react-redux";
const getIcon = (name) => {
  switch (name) {
    case "Calculator":
      return Calculator;
    case "Calendar":
      return Calendar;
    case "Camera":
      return Camera;
    case "Notepad":
      return Notepad;
    case "IDE":
      return Ide;
    case "Chat":
      return Chat;
  }
};
export default function CurrentTasks() {
  const taskManager = useSelector((state) => state.taskManager);
  const { currentTasks } = taskManager;
  return (
    <>
      {currentTasks.map((task) => (
        <div
          className={
            "current-task" +
            (taskManager.focusedEl === task._id ? " current-task-active" : "")
          }
        >
          <img
            src={"" + getIcon(task.name)}
            alt=""
            className="current-task-img"
          />
        </div>
      ))}
    </>
  );
}
// const propsAreSame = (prevProps, nextProps) => {
//   console.log(prevProps);
//   console.log(nextProps);
//   return prevProps.currentTasks.length === nextProps.currentTasks.length;
// };
