import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

export const Nav = () => (
  <nav>
    <ul className={styles.list}>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.item)} to="/">
        Main
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.item)} to="/forms">
        Forms
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.item)} to="/about">
        About
      </NavLink>
    </ul>
  </nav>
);
