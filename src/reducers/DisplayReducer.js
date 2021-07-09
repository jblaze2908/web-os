const initialState = { brightness: 100 };
const BrightnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BRIGHTNESS":
      return { brightness: action.payload };

    default:
      return state;
  }
};
export default BrightnessReducer;
