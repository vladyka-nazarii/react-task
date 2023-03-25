import React, { Component } from 'react';

import { withRouter, WithRouterProps } from '../../utils/withRouter';
import { Nav } from '../Nav/Nav';

import styles from './Header.module.css';

class Header extends Component<WithRouterProps> {
  render = () => {
    const { pathname } = this.props.location;
    let path = '';
    switch (pathname) {
      case '/':
        path = 'Main';
        break;
      case '/forms':
        path = 'Forms';
        break;
      case '/about':
        path = 'About';
        break;
      default:
        path = 'Not Found';
        break;
    }
    const title = path;

    return (
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <Nav />
      </header>
    );
  };
}

export const HeaderWithRouter = withRouter(Header);
