import React, { Component } from 'react';

import Player from '../components/Player';



import { Content } from './PagesStyles';

class PlayerPage extends Component {
  render() {
    return (
      <Content>
        <Player />
      </Content>
    );
  }
}

export default PlayerPage;
