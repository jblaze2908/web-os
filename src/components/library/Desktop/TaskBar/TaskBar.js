import React, { useState,useEffect } from 'react';
import Logo from "../../../../assets/svg/logo.svg";
import AppDrawer from '../../AppDrawer/AppDrawer';
import LAN from "../../../../assets/svg/lan.svg"
import Volume from "../../../../assets/svg/volume.svg"
import VolumeMute from "../../../../assets/svg/volume-mute.svg"
import Brightness from "../../../../assets/svg/brightness.svg"

import "./style.scss";
const addZero=(val)=>{
    if(parseInt(val)<10)return "0"+val;
    return val;
}
export default function TaskBar() {
    const [showAppDrawer, setAppDrawerVisibility] = useState(false);
    const [animateLogo,setLogoAnimation]=useState(false);
    const [appDrawerFadeOut, closeAppDrawer] = useState(false);
  
    const hideAppDrawer = () => {
        closeAppDrawer(true);
    }
    const removeAppDrawer=()=>{
        setAppDrawerVisibility(false);
        closeAppDrawer(false);
    }
    const openAppDrawer = () => {
        setLogoAnimation(true);
        setAppDrawerVisibility(true);
    }
    return (<>
        <div className="taskbar__container">
            <div className="taskbar__left">
                <div className="taskbar__left-btns">
                    <div className={"taskbar__btn"+ ( animateLogo?" taskbar__btn-animate":"")}
                        onClick={showAppDrawer?hideAppDrawer:openAppDrawer}>
                        <img src={Logo} alt="" onAnimationEnd={()=>{setLogoAnimation(false)}}/>
                    </div>
                </div>
            </div>
            <div className="taskbar__right">
                <div className="taskbar__right-icons">
                    <div className="taskbar__right-icon">
                        <img src={LAN} alt="" />
                    </div>
                    <div className="taskbar__right-icon">
                        <img src={Volume} alt="" />
                    </div>
                    <div className="taskbar__right-icon">
                        <img src={Brightness} alt="" />
                    </div>
                    <div className="taskbar__right-dt">
                    <DateTime/>
                    </div>
                </div>
            </div>
        </div>
        {showAppDrawer ? <AppDrawer close={appDrawerFadeOut} removeAppDrawer={removeAppDrawer}/> : ""}
    </>)
}


function DateTime() {
    let interval;
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      setInterval(updateTime, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    const updateTime = () => {
      setTime(new Date());
    };
    return (
        <>
        <div className="taskbar__right-dt-time">
            {addZero(new Date(time).getHours())+
            ":"+
            addZero(new Date(time).getMinutes())}
        </div>
        <div className="taskbar__right-dt-date">
            {addZero(new Date(time).getDate() )+
          "/" +
          addZero(new Date(time).getMonth()+1) +
          "/" +
          new Date(time).getFullYear()}
        </div></>
    )
}
