import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserMenu extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.username}
        </div>
        <Link to="/my-links">My links</Link>
        <br />
        <Link to="/profile-settings">Settings</Link>
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    );
  }
}
