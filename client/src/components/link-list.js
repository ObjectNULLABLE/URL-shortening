import React, { Component } from 'react';

import LinkView from './link-view';

export default class LinkList extends Component {
  render() {
    const { links } = this.props;
    return links
      ? <div>
          {links.map(mappingLink =>
            <LinkView key={mappingLink._id} link={mappingLink} />
          )}
        </div>
      : null;
  }
}
