import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import Wallpaper1 from "../../../assets/wallpapers/1.jpg";
import TaskBar from "./TaskBar";
import Content from "./Content";
import ClockWidget from "../Widgets/ClockWidget";
export default function Desktop() {
  const brightness = useSelector((state) => state.displayManager.brightness);
  return (
    <div
      className="desktop-container"
      style={{
        backgroundImage: `url(${Wallpaper1})`,
        filter: `brightness(${0.4 + (brightness / 100) * 0.6})`,
      }}
    >
      <div className="desktop__content-container">
        <ClockWidget variant={2} />
        <Content />
      </div>
      <TaskBar />
    </div>
  );
}
