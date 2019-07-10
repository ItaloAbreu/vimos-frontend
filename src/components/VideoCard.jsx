import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { VideoCard } from './ComponentsStyles';

export default class Product extends Component {
	state = {
		videoinfo: {},
	};

	async componentDidMount() {
		this.setState({ videoinfo: {
			videoID: this.props.videoID,
			thumbnail: `http://localhost:9091${this.props.thumbnail}`,
			createdAt: this.mountDate(this.props.createdAt),
			title: this.props.title,
			tratedTitle: this.mountTitle(this.props.title),
		}});
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

	mountTitle(title) {
		if(title.length >= 50) title = title.slice(0, 40) + '...';
		return title;
	}

	render() {
		const { videoinfo } = this.state;

		return (
			<NavLink to={`/player/?video=${videoinfo.videoID}`} title={videoinfo.title}>
				<VideoCard>
					<img src={videoinfo.thumbnail} alt="thumbnail" />
					<p>{videoinfo.createdAt}</p>
					<h1>{videoinfo.tratedTitle}</h1>
				</VideoCard>
			</NavLink>
		)
	}
}