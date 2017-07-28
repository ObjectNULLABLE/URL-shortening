import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import LinkContainer from './containers/link-container';
import HomePage from './components/home-page';
import HeaderPanel from './containers/header-panel';
import EnsureLoggedInContainer from './containers/ensure-logged-in-container';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderPanel />
          <Route exact path="/" component={HomePage} />
          <Route path="/links" component={LinkContainer} />
          <Route path="/users" component={EnsureLoggedInContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
