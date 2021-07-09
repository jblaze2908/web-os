const initialState = 
{
    volume:100,
    muted:false
};
const VolumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VOLUME": 
      return {volume:action.payload};
    
    case "TOGGLE_MUTE": 
      return {...state,muted:true};
    
    default: 
      return state;
  }
};
export default VolumeReducer;
