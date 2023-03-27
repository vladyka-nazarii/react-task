import React, { Component } from 'react';

import styles from './Validation.module.css';

interface ValidationProps {
  error: string | null;
}

export class Validation extends Component<ValidationProps> {
  render = () => {
    const error = this.props.error;

    return (
      <p className={styles.error} style={error ? { display: 'block' } : { display: 'none' }}>
        {error}
      </p>
    );
  };
}
