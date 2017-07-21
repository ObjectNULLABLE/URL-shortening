import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import LinkContainer from './containers/link-container';
import HomePage from './components/home-page';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/links" component={LinkContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
