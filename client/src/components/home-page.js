import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        Hello! Welcome to my URL shortening service! I gonna be a fucking cool
        programmer :)
        <Link to="/links">My link to links page</Link>
      </div>
    );
  }
}
