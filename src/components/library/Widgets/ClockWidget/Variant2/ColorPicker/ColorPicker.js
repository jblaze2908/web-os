import React, { useEffect, useRef } from "react";
import "./style.scss";
export default function ColorPicker(props) {
  const { colors, setColor } = props;
  useEffect(() => {
    document.addEventListener("click", checkClickOutside);
    document.addEventListener("contextmenu", checkClickOutside);
    return () => {
      document.removeEventListener("click", checkClickOutside);
      document.removeEventListener("contextmenu", checkClickOutside);
    };
  }, []);
  const colorPicker = useRef();
  const checkClickOutside = (e) => {
    if (colorPicker.current && !colorPicker.current.contains(e.target)) {
      props.closeColorPicker();
    }
  };
  return (
    <div className="colorPicker__container" ref={colorPicker}>
      <div className="colorPicker__option">
        <div className="colorPicker__option-name">Time Color 1</div>
        <input
          type="color"
          className="colorPicker__option-color"
          value={colors.color1a}
          onChange={(e) => {
            setColor("1a", e.target.value);
          }}
        />
      </div>
      <div className="colorPicker__option">
        <div className="colorPicker__option-name">Time Color 2</div>
        <input
          type="color"
          className="colorPicker__option-color"
          value={colors.color1b}
          onChange={(e) => {
            setColor("1b", e.target.value);
          }}
        />
      </div>
      <div className="colorPicker__option">
        <div className="colorPicker__option-name">Day Color 1</div>
        <input
          type="color"
          className="colorPicker__option-color"
          value={colors.color2a}
          onChange={(e) => {
            setColor("2a", e.target.value);
          }}
        />
      </div>
      <div className="colorPicker__option">
        <div className="colorPicker__option-name">Day Color 2</div>
        <input
          type="color"
          className="colorPicker__option-color"
          value={colors.color2b}
          onChange={(e) => {
            setColor("2b", e.target.value);
          }}
        />
      </div>
    </div>
  );
}
