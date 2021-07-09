import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Close from "../../../../assets/svg/close.svg";
import Sq from "../../../../assets/svg/sq.svg";
import { exitApp } from "../../../../actions/tasks";
import "./styles.scss";
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
  return (
    <div
      className={
        "titlebar__container " +
        (theme === "dark" ? "titlebar-dark" : "titlebar-light")
      }
      onMouseDown={startDragging}
    >
      <div className="titlebar__label">{label}</div>
      <div className="titlebar__buttons">
        {resizing ? (
          maximized ? (
            <button
              className="titlebar__button titlebar__button-minimize"
              onClick={minimize}
            >
              <img src={Sq} alt="cross" />
            </button>
          ) : (
            <button
              onClick={maximize}
              className="titlebar__button titlebar__button-maximize"
            >
              <img src={Sq} alt="cross" />
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
