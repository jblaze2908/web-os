import React, { useRef } from "react";
import Download from "../../../../assets/svg/download.svg";
import Delete from "../../../../assets/svg/delete.svg";
import "./style.scss";
export default function ImgViewer(props) {
  const Img = useRef(null);
  console.log(props);
  const downloadImage = () => {
    let link = document.createElement("a");
    link.download = "Capture" + Date.now();
    link.href = props.src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="imgviewer__container"
      style={{ backgroundImage: `url(${props.src})` }}
    >
      <div className="imgviewer__buttons">
        <div
          className="imgviewer__button imgviewer__button-download"
          onClick={downloadImage}
        >
          <img src={Download} alt="" />
        </div>
        <div
          className="imgviewer__button imgviewer__button-discard"
          onClick={props.goBack}
        >
          <img src={Delete} alt="" />
        </div>
      </div>
    </div>
  );
}
