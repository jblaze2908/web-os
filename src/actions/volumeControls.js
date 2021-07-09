const setVolume = (data) => {
  return {
    type: "SET_VOLUME",
    payload: data,
  };
};
const toggleMute = () => {
  return {
    type: "TOGGLE_MUTE",
  };
};
export { setVolume, toggleMute };
