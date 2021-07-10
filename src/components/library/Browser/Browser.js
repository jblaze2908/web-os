import React from "react";
import "./style.scss";
import TitleBar from "../Common/TitleBar";
import "../Common/AceEditorTheme/dark";
export default function Browser(props) {
  const { startDragging, maximize, minimize, maximized, _id } = props;
  return (
    <div
      className={
        "browser__container" +
        (maximized ? " browser__container-maximized" : "")
      }
    >
      <TitleBar
        label="Browser"
        theme="dark"
        maximized={maximized}
        _id={_id}
        maximize={maximize}
        resizing={true}
        minimize={minimize}
        startDragging={startDragging}
      />
      <div className="browser__content">
        <iframe
          src="https://www.google.com/webhp?igu=1"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
