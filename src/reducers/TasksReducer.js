const initialState = {
  focusedEl: "",
  currentTasks: [
    /*  {   
                _id:"",
                name:"",
                position:{
                    top:10px,
                    left:10px
                },
                maximized:true,   
            }*/
  ],
};
const TasksReducer = (state = initialState, action) => {
  let currentTasks, index, newProperties;
  switch (action.type) {
    case "LAUNCH_APP":
      currentTasks = [...state.currentTasks];
      index = currentTasks.findIndex(
        (task) => task.name === action.payload.name
      );
      if (index === -1) {
        let newTask = {
          _id: action.payload._id,
          name: action.payload.name,
          position: {
            top: 10,
            left: 10,
          },
          maximized: true,
        };
        currentTasks = [...state.currentTasks];
        currentTasks.push(newTask);
        return {
          focusedEl: action.payload._id,
          currentTasks,
        };
      } else {
        newProperties = { ...currentTasks[index] };
        newProperties.maximized = true;
        currentTasks[index] = newProperties;
        return {
          focusedEl: newProperties._id,
          currentTasks,
        };
      }

    case "FOCUS_APP":
      return { ...state, focusedEl: action.payload };

    case "DRAG_APP":
      currentTasks = [...state.currentTasks];
      index = currentTasks.findIndex((task) => task._id === action.payload._id);
      newProperties = { ...currentTasks[index] };
      newProperties.position.top = action.payload.top;
      newProperties.position.left = action.payload.left;
      currentTasks[index] = newProperties;
      return {
        ...state,
        currentTasks,
      };

    case "MINIMIZE_APP":
      currentTasks = [...state.currentTasks];
      index = currentTasks.findIndex((task) => task._id === action.payload);
      newProperties = { ...currentTasks[index] };
      newProperties.maximized = false;
      currentTasks[index] = newProperties;
      return {
        ...state,
        focusedEl:
          state.focusedEl === currentTasks[index]._id ? "" : state.focusedEl,
        currentTasks,
      };
    case "MAXIMIZE_APP":
      currentTasks = [...state.currentTasks];
      index = currentTasks.findIndex((task) => task._id === action.payload);
      newProperties = { ...currentTasks[index] };
      newProperties.maximized = true;
      currentTasks[index] = newProperties;
      return {
        focusedEl: action.payload,
        currentTasks,
      };
    case "EXIT_APP":
      currentTasks = [...state.currentTasks];
      currentTasks = currentTasks.filter((el) => el._id !== action.payload);
      return {
        focusedEl: "",
        currentTasks,
      };
    default:
      return state;
  }
};
export default TasksReducer;
