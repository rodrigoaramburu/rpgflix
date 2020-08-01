import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import CadastroVideo from './pages/Cadastro';
import Home from './pages/Home';
import Video from './pages/Video';
import ErrorPage from './pages/ErrorPage';

ReactDOM.render(
  <AlertProvider template={AlertTemplate}>
    <BrowserRouter>
      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/cadastro/canal" component={CadastroVideo} />
        <Route path="/video/:idvideo" component={Video} />
        <Route component={ErrorPage} />

      </Switch>
    </BrowserRouter>
  </AlertProvider>,
  document.getElementById('root'),
);
