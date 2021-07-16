import React from "react";
import "./style.scss";
export default function AudioPlayerDisplay(props) {
  const { changeSongIndex, track_list, currentTrack, showPlaylist } = props;
  return (
    <div className="apDisp__container">
      <div
        className={
          "apDisp__albumart-container" +
          (!showPlaylist ? " apDisp__albumart-container-max" : "")
        }
      >
        <img className="apDisp__albumart-img" src={currentTrack.thumbnail} />
      </div>
      <div
        className={
          "apDisp__list-container" +
          (showPlaylist ? " apDisp__list-container-show" : "")
        }
      >
        <div className="apDisp__list-items">
          {track_list.map((track, index) => (
            <div
              className={
                "apDisp__list-item" +
                (currentTrack._id === track._id
                  ? " apDisp__list-item-active"
                  : "")
              }
              onClick={
                currentTrack._id === track._id
                  ? null
                  : () => changeSongIndex(index)
              }
            >
              <div className="apDisp__list-item-name">{track.track_name}</div>
              <div className="apDisp__list-item-artist">
                {track.track_artist}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
