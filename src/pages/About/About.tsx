import React, { Component } from 'react';

import styles from './About.module.css';

export class About extends Component {
  render = () => (
    <div className={styles.about}>
      <h2 className={styles.text}>About</h2>
    </div>
  );
}
