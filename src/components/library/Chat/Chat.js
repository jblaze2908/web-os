import React from "react";
import "./style.scss";
import TitleBar from "../Common/TitleBar";
import "../Common/AceEditorTheme/dark";
export default function Chat(props) {
  const { startDragging, maximize, minimize, maximized, _id } = props;
  return (
    <div
      className={
        "chat__container" + (maximized ? " chat__container-maximized" : "")
      }
    >
      <TitleBar
        label="Chat"
        theme="dark"
        maximized={maximized}
        _id={_id}
        maximize={maximize}
        resizing={true}
        minimize={minimize}
        startDragging={startDragging}
      />
      <div className="chat__content">
        <iframe
          src="https://chat.jaivardhansingh.tech"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
