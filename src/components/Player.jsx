import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default class PlayerApp extends Component {
  state = {
    autoPlay: true,
    controls: true,
    width: 700,
  }

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log(this)
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  
  render() {
    
    return (
      <section data-vjs-player onContextMenu={(e) => e.preventDefault()}>
        <video ref={ node => this.videoNode = node }
          className="video-js"
          src={this.props.url}
          poster={this.props.poster}
          {...this.state}
        >
        </video>
      </section>
    );
  }
};
