import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { focusApp, dragApp, exitApp, minimizeApp } from "../../../../actions";
class DraggableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: { top: 16, left: 16 },
      mousePos: { x: null, y: null },
      dragging: false,
      id: "",
    };
  }
  draggableEl;
  flag = false;
  SubContent = (props) => {
    return this.props.component(props);
  };
  componentDidMount = () => {
    let id = uuidv4();
    this.setState({ id });
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
    let diffX = this.state.mousePos.x - e.pageX;
    let diffY = this.state.mousePos.y - e.pageY;
    this.setState({
      mousePos: {
        x: e.pageX,
        y: e.pageY,
      },
      position: {
        top: this.state.position.top - diffY,
        left: this.state.position.left - diffX,
      },
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
    this.props.focusApp(this.state.id);
  };
  render() {
    let task = this.props.taskManager.currentTasks.find((task) => task._id === this.state.id) || {};
    const { focusedEl } = this.props.taskManager;
    const { position } = task;
    return (
      <div
        className="movable__container"
        style={{
          position: "absolute",
          top: this.state.maximized ? 0 : position.top,
          left: this.state.maximized ? 0 : position.left,
          zIndex:
            this.state.maximized || focusedEl === this.state.id
              ? 999
              : 1,
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
      focusApp, dragApp, exitApp, minimizeApp
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(DraggableContainer);
