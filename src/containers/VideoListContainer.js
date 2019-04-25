import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = state => ({
  videos: state.videoList
});

const mapDispatchToProps = dispatch => ({
  handleVideoListEntryTitleClick: (q) => dispatch(changeVideo(q))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoListContainer);