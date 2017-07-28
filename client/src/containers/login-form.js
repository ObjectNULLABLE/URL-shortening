import React, { Component } from 'react';
import { Form, Text } from 'react-form';

export default class LoginForm extends Component {
  render() {
    return (
      <Form
        onSubmit={this.props.onLogin}
        validate={({ username }) => {
          return {
            username: !username ? 'A name is required' : undefined
          };
        }}
      >
        {({ submitForm }) => {
          return (
            <form onSubmit={submitForm}>
              <Text field="username" placeholder="Username" />
              <Text
                field="password"
                type="password"
                placeholder="Your password"
              />
              <button type="submit">Login</button>
            </form>
          );
        }}
      </Form>
    );
  }
}
