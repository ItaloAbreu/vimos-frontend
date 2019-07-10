import React, { Component } from 'react';
import api from '../services/api';

import { Content } from './PagesStyles';

import VideoCard from '../components/VideoCard';

class Main extends Component {
  state = {
    videosList: []
  }

  async componentDidMount() {
    this.setState({videosList: await this.getVideosList()});
  }
  
  async getVideosList() {
    const response = await api.get('/list');

    return response.data.map(video => 
      <VideoCard key={video._id}
        videoID={video._id}
        thumbnail={video.thumbnail}
        createdAt={video.createdAt}
        title={video.title}
      />
    );
  }

  render() {
    return (
    <Content>
      {this.state.videosList}
    </Content>
  )}
}

export default Main;
