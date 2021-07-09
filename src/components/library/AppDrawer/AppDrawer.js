import React from "react";
import Power from "../../../assets/svg/power.svg";
import Github from "../../../assets/appIcon/github.svg";
import LinkedIn from "../../../assets/appIcon/linkedin.svg";
import Calculator from "../../../assets/appIcon/calc.svg";
import Calendar from "../../../assets/appIcon/calendar.svg";
import Camera from "../../../assets/appIcon/camera.svg";
import Notepad from "../../../assets/appIcon/notepad.svg";
import Ide from "../../../assets/appIcon/ide.svg";
import Chat from "../../../assets/appIcon/chat.png";
import Guest from "../../../assets/svg/guest.svg";
import "./style.scss";
function AppIcon(props) {
  if (props.link)
    return (
      <a target="__blank" href={props.link} className="appdrawer__apps-app">
        <div className="appdrawer__apps-app-icon">
          <img src={props.src} alt="" srcset="" />
        </div>
        <div className="appdrawer__apps-app-name">{props.name}</div>
      </a>
    );
  else
    return (
      <div className="appdrawer__apps-app">
        <div className="appdrawer__apps-app-icon">
          <img src={props.src} alt="" srcset="" />
        </div>
        <div className="appdrawer__apps-app-name">{props.name}</div>
      </div>
    );
}
export default function AppDrawer(props) {
  return (
    <div
      className={
        "appdrawer__container" +
        (props.close ? " appdrawer__container-close" : "")
      }
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
            <AppIcon src={Calculator} name="Calculator" />
            <AppIcon src={Calendar} name="Calendar" />
            <AppIcon src={Camera} name="Camera" />
            <AppIcon src={LinkedIn} name="Linkedin" />
            <AppIcon src={Notepad} name="Notepad" />
            <AppIcon src={Ide} name="Ide" />
            <AppIcon src={Chat} name="Chat" />
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
