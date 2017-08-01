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

export default class LinkCreationForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onCreate}>
        {({ submitForm }) => {
          return (
            <Col md={6} mdOffset={3}>
              <BootstrapForm onSubmit={submitForm}>
                <FormGroup>
                  <FormControl
                    componentClass={Text}
                    field="url"
                    placeholder="Input link url"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    componentClass={Text}
                    field="tags"
                    placeholder="Input tags of url"
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    componentClass={Text}
                    field="name"
                    placeholder="Input link description"
                  />
                </FormGroup>
                <FormGroup>
                  <Button type="submit">
                    Create short link <Glyphicon glyph="save" />
                  </Button>
                </FormGroup>
              </BootstrapForm>
            </Col>
          );
        }}
      </Form>
    );
  }
}
