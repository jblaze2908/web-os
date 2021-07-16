import React from "react";
import { useSelector } from "react-redux";
import DraggableComponent from "../../Common/DraggableContainer";
import Calculator from "../../Calculator";
import Calendar from "../../Calendar";
import Camera from "../../CameraApp";
import Notepad from "../../Notepad";
import Ide from "../../Ide";
import Browser from "../../Browser";
import Chat from "../../Chat";
import Maps from "../../Maps";
import AudioPlayer from "../../AudioPlayer";
export default function Content() {
  const currentTasks = useSelector((state) => state.taskManager.currentTasks);

  return (
    <>
      {currentTasks.find((task) => task.name === "Calculator") ? (
        <DraggableComponent
          show={
            currentTasks.find((task) => task.name === "Calculator").maximized
          }
          component={Calculator}
          _id={currentTasks.find((task) => task.name === "Calculator")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Calendar") ? (
        <DraggableComponent
          show={currentTasks.find((task) => task.name === "Calendar").maximized}
          component={Calendar}
          _id={currentTasks.find((task) => task.name === "Calendar")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Camera") ? (
        <DraggableComponent
          show={currentTasks.find((task) => task.name === "Camera").maximized}
          component={Camera}
          _id={currentTasks.find((task) => task.name === "Camera")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Notepad") ? (
        <DraggableComponent
          show={currentTasks.find((task) => task.name === "Notepad").maximized}
          component={Notepad}
          _id={currentTasks.find((task) => task.name === "Notepad")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "IDE") ? (
        <DraggableComponent
          show={currentTasks.find((task) => task.name === "IDE").maximized}
          component={Ide}
          _id={currentTasks.find((task) => task.name === "IDE")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Browser") ? (
        <DraggableComponent
          show={currentTasks.find((task) => task.name === "Browser").maximized}
          component={Browser}
          _id={currentTasks.find((task) => task.name === "Browser")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Chat") ? (
        <DraggableComponent
          show={currentTasks.find((task) => task.name === "Chat").maximized}
          component={Chat}
          _id={currentTasks.find((task) => task.name === "Chat")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Music Player") ? (
        <DraggableComponent
          show={
            currentTasks.find((task) => task.name === "Music Player").maximized
          }
          component={AudioPlayer}
          _id={currentTasks.find((task) => task.name === "Music Player")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Maps") ? (
        <DraggableComponent
          show={currentTasks.find((task) => task.name === "Maps").maximized}
          component={Maps}
          _id={currentTasks.find((task) => task.name === "Maps")._id}
        />
      ) : (
        ""
      )}
    </>
  );
}
