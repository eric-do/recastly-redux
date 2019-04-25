import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (!action) {
    throw "invalid action";
  }
  
  return action.type === 'CHANGE_VIDEO_LIST' ? action.videos : state;
};

export default videoListReducer;
