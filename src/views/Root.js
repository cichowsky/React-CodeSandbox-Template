import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { routes } from 'routes';

import Home from 'views/Home';
import About from 'views/About';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.about} component={About} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
