import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Modal, Button, ButtonToolbar, Col } from 'react-bootstrap';

import apiFetcher from '../tools/apiFetcher';
import LoginForm from '../components/forms/login-form';
import UserMenu from '../components/user-menu';
import RegForm from './registration-form';

export default class HeaderPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLoginModalOpen: false,
      isRegisterModalOpen: false
    };

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    this.setState({
      isLoggedIn: Boolean(localStorage.getItem('myToken'))
    });
  }

  logout() {
    localStorage.clear();
    this.setState({
      isLoggedIn: false
    });
  }

  login(credentials) {
    apiFetcher.post('/login', credentials).then(response => {
      apiFetcher.recordCreds({ ...response.data });
      this.setState({
        isLoggedIn: true,
        isLoginModalOpen: false
      });
    });
  }

  renderLoginModal() {
    return (
      <Modal
        bsStyle="sm"
        restoreFocus={false}
        backdrop={true}
        show={this.state.isLoginModalOpen}
        onHide={() => this.setState({ isLoginModalOpen: false })}
      >
        <Modal.Header closeButton>Sign In</Modal.Header>
        <Modal.Body>
          <LoginForm onLogin={this.login} />
        </Modal.Body>
      </Modal>
    );
  }

  renderRegisterModal() {
    return (
      <Modal
        restoreFocus={false}
        backdrop={true}
        show={this.state.isRegisterModalOpen}
        onHide={() => this.setState({ isRegisterModalOpen: false })}
        dialogClassName="reg-modal"
      >
        <Modal.Header closeButton>Sign up</Modal.Header>
        <Modal.Body>
          <RegForm />
        </Modal.Body>
      </Modal>
    );
  }

  renderUserCorner() {
    return this.state.isLoggedIn
      ? <UserMenu
          username={localStorage.getItem('username')}
          onLogout={this.logout}
        />
      : <ButtonToolbar>
          <Button
            bsStyle="primary"
            onClick={() => {
              this.setState({ isLoginModalOpen: true });
            }}
          >
            Sign In
          </Button>
          <Button
            bsStyle="primary"
            onClick={() => {
              this.setState({ isRegisterModalOpen: true });
            }}
          >
            Sign up
          </Button>
        </ButtonToolbar>;
  }

  render() {
    return (
      <div>
        <Col md={12}>
          <Navbar>
            <Navbar.Text>
              <Link to="/">Homepage</Link>
            </Navbar.Text>
            <Navbar.Form pullRight>
              {this.renderUserCorner()}
            </Navbar.Form>
          </Navbar>
        </Col>
        {this.renderLoginModal()}
        {this.renderRegisterModal()}
      </div>
    );
  }
}
