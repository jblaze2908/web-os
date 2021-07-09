import React from "react";
import TitleBar from "../Common/TitleBar";
import "./styles.scss";
export default function ImgViewer(props) {
  const { startDragging, maximize, minimize, imgSrc, maximized } = props;
  return (
    <div
      className={
        "imgviewer__container" +
        (maximized ? " imgviewer__container-maximized" : "")
      }
    >
      <TitleBar
        label="ImgViewer"
        theme="dark"
        maximized={maximized}
        maximize={maximize}
        resizing={true}
        minimize={minimize}
        startDragging={startDragging}
      />
      <div className="imgviewer__img">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}