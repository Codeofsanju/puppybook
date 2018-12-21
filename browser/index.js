'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import store from './store';
import {Provider} from 'react-redux';
import AllPuppiesContainer from './AllPuppiesContainer';

ReactDOM.render(
  <div className="container flexbox-container">
    <div className="jumbotron">
  <Provider store = {store}>
      <AllPuppiesContainer />
  </Provider>
    </div>
  </div>,
  document.getElementById('app')
);