import React, { Component } from 'react';
import apiFetcher from '../tools/apiFetcher';

import LinkList from '../components/link-list';

export default class LinkContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkData: null
    };
  }

  componentWillMount() {
    apiFetcher
      .get('/links')
      .then(response => {
        this.setState({
          linkData: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return <LinkList links={this.state.linkData} />;
  }
}
