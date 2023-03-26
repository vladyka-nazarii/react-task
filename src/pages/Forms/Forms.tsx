import React, { Component } from 'react';

import { Form } from '../../components/Form/Form';

import styles from './Forms.module.css';

export class Forms extends Component {
  render = () => (
    <div className={styles.forms}>
      <Form />
    </div>
  );
}
