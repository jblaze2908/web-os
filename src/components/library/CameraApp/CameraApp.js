import React, { useState, useEffect, useRef } from "react";
import TitleBar from "../Common/TitleBar";
import CameraDisplay from "./CameraDisplay";
import CameraControls from "./CameraControls";
import "./styles.scss";

export default function CameraApp(props) {
  const canvas = useRef(null);
  const pic = useRef(null);
  const { startDragging, maximize, minimize, maximized } = props;
  const [loaded, setLoaded] = useState(false);
  const [stream, enableStream] = useState(null);
  const [vidDimensions, setVidDimensions] = useState({
    vidObj: null,
    height: 0,
    width: 0,
  });

  const endStream = () => {
    if (stream)
      stream.getTracks().forEach((track) => {
        track.stop();
      });
  };
  const playStream = (stream) => {
    enableStream(stream);
    setLoaded(true);
  };
  const clickImg = () => {
    let canvasEl = canvas.current;
    if (!loaded) return;
    let context = canvasEl.getContext("2d");
    canvasEl.height = vidDimensions.height;
    canvasEl.width = vidDimensions.width;
    context.drawImage(
      vidDimensions.vidObj,
      0,
      0,
      vidDimensions.width,
      vidDimensions.height
    );
    let data = canvasEl.toDataURL("image/png");
    pic.current.src = data;
  };
  const streamError = (error) => {};
  useEffect(() => {
    let constraints = { audio: false, video: { facingMode: "user" } };
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia ||
      navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia(constraints, playStream, streamError);
    }
    return () => {
      endStream();
    };
  }, []);
  const getVideoDimension = (data) => {
    setVidDimensions(data);
  };
  return (
    <div
      className={
        "camera__container" + (maximized ? " camera__container-maximized" : "")
      }
    >
      <TitleBar
        label="Camera"
        theme="dark"
        maximized={maximized}
        resizing={true}
        maximize={maximize}
        minimize={minimize}
        startDragging={startDragging}
      />
      <CameraDisplay
        loaded={loaded}
        stream={stream}
        callback={getVideoDimension}
      />
      <CameraControls clickImg={clickImg} />
      <canvas ref={canvas} style={{ display: "none" }}></canvas>
      {/* <img ref={pic} src="" alt="" /> */}
    </div>
  );
}
