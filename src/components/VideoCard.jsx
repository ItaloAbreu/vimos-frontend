import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { baseURL } from '../services/api';

import { VideoCardStyled } from './ComponentsStyles';


const months = [
	'Janeiro', 'Fevereiro', 'Março', 'Abril',
	'Maio', 'Junho', 'Julho', 'Agosto',
	'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const numbers = [
	'um', 'dois', 'três', 'quatro', 'cinco',
	'seis', 'sete', 'oito', 'nove', 'dez',
	'onze', 'doze'
];

export default class VideoCard extends Component {
	state = {
		videoinfo: {},
	};

	async componentDidMount() {
		this.setState({ videoinfo: {
			videoID: this.props.videoID,
			thumbnail: `${baseURL}${this.props.thumbnail}`,
			createdAt: this.mountDate(this.props.createdAt),
			title: this.props.title,
			tratedTitle: this.mountTitle(this.props.title),
		}});
	}

	diffOfTimes(previousDate, currentDate, exit='days') {
		const timeDiff = Math.abs(currentDate.getTime() - previousDate.getTime());
		let diffExit;

		if (exit === 'days') {
			diffExit = Math.ceil(timeDiff / (1000 * 3600 * 24) - 1); 
		} else if (exit === 'hours') {
			diffExit = Math.floor((timeDiff % 86400000) / 3600000); 
		} else if (exit === 'minutes') {
			diffExit = Math.round(((timeDiff % 86400000) % 3600000) / 60000); 
		} else if (exit === 'seconds') {
			diffExit = Math.round((((timeDiff % 86400000) % 3600000) % 60000) / 600); 
		}
		return diffExit;
	}

	mountDate(createdAt) {
		// createdAt tem esse formato: "2018-07-17 20:05:02.138Z"
		const previousDate = new Date(createdAt);
		const currentDate = new Date();

		const diffDays = this.diffOfTimes(previousDate, currentDate);
		const diffHours = this.diffOfTimes(previousDate, currentDate, 'hours');
		const diffMinutes = this.diffOfTimes(previousDate, currentDate, 'minutes');
		const diffSeconds = this.diffOfTimes(previousDate, currentDate, 'seconds');

		if (diffDays >= 364) {
			// quando o post tem um ano ou mais
			return `Em ${months[previousDate.getMonth()]} de ${previousDate.getFullYear()}`;

		} else if (diffDays >= 30) {
			// Quando foi postado há meses.
			const monthsAgo = Math.floor(diffDays / 30) || 1;
			return `Há ${numbers[monthsAgo - 1]} ${monthsAgo > 1 ? 'meses': 'mes'}`;

		} else if (diffDays >= 7) {
			// Semanas
			const weeksAgo = Math.floor(diffDays / 7) || 1;
			const dictionaryWeek = ['uma', 'duas']
			return `Há ${weeksAgo > 2 ? numbers[weeksAgo - 1]
					: dictionaryWeek[weeksAgo - 1]} ${weeksAgo > 1 ? 'semanas': 'semana'}`;

		} else if (diffDays >= 1) {
			// Dias
			return `Há ${numbers[diffDays - 1]} ${diffDays >= 2? 'dias': 'dia'}`;

		} else if (diffHours >= 1) {
			// Horas
			return `${diffHours} ${diffHours > 1? 'horas': 'hora'} atrás`;

		} else if (diffMinutes >= 1) {
			// Minutos
			return `${diffMinutes} ${diffMinutes > 1? 'minutos': 'minuto'} atrás`;

		}  else if (diffSeconds >= 1) {
			// Segundos
			return `${diffSeconds} ${diffSeconds > 1? 'segundos': 'segundo'} atrás`;

		} else {
			return 'Agora mesmo';
		}
	}

	mountTitle(title) {
		if(title.length >= 50) title = title.slice(0, 40) + '...';
		return title;
	}

	render() {
		const { videoinfo } = this.state;

		return (
			<VideoCardStyled>
				<NavLink to={`/video/?v=${videoinfo.videoID}`}
				title={videoinfo.title}>
					<img src={videoinfo.thumbnail} alt="thumbnail" />
					<p>{videoinfo.createdAt}</p>
					<h1>{videoinfo.tratedTitle}</h1>
				</NavLink>
			</VideoCardStyled>
		);
	}
};
