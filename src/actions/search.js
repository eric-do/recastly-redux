import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { createStore } from 'redux';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // Input: search query
  // Return: a function to dispatch changeVideoList

  return () => {
    searchYouTube({q}, (data) => {
      changeVideoList(data);
    });
  }

};

export default handleVideoSearch;
