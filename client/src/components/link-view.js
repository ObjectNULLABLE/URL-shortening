import React, { Component } from 'react';
import { Panel, Col, Button, ButtonToolbar, Row } from 'react-bootstrap';

export default class LinkView extends Component {
  render() {
    const { link } = this.props;
    const { tags } = this.props.link;

    if (!link) {
      return null;
    }

    return (
      <Col md={8} mdOffset={2}>
        <Panel
          header={
            <h4>
              <b>
                {link.name}
              </b>
            </h4>
          }
        >
          <ButtonToolbar>
            {tags.map(mappingTag =>
              <Button bsSize="xsmall">
                {mappingTag}
              </Button>
            )}
          </ButtonToolbar>
          <br />
          Author: {link.authorID}
          <br />
          URL: <a href={link.url}>{link.url}</a>
        </Panel>
      </Col>
    );
  }
}
