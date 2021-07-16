import React, { useState, useEffect } from "react";
import "./style.scss";
import TitleBar from "../Common/TitleBar";
import "../Common/AceEditorTheme/dark";
import { track_list } from "./tracklist";
import AudioControls from "./AudioControls";
import axios from "axios";
import AudioPlayerDisplay from "./AudioPlayerDisplay";
export default function Notepad(props) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const { startDragging, maximize, minimize, maximized, _id } = props;
  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };
  const changeSongIndex = (index) => {
    setCurrentTrackIndex(index);
  };
  const nextSong = () => {
    setCurrentTrackIndex((currentTrackIndex + 1) % track_list.length);
  };
  const prevSong = () => {
    let temp;
    if (currentTrackIndex === 0) temp = track_list.length - 1;
    else temp = currentTrackIndex - 1;
    setCurrentTrackIndex(temp);
  };
  return (
    <div
      className={
        "audio__container" + (maximized ? " audio__container-maximized" : "")
      }
    >
      {/* <audio src={track_list[0].link} autoPlay={true}></audio> */}
      <TitleBar
        label="Music Player"
        theme="dark"
        maximized={maximized}
        _id={_id}
        maximize={maximize}
        resizing={false}
        minimize={minimize}
        startDragging={startDragging}
      />
      <AudioPlayerDisplay
        track_list={track_list}
        changeSongIndex={changeSongIndex}
        currentTrack={track_list[currentTrackIndex]}
        showPlaylist={showPlaylist}
      />
      <AudioControls
        currentTrack={track_list[currentTrackIndex]}
        nextSong={nextSong}
        prevSong={prevSong}
        showPlaylist={showPlaylist}
        togglePlaylist={togglePlaylist}
      />
    </div>
  );
}
