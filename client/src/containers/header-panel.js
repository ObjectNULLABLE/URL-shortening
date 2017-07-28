import React, { Component } from 'react';
import apiFetcher from '../tools/apiFetcher';

import LoginForm from './login-form';
import UserMenu from '../components/user-menu';

export default class HeaderPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    this.setState({
      isLoggedIn: Boolean(localStorage.getItem('myToken'))
    });
  }

  logout() {
    localStorage.clear();
    this.setState({
      isLoggedIn: false
    });
  }

  login(credentials) {
    apiFetcher.post('/login', credentials).then(response => {
      localStorage.setItem('myToken', response.data.token);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('userID', response.data.userID);
      this.setState({
        isLoggedIn: true
      });
    });
  }

  renderUserCorner() {
    return this.state.isLoggedIn
      ? <UserMenu
          username={localStorage.getItem('username')}
          onLogout={this.logout}
        />
      : <LoginForm onLogin={this.login} />;
  }

  render() {
    return (
      <div>
        <div>logo</div>
        <div className="header-panel">
          {this.renderUserCorner()}
        </div>
      </div>
    );
  }
}
