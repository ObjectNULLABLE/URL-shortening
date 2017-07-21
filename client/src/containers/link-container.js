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
    const hash = 'f9tlcdnvlx';
    apiFetcher
      .get(`/links/${hash}`)
      .then(response => {
        this.setState({
          linkData: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return <LinkView linkData={this.state.linkData} />;
  }
}
