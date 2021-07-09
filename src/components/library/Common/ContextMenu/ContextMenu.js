import React, { useEffect, useRef } from "react";
import "./style.scss";
export default function ContextMenu(props) {
  let options = props.options || [];
  useEffect(() => {
    document.addEventListener("click", checkClickOutside);
    document.addEventListener("contextmenu", checkClickOutside);
    return () => {
      document.removeEventListener("click", checkClickOutside);
      document.removeEventListener("contextmenu", checkClickOutside);
    };
  }, []);
  const menu = useRef();
  const checkClickOutside = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      props.closeMenu();
    }
  };
  return (
    <div
      className="contextMenu__container"
      style={{ top: props.position.top, left: props.position.left }}
      ref={menu}
    >
      {options.map((option) => {
        return (
          <div className="contextMenu__option" onClick={option.onClick}>
            {option.name}
          </div>
        );
      })}
    </div>
  );
}
