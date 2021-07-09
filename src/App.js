import "./App.scss";
import Calculator from "./components/library/Calculator";
import Calendar from "./components/library/Calendar";
import CameraApp from "./components/library/CameraApp";
import DraggableComponent from "./components/library/Common/DraggableContainer";
import Ide from "./components/library/Ide";
import ImgViewer from "./components/library/ImgViewer";
import Notepad from "./components/library/Notepad";
import Desktop from "./components/library/Desktop";

function App() {
  return (
    <div>
      {/* <DraggableComponent component={Calculator} />
      <DraggableComponent component={CameraApp} />
      <DraggableComponent component={ImgViewer} />
      <DraggableComponent component={Notepad} />
      <DraggableComponent component={Ide} />
      <DraggableComponent component={Calendar} /> */}
      {/* <WeatherWidget /> */}
      <Desktop />
    </div>
  );
}

export default App;
