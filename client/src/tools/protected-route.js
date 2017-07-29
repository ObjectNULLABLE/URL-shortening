import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default class ProtectedRoute extends Component {
  render() {
    return localStorage.getItem('userID')
      ? <Route {...this.props} />
      : <Route to="/" />;
  }
}
