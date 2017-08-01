import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

export default class UserMenu extends Component {
  render() {
    return (
      <DropdownButton title={this.props.username} id="user-dropdown">
        <MenuItem href="/my-links">My links</MenuItem>
        <MenuItem href="/profile-settings">Settings</MenuItem>
        <MenuItem divider />
        <MenuItem componentClass={Button} onClick={this.props.onLogout}>
          Logout
        </MenuItem>
      </DropdownButton>
    );
  }
}
