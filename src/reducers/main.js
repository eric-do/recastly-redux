import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = (state, action) => {
    // Input: state, action
    // Return: updated object with all states
    // Check to see if the inputs are valid (no null actions)
    if (!action) { throw "Invalid action"; }
    var defaultState = {
        videoList: videoListReducer(state, action),
        currentVideo: currentVideoReducer(state, action)
    };
    //debugger;
    return defaultState;
    
};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
