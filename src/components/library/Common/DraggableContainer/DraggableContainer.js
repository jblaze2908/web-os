import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  focusApp,
  dragApp,
  exitApp,
  minimizeApp,
} from "../../../../actions/tasks";
class DraggableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePos: { x: null, y: null },
      dragging: false,
    };
    this.task =
      this.props.taskManager.currentTasks.find(
        (task) => task._id === this.props._id
      ) || {};
  }
  draggableEl;
  flag = false;
  SubContent = (props) => {
    return this.props.component(props);
  };
  componentDidMount = () => {
    document.addEventListener("click", this.checkClickOutside);
  };
  componentWillUnmount = () => {
    document.addEventListener("click", this.checkClickOutside);
  };

  componentDidUpdate = (props, state) => {
    let dragging = this.state.dragging,
      prevDragging = state.dragging;
    if (dragging && !prevDragging) {
      document.addEventListener("mousemove", (e) => {
        this.dragContainer(e);
      });
      document.addEventListener("mouseup", (e) => {
        this.endDragging(e);
      });
    } else if (!dragging && prevDragging) {
      document.removeEventListener("mousemove", (e) => {
        this.dragContainer(e);
      });
      document.removeEventListener("mouseup", (e) => {
        this.endDragging(e);
      });
    }
  };
  startDragging = (e) => {
    if (e.button !== 0) return;
    this.focus(e);
    this.setState({
      dragging: true,
      mousePos: {
        x: e.pageX,
        y: e.pageY,
      },
    });
    this.flag = true;
    e.stopPropagation();
    e.preventDefault();
  };
  endDragging = (e) => {
    this.setState({ dragging: false });

    this.flag = false;
  };
  dragContainer = (e) => {
    if (!this.state.dragging || !this.flag) return;
    const { position } = this.task;

    let diffX = this.state.mousePos.x - e.pageX;
    let diffY = this.state.mousePos.y - e.pageY;
    this.setState({
      mousePos: {
        x: e.pageX,
        y: e.pageY,
      },
    });
    this.props.dragApp({
      _id: this.props._id,
      top: position.top - diffY,
      left: position.left - diffX,
    });
    e.stopPropagation();
    e.preventDefault();
  };
  maximize = () => {
    this.setState({ maximized: true });
  };
  minimize = () => {
    this.setState({ maximized: false });
  };
  focus = (e) => {
    this.props.focusApp(this.props._id);
  };
  render() {
    const { focusedEl } = this.props.taskManager;
    const { position } = this.task;
    return (
      <div
        className="movable__container"
        style={{
          position: "absolute",
          top: this.state.maximized ? 0 : position.top,
          left: this.state.maximized ? 0 : position.left,
          zIndex: this.state.maximized || focusedEl === this.props._id ? 2 : 1,
          width: this.state.maximized ? "100%" : null,
          height: this.state.maximized ? "100%" : null,
        }}
        onClick={this.focus}
      >
        <this.SubContent
          startDragging={this.startDragging}
          maximized={this.state.maximized}
          maximize={this.maximize}
          minimize={this.minimize}
          _id={this.props._id}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taskManager: state.taskManager,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      focusApp,
      dragApp,
      exitApp,
      minimizeApp,
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DraggableContainer);
