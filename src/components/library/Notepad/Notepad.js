import React from "react";
import "./style.scss";
import TitleBar from "../Common/TitleBar";
import ReactAce from "react-ace";
import "../Common/AceEditorTheme/dark";
export default function Notepad(props) {
  const { startDragging, maximize, minimize, maximized } = props;
  return (
    <div
      className={
        "notepad__container" +
        (maximized ? " notepad__container-maximized" : "")
      }
    >
      <TitleBar
        label="Notepad"
        theme="dark"
        maximized={maximized}
        maximize={maximize}
        resizing={true}
        minimize={minimize}
        startDragging={startDragging}
      />
      <ReactAce
        height="calc(100% - 27.2px)"
        width="100%"
        fontSize={14}
        theme="dark"
        showPrintMargin={false}
      />
    </div>
  );
}
