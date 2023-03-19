import React, { Component } from 'react';

import { Search } from '../../components/Search/Search';

import styles from './Main.module.css';

export class Main extends Component {
  render = () => (
    <div className={styles.main}>
      <Search />
    </div>
  );
}
