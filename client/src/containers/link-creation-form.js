import React, { Component } from 'react';
import { Form, Text } from 'react-form';

export default class LinkCreationForm extends Component {
  
  render() {
    return (
      <Form onSubmit={this.props.onCreate}>
        {({ submitForm }) => {
          return (
            <form onSubmit={submitForm}>
              <Text field="url" placeholder="Input link url" />
              <Text field="name" placeholder="Input link description" />
              <button type="submit">Make my link short</button>
            </form>
          );
        }}
      </Form>
    );
  }
}
