import React from "react";
import "./style.scss";
import TitleBar from "../Common/TitleBar";
import "../Common/AceEditorTheme/dark";
export default function Notepad(props) {
  const { startDragging, maximize, minimize, maximized, _id } = props;
  const onChangeHandler = (e) => {
    sessionStorage.setItem("notepadVal", e.target.value);
  };
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
        _id={_id}
        maximize={maximize}
        resizing={true}
        minimize={minimize}
        startDragging={startDragging}
      />
      <textarea
        style={{ height: "calc(100% - 31px)" }}
        className="notepad__textarea"
        onChange={onChangeHandler}
        defaultValue={sessionStorage.getItem("notepadVal")}
      />
      {/* <ReactAce
        height="calc(100% - 31px)"
        width="100%"
        fontSize={14}
        theme="dark"
        showPrintMargin={false}
      /> */}
    </div>
  );
}
