import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Power from "../../../assets/svg/power.svg";
import Github from "../../../assets/appIcon/github.svg";
import LinkedIn from "../../../assets/appIcon/linkedin.svg";
import Calculator from "../../../assets/appIcon/calc.svg";
import Calendar from "../../../assets/appIcon/calendar.svg";
import Camera from "../../../assets/appIcon/camera.svg";
import Notepad from "../../../assets/appIcon/notepad.svg";
import Ide from "../../../assets/appIcon/ide.svg";
import Chat from "../../../assets/appIcon/chat.png";
import Browser from "../../../assets/appIcon/browser.svg";
import Guest from "../../../assets/svg/guest.svg";
import { launchApp } from "../../../actions/tasks";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
function AppIcon(props) {
  if (props.link)
    return (
      <a target="__blank" href={props.link} className="appdrawer__apps-app">
        <div className="appdrawer__apps-app-icon">
          <img src={props.src} alt="" />
        </div>
        <div className="appdrawer__apps-app-name">{props.name}</div>
      </a>
    );
  else
    return (
      <div
        className="appdrawer__apps-app"
        onClick={() => {
          props.launchApp(props.name);
        }}
      >
        <div className="appdrawer__apps-app-icon">
          <img src={props.src} alt="" />
        </div>
        <div className="appdrawer__apps-app-name">{props.name}</div>
      </div>
    );
}
export default function AppDrawer(props) {
  useEffect(() => {
    document.addEventListener("click", checkClickOutside);
    document.addEventListener("contextmenu", checkClickOutside);
    return () => {
      document.removeEventListener("click", checkClickOutside);
      document.removeEventListener("contextmenu", checkClickOutside);
    };
  }, []);
  const appDrawer = useRef();
  const checkClickOutside = (e) => {
    if (appDrawer.current && !appDrawer.current.contains(e.target)) {
      props.hideAppDrawer();
    }
  };
  const currentTasks = useSelector((state) => state.taskManager.currentTasks);
  const dispatch = useDispatch();
  const startApp = (name) => {
    let _id = uuidv4();
    props.hideAppDrawer();
    dispatch(
      launchApp({
        _id,
        name,
      })
    );
  };
  return (
    <div
      className={
        "appdrawer__container" +
        (props.close ? " appdrawer__container-close" : "")
      }
      ref={appDrawer}
      onAnimationEnd={props.close ? props.removeAppDrawer : null}
    >
      <div>
        <div className="appdrawer__apps">
          <div className="appdrawer__apps-label">Pinned</div>
          <div className="appdrawer__apps-icons">
            <AppIcon
              src={Github}
              name="GitHub"
              link="https://github.com/jblaze2908"
            />
            <AppIcon
              src={LinkedIn}
              name="Linkedin"
              link="https://www.linkedin.com/in/jblaze2908/"
            />
          </div>
        </div>
        <div className="appdrawer__apps">
          <div className="appdrawer__apps-label">Recommended</div>
          <div className="appdrawer__apps-icons">
            <AppIcon src={Browser} name="Browser" launchApp={startApp} />
            <AppIcon src={Calculator} name="Calculator" launchApp={startApp} />
            <AppIcon src={Calendar} name="Calendar" launchApp={startApp} />
            <AppIcon src={Camera} name="Camera" launchApp={startApp} />
            <AppIcon src={Notepad} name="Notepad" launchApp={startApp} />
            <AppIcon src={Ide} name="IDE" launchApp={startApp} />
            <AppIcon src={Chat} name="Chat" launchApp={startApp} />
          </div>
        </div>
      </div>
      <div className="appdrawer__bar">
        <div className="appdrawer__bar-user">
          <img src={Guest} className="appdrawer__bar-user-img" />
          <div className="appdrawer__bar-user-name">Guest</div>
        </div>
        <div className="appdrawer__bar-power">
          <img src={Power} alt="" />
        </div>
      </div>
    </div>
  );
}
