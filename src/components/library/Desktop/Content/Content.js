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
export default function Content() {
  const currentTasks = useSelector((state) => state.taskManager.currentTasks);

  return (
    <>
      {currentTasks.find((task) => task.name === "Calculator") ? (
        <DraggableComponent
          component={Calculator}
          _id={currentTasks.find((task) => task.name === "Calculator")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Calendar") ? (
        <DraggableComponent
          component={Calendar}
          _id={currentTasks.find((task) => task.name === "Calendar")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Camera") ? (
        <DraggableComponent
          component={Camera}
          _id={currentTasks.find((task) => task.name === "Camera")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Notepad") ? (
        <DraggableComponent
          component={Notepad}
          _id={currentTasks.find((task) => task.name === "Notepad")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "IDE") ? (
        <DraggableComponent
          component={Ide}
          _id={currentTasks.find((task) => task.name === "IDE")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Browser") ? (
        <DraggableComponent
          component={Browser}
          _id={currentTasks.find((task) => task.name === "Browser")._id}
        />
      ) : (
        ""
      )}
      {currentTasks.find((task) => task.name === "Chat") ? (
        <DraggableComponent
          component={Chat}
          _id={currentTasks.find((task) => task.name === "Chat")._id}
        />
      ) : (
        ""
      )}
    </>
  );
}
