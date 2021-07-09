const launchApp = (data) => {
  return {
    type: "LAUNCH_APP",
    payload: data,
  };
};
const focusApp = (data) => {
  return {
    type: "FOCUS_APP",
    payload: data,
  };
};
const dragApp = (data) => {
  return {
    type: "DRAG_APP",
    payload: data,
  };
};
const minimizeApp = (data) => {
  return {
    type: "MINIMIZE_APP",
    payload: data,
  };
};
const maximizeApp = (data) => {
  return {
    type: "MAXIMIZE_APP",
    payload: data,
  };
};
const exitApp = (data) => {
  return {
    type: "EXIT_APP",
    payload: data,
  };
};

export { launchApp, focusApp, dragApp, minimizeApp, maximizeApp, exitApp };
