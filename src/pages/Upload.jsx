import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import api from '../services/api';
import path from 'path';

import { Content, FormStyled, FormStyledOnLoad } from './PagesStyles';

// tipos de videos aceitos.
const acceptedExt = ['.mp4', '.avi', '.ogg'];

export default class Upload extends Component {
  constructor(){
    super()
    this.state = {
      uploadPercentage: 0,
      loadVisibility: false,
    };
  }

  resetForm = (form) => {
    form.video.value = '';
    form.title.value = '';
    form.description.value = '';
    form.agree.checked = false;
    return this.setState({loadVisibility: false});
  }

  validateForm = (form) => {
    if(!acceptedExt.includes(path.extname(form.video.value))) {
      alert('Vídeo inválido');
      return false;
    } else if(form.title.value.length <= 0) {
      alert('Campo de Título inválido.');
      return false;
    } else if (!form.agree.checked) {
      alert('Os termos de uso não foram aceitos.');
      return false;
    } else return true;
  }

  submitForm = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    const config = {
      onUploadProgress: progressEvent => {
        this.setState({
          uploadPercentage: Math.floor(progressEvent.loaded / progressEvent.total * 100), 
          loadVisibility: true,
        });
         // Apos o upload, reseta todos os parametros do fomulário.
        if (progressEvent.loaded === progressEvent.total) {
          setTimeout(() => this.resetForm(form), 2000);
        }
      }
    }

    // Caso o formulario seja invalido, não o envia ao servidor.
    if (!this.validateForm(form)) return;

    return await api.post('/video/storage', data, config)
      .catch(err => console.error(err));
  };

  render() {
    const { loadVisibility, uploadPercentage } = this.state

    return (
      <Content>
        <FormStyled name="uploadForm" onSubmit={this.submitForm}
        action='file/upload' method='post'
        encType="multipart/form-data">
          <section>Upload do Vídeo</section>
          <input type="file" name="video"/>
          <label className="info">
            Título
            <input type="text" name="title"
            placeholder="Título do vídeo."
            /></label>
          <label className="info">
            Descrição
            <textarea type="text" name="description"
            placeholder="Uma descrição legal."
            maxLength="600"
            /></label>
          <label className="agree">
            <input type="checkbox" name="agree"/>
            <p>
              Afirmo que li e concordo com
              os <NavLink to="/license" target="new">
              termos de uso</NavLink>.
            </p>
          </label>
          <button type='submit'>Enviar</button>
          <FormStyledOnLoad visible={loadVisibility}>
            <CircularProgressbar
              className="progress-container"
              value={uploadPercentage}
              text={`${uploadPercentage}%`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 0.5,
                textSize: '18px',
                textColor: '#fff',
                trailColor: '#333',
                pathColor: `rgba(172, 104, 170, ${uploadPercentage / 100})`,
                backgroundColor: '#3e98c7',
              })}
            />
          </FormStyledOnLoad>
        </FormStyled>
      </Content>
    );
  };
}
