import React, { useState, useRef, useEffect } from "react";
import SongChange from "../../../../assets/svg/songChange.svg";
import Play from "../../../../assets/svg/play.svg";
import Slider from "rc-slider";
import Pause from "../../../../assets/svg/pause.svg";
import PlayListIcon from "../../../../assets/svg/playlist.svg";
import "./style.scss";
import { useSelector } from "react-redux";
export default function AudioControls(props) {
  let interval;

  const audioPlayer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [timeStamp, setTimeStamp] = useState(false);
  const [duration, setDuration] = useState(null);
  const volumeManager = useSelector((state) => state.volumeManager);
  const playAudio = () => {
    audioPlayer.current.play();
    setPlaying(true);
  };
  const pauseAudio = () => {
    audioPlayer.current.pause();
    audioPlayer.current.voume = volumeManager.volume / 100;
    setPlaying(false);
  };
  useEffect(() => {
    audioPlayer.current.src = props.currentTrack.link;
    audioPlayer.current.currentTime = 0;
    if (playing) audioPlayer.current.play();
    return () => {
      // cleanup;
      clearInterval(interval);
    };
  }, [props.currentTrack._id]);
  const toggleAudio = () => {
    return playing ? pauseAudio() : playAudio();
  };
  const loadSongDetails = () => {
    setDuration(audioPlayer.current.duration);
    setTimeStamp(0);
    interval = setInterval(() => {
      setTimeStamp(audioPlayer.current.currentTime);
    }, 1000);
  };
  const addZero = (val) => {
    return val < 10 ? "0" + val : "" + val;
  };
  const formatTime = (time) => {
    let minutes = addZero(Math.floor(time / 60));
    let seconds = addZero(Math.floor(time % 60));
    return minutes + ":" + seconds;
  };
  const seekAudio = (val) => {
    let temp = (val / 100) * duration;
    setTimeStamp(temp);
    audioPlayer.current.currentTime = temp;
  };
  if (audioPlayer && audioPlayer.current) {
    if (volumeManager.muted) audioPlayer.current.volume = 0;
    else audioPlayer.current.volume = volumeManager.volume / 100;
  }
  return (
    <div className="audiocontrols__container">
      <div className="audiocontrols__song">
        <img
          src={props.currentTrack.thumbnail}
          alt=""
          className="audiocontrols__song-art"
        />
        <div className="audiocontrols__song-details">
          <div className="audiocontrols__song-details-name">
            {props.currentTrack.track_name}
          </div>
          <div className="audiocontrols__song-details-artist">
            {props.currentTrack.track_artist}
          </div>
        </div>
      </div>
      <div className="audiocontrols__controls">
        <div className="audiocontrols__controls-btns">
          <div
            className="audiocontrols__controls-btns-change audiocontrols__controls-btns-prev"
            onClick={props.prevSong}
          >
            <img src={SongChange} alt="" srcset="" />
          </div>
          <div
            className="audiocontrols__controls-btns-playback"
            onClick={toggleAudio}
          >
            <img src={!playing ? Play : Pause} alt="" />
          </div>
          <div
            className=" audiocontrols__controls-btns-change audiocontrols__controls-btns-next"
            onClick={props.nextSong}
          >
            <img src={SongChange} alt="" srcset="" />
          </div>
        </div>
        <div className="audiocontrols__controls-seekbar">
          <div className="audiocontrols__controls-seekbar-currTime">
            {formatTime(timeStamp)}
          </div>
          <div className="audiocontrols__controls-seekbar-body">
            <Slider value={(timeStamp / duration) * 100} onChange={seekAudio} />
          </div>
          <div className="audiocontrols__controls-seekbar-totalTime">
            {formatTime(duration)}
          </div>
        </div>
        <div
          className={
            "audiocontrols__listbtn" +
            (props.showPlaylist ? " audiocontrols__listbtn-active" : "")
          }
          onClick={props.togglePlaylist}
        >
          <img src={PlayListIcon} alt="" srcset="" />
        </div>
      </div>
      <audio ref={audioPlayer} onLoadedMetadata={loadSongDetails}></audio>
    </div>
  );
}
