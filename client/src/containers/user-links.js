import React, { Component } from 'react';
import apiFetcher from '../tools/apiFetcher';

import LinkList from '../components/link-list';
import LinkCreationForm from '../components/forms/link-creation-form';

export default class LinkContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkData: null
    };

    this.getUserLinks = this.getUserLinks.bind(this);
    this.createLink = this.createLink.bind(this);
  }

  getUserLinks() {
    apiFetcher
      .authenticate()
      .get('/users/current/links')
      .then(response => {
        this.setState({
          linkData: response.data
        });
      })
      .catch(error => console.log(error));
  }

  createLink(link) {
    apiFetcher
      .authenticate()
      .post(`/users/current/links`, link)
      .then(this.getUserLinks);
  }

  componentWillMount() {
    this.getUserLinks();
  }

  render() {
    return (
      <div>
        <LinkCreationForm onCreate={this.createLink} />
        <LinkList links={this.state.linkData} />
      </div>
    );
  }
}
