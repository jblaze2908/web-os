import React, { useRef, useEffect } from "react";
import "./styles.scss";
export default function CameraDisplay(props) {
  const { loaded, stream, callback } = props;
  const cameraDisp = useRef(null);
  useEffect(() => {
    if (loaded) {
      cameraDisp.current.srcObject = stream;
      cameraDisp.current.play();
      cameraDisp.current.addEventListener("playing", () => {
        callback({
          vidObj: cameraDisp.current,
          width: cameraDisp.current.videoWidth,
          height: cameraDisp.current.videoHeight,
        });
      });
    }
  }, [loaded]);
  return (
    <div className="cmraDisp__container">
      {loaded ? (
        <video ref={cameraDisp} />
      ) : (
        <div className="cmraDisp__errormsg">Waiting for Camera</div>
      )}
    </div>
  );
}
