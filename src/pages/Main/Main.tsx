import React, { Component } from 'react';

import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';

import styles from './Main.module.css';

export class Main extends Component {
  render = () => (
    <div className={styles.main}>
      <Search />
      <Cards />
    </div>
  );
}
