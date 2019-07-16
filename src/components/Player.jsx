import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import api from '../services/api';

import { ContentPlayer } from './ComponentsStyles';

class Player extends Component {
  state = {
    data: {}
  }

  async componentDidMount() {
    this.setState({ data: await this.getVideo() });
  }

  async getVideo(){
    const urlParams = new URLSearchParams(window.location.search);
    const videoID = urlParams.get('video');
    
    const response = await api.get(`/video/${videoID}`);

    response.data.createdAt = this.mountDate(response.data.createdAt)

    return response.data;
  }

  mountDate(createdAt) {
		const months = [
			'Janeiro', 'Fevereiro', 'Março', 'Abril',
			'Maio', 'Junho', 'Julho', 'Agosto',
			'Setembro', 'Outubro', 'Novembro', 'Dezembro'
		];
		let date = createdAt.slice(0, 10).split('-');
		date[1] = months[parseInt(date[1]) - 1];
		return `Upload em ${date[2]} de ${date[1]} de ${date[0]}`;
	}

  render() {
    const {url, title, description, createdAt} = this.state.data;
    return (
        <ContentPlayer>
          <ReactPlayer
            url={`http://localhost:9091${url}`}
            playing
            controls
            nodownload
          />

          <h5>{createdAt}</h5>
          <h1>{title}</h1>
          <p>{description}</p>
        </ContentPlayer>
    );
  }
}

export default Player;
