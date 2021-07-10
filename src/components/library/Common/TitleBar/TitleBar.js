import React from "react";
import { useDispatch } from "react-redux";
import Close from "../../../../assets/svg/close.svg";
import Hide from "../../../../assets/svg/hide.svg";
import Sq from "../../../../assets/svg/sq.svg";
import { exitApp, minimizeApp } from "../../../../actions/tasks";
import "./styles.scss";

import Calculator from "../../../../assets/appIcon/calc.svg";
import Calendar from "../../../../assets/appIcon/calendar.svg";
import Camera from "../../../../assets/appIcon/camera.svg";
import Notepad from "../../../../assets/appIcon/notepad.svg";
import Ide from "../../../../assets/appIcon/ide.svg";
import Chat from "../../../../assets/appIcon/chat.png";
import Browser from "../../../../assets/appIcon/browser.svg";
export default function TitleBar(props) {
  const {
    label,
    _id,
    theme,
    resizing,
    maximized,
    startDragging,
    maximize,
    minimize,
  } = props;
  const dispatch = useDispatch();

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
    }
  };
  return (
    <div
      className={
        "titlebar__container " +
        (theme === "dark" ? "titlebar-dark" : "titlebar-light")
      }
      onMouseDown={startDragging}
    >
      <div className="titlebar__label">
        <div className="titlebar__icon">
          <img src={getIcon(label)} alt="" />
        </div>

        {label}
      </div>
      <div className="titlebar__buttons">
        <button
          className="titlebar__button titlebar__button-hide"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(minimizeApp(_id));
          }}
        >
          <img src={Hide} alt="-" />
        </button>
        {resizing ? (
          maximized ? (
            <button
              className="titlebar__button titlebar__button-minimize"
              onClick={minimize}
            >
              <img src={Sq} alt="square" />
            </button>
          ) : (
            <button
              onClick={maximize}
              className="titlebar__button titlebar__button-maximize"
            >
              <img src={Sq} alt="square" />
            </button>
          )
        ) : null}
        <button
          className="titlebar__button titlebar__button-close"
          onClick={() => {
            dispatch(exitApp(_id));
          }}
        >
          <img src={Close} alt="cross" />
        </button>
      </div>
    </div>
  );
}
