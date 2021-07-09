import React from "react";
import { useSelector } from "react-redux";
import DraggableComponent from "../../Common/DraggableContainer";
import Calculator from "../../Calculator";
import Calendar from "../../Calendar";
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
    </>
  );
}
