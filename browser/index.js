'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import AllPuppiesContainer from './AllPuppiesContainer';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
  <Provider store = {store}>
    <Router>
      <main>
        <Switch>
          <Route exact path = "/puppies" component = {AllPuppiesContainer}/>
          <Redirect from = '/' to = '/puppies'/>
        </Switch>
      </main>
    </Router>
  </Provider>
    </div>
  </div>,
  document.getElementById('app')
);