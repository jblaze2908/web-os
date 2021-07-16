import React, { useState } from "react";
import ContextMenu from "../../../Common/ContextMenu";
import ColorPicker from "./ColorPicker";

import "./style.scss";
export default function Variant2(props) {
  const { addZero, time, months, days } = props;

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({
    top: 0,
    left: 0,
  });
  const [showColorPicker, setShowColorPicker] = useState(false);

  const [colors, setColors] = useState({
    color1a: localStorage.getItem("color1a") || "#ffffff",
    color1b: localStorage.getItem("color1b") || "#a6cecd",

    color2a: localStorage.getItem("color2a") || "#5bfbe0",
    color2b: localStorage.getItem("color2b") || "#6dcbf3",
  });
  const openContextMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowContextMenu(true);
    setContextMenuPos({ top: e.pageY, left: e.pageX });
  };
  const closeColorPicker = () => {
    setShowColorPicker(false);
  };
  const setColor = (type, val) => {
    let color = { ...colors };
    switch (type) {
      case "1a":
        localStorage.setItem("color1a", val);
        color.color1a = val;
        break;
      case "1b":
        localStorage.setItem("color1b", val);
        color.color1b = val;
        break;
      case "2a":
        localStorage.setItem("color2a", val);
        color.color2a = val;
        break;
      case "2b":
        localStorage.setItem("color2b", val);
        color.color2b = val;
        break;
      default:
        break;
    }
    setColors(color);
  };
  return (
    <div className="clockWidget2__container" onContextMenu={openContextMenu}>
      <div
        className="clockWidget2__time"
        style={{
          background: `linear-gradient(${colors.color1a},${colors.color1b})`,
          WebkitBackgroundClip: "text",
        }}
        key={colors.color1a + " - " + colors.color1b}
      >
        {addZero(new Date(time).getHours()) +
          ":" +
          addZero(new Date(time).getMinutes())}
      </div>
      <div
        className="clockWidget2__day"
        style={{
          background: `linear-gradient(${colors.color2a},${colors.color2b})`,
          WebkitBackgroundClip: "text",
        }}
        key={colors.color2a + " " + colors.color2b}
      >
        {days[new Date(time).getDay()]}
      </div>
      <div
        className="clockWidget2__date"
        key={colors.color1a + " " + colors.color1b}
        style={{
          background: `linear-gradient(${colors.color1a},${colors.color1b})`,
          WebkitBackgroundClip: "text",
        }}
      >
        {new Date(time).getDate() +
          " " +
          months[new Date(time).getMonth()] +
          " " +
          new Date(time).getFullYear()}
      </div>
      {showContextMenu ? (
        <ContextMenu
          position={contextMenuPos}
          options={[
            {
              name: "Change Colors",
              onClick: () => {
                setShowContextMenu(false);
                setShowColorPicker(true);
              },
            },
          ]}
          closeMenu={() => {
            setShowContextMenu(false);
          }}
        />
      ) : null}
      {showColorPicker ? (
        <ColorPicker
          colors={colors}
          setColor={setColor}
          closeColorPicker={closeColorPicker}
        />
      ) : null}
    </div>
  );
}
