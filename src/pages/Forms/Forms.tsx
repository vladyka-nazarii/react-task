import React, { Component } from 'react';

import { Cards } from '../../components/Cards/Cards';

import styles from './Forms.module.css';

export class Forms extends Component {
  render = () => (
    <div className={styles.forms}>
      <Cards />
    </div>
  );
}
