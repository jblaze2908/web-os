const initialState = {
  volume: 100,
  muted: false,
};
const VolumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VOLUME":
      if (action.payload !== 0 && state.muted)
        return {
          volume: action.payload,
        };
      return {
        volume: action.payload,
        muted: action.payload === 0 ? true : state.muted ? false : state.muted,
      };

    case "TOGGLE_MUTE":
      if (state.volume === 0 && state.muted)
        return { volume: 10, muted: false };
      return { ...state, muted: !state.muted };

    default:
      return state;
  }
};
export default VolumeReducer;
