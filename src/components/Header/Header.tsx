import React from 'react';
import { useLocation } from 'react-router-dom';

import { Nav } from '../Nav/Nav';

import styles from './Header.module.css';

export const Header = () => {
  const { pathname } = useLocation();
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
