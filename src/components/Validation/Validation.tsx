import React, { memo } from 'react';
import { FieldError } from 'react-hook-form/dist/types';

import styles from './Validation.module.css';

interface IValidationProps {
  error?: FieldError;
}

export const Validation = memo(({ error }: IValidationProps) => (
  <p className={styles.error} style={error ? { display: 'block' } : { display: 'none' }}>
    {error && error.message}
  </p>
));
