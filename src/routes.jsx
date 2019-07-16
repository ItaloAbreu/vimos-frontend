/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Upload from './pages/Upload';
import License from './pages/License';
import About from './pages/About';
import PlayerPage from './pages/Player';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/upload" component={Upload} />
      <Route path="/license" component={License} />
      <Route path="/about" component={About} />
      <Route path="/player" component={PlayerPage} />
    </Switch>
  );
}

export default Routes;
