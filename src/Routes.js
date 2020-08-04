import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import PageError from './pages/PageError';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cadastro/categoria" exact component={ CadastroCategoria } />
        <Route path="/cadastro/video" exact component={ CadastroVideo } />
        <Route component={ PageError } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;