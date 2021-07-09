import React, { useEffect, useRef } from "react";
import Slider from "rc-slider";
import { useDispatch, useSelector } from "react-redux";
import Volume from "../../../../../assets/svg/volume.svg";
import VolumeMute from "../../../../../assets/svg/volume-mute.svg";
import { setVolume, toggleMute } from "../../../../../actions/volumeControls";
import "./style.scss";
import "rc-slider/assets/index.css";
export default function VolumeControl(props) {
  const volumeManager = useSelector((state) => state.volumeManager);
  const dispatch = useDispatch();
  const handleVolChange = (val) => {
    dispatch(setVolume(val));
  };
  const volume = volumeManager.muted ? 0 : volumeManager.volume;
  useEffect(() => {
    document.addEventListener("click", checkClickOutside);
    document.addEventListener("contextmenu", checkClickOutside);
    return () => {
      document.removeEventListener("click", checkClickOutside);
      document.removeEventListener("contextmenu", checkClickOutside);
    };
  }, []);
  const volControl = useRef();
  const checkClickOutside = (e) => {
    if (volControl.current && !volControl.current.contains(e.target)) {
      props.hideVolumeSlider();
    }
  };
  return (
    <div className="vol-control__container" ref={volControl}>
      <div className="vol-control__value">{volume}</div>
      <Slider vertical={true} value={volume} onChange={handleVolChange} />
      <div
        className="vol-control__icon"
        onClick={() => {
          dispatch(toggleMute());
        }}
      >
        <img src={volumeManager.muted ? VolumeMute : Volume} alt="" />
      </div>
    </div>
  );
}
