import React from "react";
import Close from "../../../../assets/svg/close.svg";
import Sq from "../../../../assets/svg/sq.svg";
import "./styles.scss";
export default function TitleBar(props) {
  const {
    label,
    theme,
    resizing,
    maximized,
    startDragging,
    maximize,
    minimize,
  } = props;
  //
  return (
    <div
      className={
        "titlebar__container " +
        (theme === "dark" ? "titlebar-dark" : "titlebar-light")
      }
      onMouseDown={startDragging}
    >
      <div className="titlebar__empty" />
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
        <button className="titlebar__button titlebar__button-close">
          <img src={Close} alt="cross" />
        </button>
      </div>
    </div>
  );
}
