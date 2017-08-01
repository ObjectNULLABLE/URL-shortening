import React, { Component } from 'react';
import { Form, Text } from 'react-form';
import {
  Button,
  Form as BootstrapForm,
  FormControl,
  FormGroup,
  Col,
  Glyphicon
} from 'react-bootstrap';

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
            <BootstrapForm horizontal onSubmit={submitForm}>
              <FormGroup>
                <Col md={10} mdOffset={1}>
                  <FormControl
                    componentClass={Text}
                    field="username"
                    placeholder="Username"
                    className="form-control"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={10} mdOffset={1}>
                  <FormControl
                    componentClass={Text}
                    className="form-control"
                    field="password"
                    type="password"
                    placeholder="Your password"
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={10} mdOffset={1}>
                  <Button block type="submit" bsStyle="primary">
                    Sign In <Glyphicon glyph="ok" />
                  </Button>
                </Col>
              </FormGroup>
            </BootstrapForm>
          );
        }}
      </Form>
    );
  }
}
