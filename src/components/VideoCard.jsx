import React, { Component } from 'react';
import api from '../services/api';

import './VideoCard.css';

export default class Product extends Component {
    state = {
        videoinfo: {},
    };

    async componentDidMount() {
        const response = await api.get(`/video/${this.props.videoID}`);

        this.setState({ videoinfo: response.data });
    }
    render() {
        const { videoinfo } = this.state;

        return (
            <div className="videocard">
                <img src={videoinfo.thumbnail} alt="thumbnail" />
                <h1>{videoinfo.title}</h1>
                <h6>{videoinfo.createdAt}</h6>
                <p>{videoinfo.description}</p>

                <p>
                    URL: <a href={videoinfo.url}>{videoinfo.url}</a>
                </p>
            </div>
        )
    }
}