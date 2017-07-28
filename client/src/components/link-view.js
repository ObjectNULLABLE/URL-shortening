import React, { Component } from 'react';

export default class LinkView extends Component {
  render() {
    const link = this.props.link;
    if (!link) {
      return null;
    }

    return (
      <div>
        <h4>{link.name}</h4>
        Author: {link.authorID}
        <br />
        URL: <a href={link.url}>{link.url}</a>
      </div>
    );
  }
}
