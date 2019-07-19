import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

class VideoApp extends Component {
  state = {
    responsive: true,
    controls: true,
    width: 600,
  }
  
  render() {
    return (
      <VideoPlayer
        src={this.props.url}
        poster={this.props.poster}
        {...this.state}
      />
    );
  }
}

export default VideoApp;
