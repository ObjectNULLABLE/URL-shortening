import React, { Component } from 'react';
import { Form, Text } from 'react-form';
import apiFetcher from '../tools/apiFetcher';

export default class LinkCreationForm extends Component {
  createLink(link) {
    apiFetcher
      .authenticate(window.localStorage.getItem('myToken'))
      .post(`/users/${window.localStorage.getItem('userID')}/links`);
  }
  render() {
    return (
      <Form onSubmit={this.createLink}>
        {({ submitForm }) => {
          return (
            <form onSubmit={submitForm}>
              <Text field="link" placeholder="Input your link!" length="100" />
              <button type="submit">Make my link short</button>
            </form>
          );
        }}
      </Form>
    );
  }
}
