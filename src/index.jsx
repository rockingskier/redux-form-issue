import { DebugPanel, DevTools, LogMonitor } from 'redux-devtools/lib/react';
import { reduxRouteComponent } from 'redux-react-router';
import { Router, Route } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import store from './store.js';

import Forms from './Forms.jsx';


const history = new BrowserHistory();

ReactDOM.render(
  <div>
    <Router history={history}>
      <Route component={reduxRouteComponent(store)}>
        <Route component={Forms} path="/forms" />
      </Route>
    </Router>
    <DebugPanel top right bottom >
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
