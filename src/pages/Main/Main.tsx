import React from 'react';

import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';

import styles from './Main.module.css';

export const Main = () => (
  <div className={styles.main}>
    <Search />
    <Cards />
  </div>
);
