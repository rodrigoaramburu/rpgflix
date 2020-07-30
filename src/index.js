import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import CadastroVideo from './pages/Cadastro';
import Home from './pages/Home';

ReactDOM.render(
  <AlertProvider template={AlertTemplate}>
    <BrowserRouter>
      <Switch>

        <Route path="/" component={Home} exact />
        <Route path="/cadastro/canal" component={CadastroVideo} />
        <Route component={() => (<div>Página 404</div>)} />

      </Switch>
    </BrowserRouter>
  </AlertProvider>,
  document.getElementById('root'),
);
