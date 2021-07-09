import React, { useEffect, useRef } from "react";
import Slider from "rc-slider";
import { useDispatch, useSelector } from "react-redux";
import Brightness from "../../../../../assets/svg/brightness.svg";
import { setBrightness } from "../../../../../actions/displayControls";
import "./style.scss";
import "rc-slider/assets/index.css";
export default function BrightnessControl(props) {
  const brightness = useSelector((state) => state.displayManager.brightness);
  const dispatch = useDispatch();
  const handleBrightnessChange = (val) => {
    dispatch(setBrightness(val));
  };
  useEffect(() => {
    document.addEventListener("click", checkClickOutside);
    document.addEventListener("contextmenu", checkClickOutside);
    return () => {
      document.removeEventListener("click", checkClickOutside);
      document.removeEventListener("contextmenu", checkClickOutside);
    };
  }, []);
  const brighnessControl = useRef();
  const checkClickOutside = (e) => {
    if (
      brighnessControl.current &&
      !brighnessControl.current.contains(e.target)
    ) {
      props.hideBrightnessSlider();
    }
  };
  return (
    <div className="brightness-control__container" ref={brighnessControl}>
      <Slider
        vertical={true}
        value={brightness}
        onChange={handleBrightnessChange}
      />
      <div className="brightness-control__icon">
        <img src={Brightness} alt="" />
      </div>
    </div>
  );
}
