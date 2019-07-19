import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { baseURL } from '../services/api';

import { VideoCardStyled } from './ComponentsStyles';

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

	mountDate(createdAt) {
		// createdAt tem esse formato: "2018-07-17 20:05:02.138Z"
		const currentDate = new Date();
		const months = [
			'Janeiro', 'Fevereiro', 'Março', 'Abril',
			'Maio', 'Junho', 'Julho', 'Agosto',
			'Setembro', 'Outubro', 'Novembro', 'Dezembro'
		];

		const numbers = [
			'um', 'dois', 'três', 'quatro', 'cinco',
			'seis', 'sete', 'oito', 'nove', 'dez',
			'onze', 'doze', 'treze', 'quatorze', 'quinze',
			'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte',
			'vinte e um', 'vinte e dois', 'vinte e três', 'vinte e quatro', 'vinte e cinco',
			'vinte e seis', 'vinte e sete', 'vinte e oito', 'vinte e nove', 'trinta'
		];

		const sliceDate = createdAt.slice(0, 10).split('-')
			.map(str => parseInt(str));
		const sliceTime = createdAt.slice(11, 19).split(':')
			.map(str => parseInt(str));

		const date = {
			year: sliceDate[0],
			month: sliceDate[1] - 1,
			day: sliceDate[2]
		};
		const time = {
			hour: sliceTime[0],
			minute: sliceTime[1],
			second: sliceTime[2]
		};
		
		
		if (date.year < currentDate.getFullYear()) {
			return `Em ${months[date.month]} de ${date.year}`;
		} else if (date.month < currentDate.getMonth()) {
			const monthsAgo = currentDate.getMonth() - (date.month + 1);
			return `Há ${numbers[monthsAgo]} ${monthsAgo > 0? 'meses': 'mes'}`;
		} else if (date.day < currentDate.getDate()) {
			const daysAgo = (currentDate.getDate() - date.day);
			return `Há ${numbers[daysAgo]} ${daysAgo > 0? 'dias': 'dia'}`;
		} else if (time.hour < currentDate.getHours()) {
			const hoursAgo = (currentDate.getHours() - time.hour);
			return `${hoursAgo} ${hoursAgo > 1? 'horas': 'hora'} atrás`;
		} else if (time.minute < currentDate.getMinutes()) {
			const minutesAgo = (currentDate.getMinutes() - time.minute);
			return `${minutesAgo} ${minutesAgo > 1? 'minutos': 'minuto'} atrás`;
		}  else if (time.second < currentDate.getSeconds()) {
			const secondsAgo = (currentDate.getSeconds() - time.second);
			return `${secondsAgo} ${secondsAgo > 1? 'segundos': 'segundo'} atrás`;
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
