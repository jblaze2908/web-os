import React from "react";
import Shutter from "../../../../assets/svg/shutter.svg";
import "./styles.scss";
export default function CameraControls(props) {
  const { clickImg } = props;
  return (
    <div className="cmracontrols__container">
      <div className="cmracontrols__shutter" onClick={clickImg}>
        <img src={Shutter} alt="Shutter" />
      </div>
    </div>
  );
}
