import React, { Component } from 'react';

import { withRouter, WithRouterProps } from '../../utils/withRouter';
import { Nav } from '../Nav/Nav';

import styles from './Header.module.css';

class Header extends Component<WithRouterProps> {
  render = () => {
    const { pathname } = this.props.location;
    const title = pathname === '/' ? 'Main' : pathname === '/about' ? 'About' : 'Not Found';

    return (
      <header className={styles.header}>
        <h1 className={styles.title}>{title} Page </h1>
        <Nav />
      </header>
    );
  };
}

export const HeaderWithRouter = withRouter(Header);
