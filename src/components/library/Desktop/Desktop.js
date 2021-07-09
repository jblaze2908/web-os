import React from 'react';
import "./style.scss";
import Wallpaper1 from "../../../assets/wallpapers/1.jpg";
import TaskBar from './TaskBar';
export default function Desktop() {
    return (
        <div className="desktop-container" style={{ backgroundImage: `url(${Wallpaper1})` }}>
            <TaskBar />
        </div>
    )
}
