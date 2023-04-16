import React from 'react';

import { Form } from '../../components/Form/Form';
import { Users } from '../../components/Users/Users';

import styles from './Forms.module.css';

export const Forms = () => (
  <div className={styles.forms}>
    <Form />
    <Users />
  </div>
);
