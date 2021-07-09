import TasksReducer from "./TasksReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  taskManager: TasksReducer,
});
const rootReducer = (state, action) => {
  return allReducers(state, action);
};
export default rootReducer;
