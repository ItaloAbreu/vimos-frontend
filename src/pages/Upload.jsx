import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import path from 'path';

import { Content, FormStyled } from './PagesStyles';

const acceptedExt = ['.mp4', '.avi', '.ogg'];

class Upload extends Component {

  submitForm = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
  
    const config = {
      method: 'post',
      body: data,
    };

    if(!acceptedExt.includes(path.extname(form.video.value))) {
      return alert('Vídeo inválido');
    };

    if(form.title.value.length <= 0) {
      return alert('Campo de Título inválido.')
    };

    if (!form.agree.checked) {
      return alert('Os termos de uso não foram aceitos.');
    };
    

    return fetch('http://localhost:9091/video/storage', config)
      .catch(err => console.error(err));
  };

  render() {
    return (
      <Content>
        <FormStyled name="uploadForm" onSubmit={this.submitForm}
        action='file/upload' method='post'
        encType="multipart/form-data">
          <section>Upload do Vídeo</section>
          <input type="file" name="video"/>
          <label className="info">Título
            <input type="text" name="title"
            placeholder="Título do vídeo."
            /></label>
          <label className="info">Descrição
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
        </FormStyled>
      </Content>
    );
  };
}

export default Upload;
