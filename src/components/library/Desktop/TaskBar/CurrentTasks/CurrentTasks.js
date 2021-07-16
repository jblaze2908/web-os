import React, { useState } from "react";
import "./style.scss";
import Music from "../../../../../assets/appIcon/music.svg";
import Calculator from "../../../../../assets/appIcon/calc.svg";
import Calendar from "../../../../../assets/appIcon/calendar.svg";
import Camera from "../../../../../assets/appIcon/camera.svg";
import Notepad from "../../../../../assets/appIcon/notepad.svg";
import Ide from "../../../../../assets/appIcon/ide.svg";
import Chat from "../../../../../assets/appIcon/chat.png";
import Maps from "../../../../../assets/appIcon/maps.svg";
import Browser from "../../../../../assets/appIcon/browser.svg";
import ContextMenu from "../../../Common/ContextMenu";

import { useSelector, useDispatch } from "react-redux";
import { maximizeApp, exitApp } from "../../../../../actions/tasks";
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
    case "Browser":
      return Browser;
    case "Music Player":
      return Music;
    case "Maps":
      return Maps;
  }
};
export default function CurrentTasks() {
  const taskManager = useSelector((state) => state.taskManager);

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [contextMenuPos, setContextMenuPos] = useState({
    top: 0,
    left: 0,
  });
  const { currentTasks } = taskManager;
  const dispatch = useDispatch();
  const openContextMenu = (e, task) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedTask(task);
    setShowContextMenu(true);
    const el = document.getElementById(task.name);
    console.log(el.offsetLeft);
    setContextMenuPos({ top: "-35px", left: el.offsetLeft });
  };
  return (
    <>
      {currentTasks.map((task) => (
        <div
          onContextMenu={(e) => {
            openContextMenu(e, task);
          }}
          id={task.name}
          className={
            "current-task" +
            (taskManager.focusedEl === task._id ? " current-task-active" : "")
          }
          onClick={() => {
            dispatch(maximizeApp(task._id));
          }}
        >
          <img
            src={"" + getIcon(task.name)}
            alt=""
            className="current-task-img"
          />
        </div>
      ))}
      {showContextMenu ? (
        <ContextMenu
          position={contextMenuPos}
          options={[
            {
              name: "Close App - " + selectedTask.name,
              onClick: () => {
                setShowContextMenu(false);
                dispatch(exitApp(selectedTask._id));
              },
            },
          ]}
          closeMenu={() => {
            setShowContextMenu(false);
            setSelectedTask(false);
          }}
        />
      ) : null}
    </>
  );
}
// const propsAreSame = (prevProps, nextProps) => {
//   console.log(prevProps);
//   console.log(nextProps);
//   return prevProps.currentTasks.length === nextProps.currentTasks.length;
// };
