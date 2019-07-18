import React, { Component } from 'react';

import api, { baseURL } from '../services/api';

import Player from '../components/Player';
import { Content, VideoPageStyle } from './PagesStyles';

export default class Video extends Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    this.setState({ data: await this.getVideoInfos() });
  }

  async getVideoInfos(){
    const urlParams = new URLSearchParams(window.location.search);
    const videoID = urlParams.get('v');
    const response = await api.get(`/video/${videoID}`);

    // Monta de forma clara a da data de criação do video.
    response.data.createdAt = this.mountCreatedDate(response.data.createdAt);

    // monta a URL do video e do poster.
    response.data.url = baseURL + response.data.url;
    response.data.thumbnail = baseURL + response.data.thumbnail;

    return response.data;
  }

  mountCreatedDate(createdAt) {
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
    const {url, thumbnail, title, description, createdAt} = this.state.data;

    return (
      <Content>
        <VideoPageStyle>
          <Player url={url} poster={thumbnail} />
          <h5>{createdAt}</h5>
          <h1>{title}</h1>
          <p>{description}</p>
        </VideoPageStyle>
      </Content>
    );
  }
};
