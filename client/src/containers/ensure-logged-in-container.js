import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import LinkCreationForm from '../components/link-creation-form';

export default class EnsureLoggedInContainer extends Component {
  isLoggedIn() {
    if (window.localStorage.getItem('myToken'))
      return <Route path="/links" component={LinkCreationForm} />;
    else return <Redirect to="/" />;
  }

  render() {
    return this.isLoggedIn();
  }
}
