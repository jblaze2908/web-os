import TasksReducer from "./TasksReducer";
import VolumeReducer from "./VolumeReducer";
import DisplayReducer from "./DisplayReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  taskManager: TasksReducer,
  volumeManager: VolumeReducer,
  displayManager: DisplayReducer,
});
const rootReducer = (state, action) => {
  return allReducers(state, action);
};
export default rootReducer;
