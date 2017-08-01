import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomePage from './containers/home-page';
import HeaderPanel from './containers/header-panel';
import ProtectedRoute from './tools/protected-route';
import UserLinks from './containers/user-links';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderPanel />
          <Route exact path="/" component={HomePage} />
          <ProtectedRoute path="/my-links" component={UserLinks} />
        </div>
      </Router>
    );
  }
}

export default App;
