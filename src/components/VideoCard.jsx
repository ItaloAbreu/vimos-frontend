import React, { Component } from 'react';
import api from '../services/api';

import { VideoCard } from './ComponentsStyles';

export default class Product extends Component {
	state = {
		videoinfo: {},
	};

	async componentDidMount() {
		const response = await api.get(`/video/${this.props.videoID}`);
		response.data.createdAt = this.mountDate(response.data.createdAt);

		this.setState({ videoinfo: response.data });
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
		const { videoinfo } = this.state;

		return (
			<VideoCard>
				<img src={`http://localhost:9091${videoinfo.thumbnail}`} alt="thumbnail" />
				<p>{videoinfo.createdAt}</p>
				<h1>{videoinfo.title}</h1>
			</VideoCard>
		)
	}
}