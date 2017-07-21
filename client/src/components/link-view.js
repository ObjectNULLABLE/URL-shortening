import React, { Component } from 'react';

export default class LinkView extends Component {
  render() {
    const link = this.props.linkData;
    if (!link) {
      return null;
    }

    return (
      <div>
        <h4>{link.name}</h4>
        Author: {link.author}
        <br />
        URL: <a href={link.url}>{link.url}</a>
      </div>
    );
  }
}
