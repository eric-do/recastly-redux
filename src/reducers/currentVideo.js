import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // Input: initial state, action object from the changeVideo action creator
  // Return: 
  //  Initial/default state if there was no matching type (all reducers are ran, so a state must be returned)
  //  New state if there was a type match
  // Logic
  //  If the action's type is CHANGE_VIDEO, return action.video
  //  Else return state (the action type passed to the currentVideoReducer wasn't valid)
  if (!action) {
    throw "invalid action";
  }
  return action.type === 'CHANGE_VIDEO' ? action.video || null : state;
};

export default currentVideoReducer;
