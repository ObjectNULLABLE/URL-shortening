import React, { Component } from 'react';
import apiFetcher from '../tools/apiFetcher';

import LinkView from '../components/link-view';

export default class LinkContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkData: null
    };
  }

  componentWillMount() {
    apiFetcher
      .get(`/links`)
      .then(response => {
        this.setState({
          linkData: response.data
        });
      })
      .catch(error => console.log(error));
  }

  renderLinkList() {
    if (!this.state.linkData) {
      return null;
    }
    const { linkData } = this.state;
    return linkData.map(mappingLink => <LinkView link={mappingLink} />);
  }

  render() {
    return (
      <div>
        {this.renderLinkList()}
      </div>
    );
  }
}
