import React, { Component } from 'react';
import { Form, Text } from 'react-form';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form as BootstrapForm,
  FormControl,
  FormGroup,
  Col,
  Row,
  Glyphicon
} from 'react-bootstrap';

import apiFetcher from '../tools/apiFetcher';

export default class RegForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.register = this.register.bind(this);
  }

  register(creds) {
    apiFetcher
      .post('/register', {
        username: creds.username,
        password: creds.password
      })
      .then(response => {
        apiFetcher.recordCreds({ ...response.data });
        this.setState({
          isLoggedIn: true
        });
      });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <Form
        onSubmit={this.register}
        validate={({ username, password, repeatPassword }) => {
          return {
            username: !username ? 'A name is required' : undefined,
            password:
              password !== repeatPassword
                ? 'Passwords did not match!'
                : undefined
          };
        }}
      >
        {({ submitForm }) => {
          return (
            <Row>
              <BootstrapForm horizontal onSubmit={submitForm}>
                <FormGroup>
                  <Col md={8} mdOffset={1}>
                    <FormControl
                      componentClass={Text}
                      field="username"
                      placeholder="Username"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col md={8} mdOffset={1}>
                    <FormControl
                      componentClass={Text}
                      field="password"
                      type="password"
                      placeholder="Your password"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col md={8} mdOffset={1}>
                    <FormControl
                      componentClass={Text}
                      field="repeatPassword"
                      type="password"
                      placeholder="Repeat password"
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col md={8} mdOffset={1}>
                    <Button block type="submit" bsStyle="primary">
                      Registrate <Glyphicon glyph="ok" />
                    </Button>
                  </Col>
                </FormGroup>
              </BootstrapForm>
            </Row>
          );
        }}
      </Form>
    );
  }
}
