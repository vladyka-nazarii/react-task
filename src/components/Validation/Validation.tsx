import React, { memo } from 'react';

import styles from './Validation.module.css';

interface IValidationProps {
  error: string | null;
}

export const Validation = memo(({ error }: IValidationProps) => (
  <p className={styles.error} style={error ? { display: 'block' } : { display: 'none' }}>
    {error}
  </p>
));
