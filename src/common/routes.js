import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

//Paths
// import paths from '../config/paths.json';

//Flat Level
import Home from './containers/Home';
//General
import NoMatch from './containers/NoMatch';

const routes = (
  <Fragment>
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          {/*//Flat Levels*/}
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  </Fragment>
);

export default routes;
