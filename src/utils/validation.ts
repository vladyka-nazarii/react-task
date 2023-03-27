import { Component } from 'react';

import { IFormState } from '../interfaces/interfaces';

export const validateName = (value: string | undefined, context: Component<object, IFormState>) => {
  let error = '';

  if (!value) {
    error = 'Required field';
  } else if (value.length < 2) {
    error = 'Must contain minimum 2 characters';
  } else if (value[0] !== value[0].toUpperCase()) {
    error = 'First letter must be capitalized';
  }

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState.validation,
      name: error,
    },
  }));

  return !!error;
};

export const validateRequired = (
  value: Date | string | boolean | false | null | undefined,
  prop: string,
  context: Component<object, IFormState>
) => {
  let error = '';

  if (!value) {
    error = 'Required field';
  }

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState.validation,
      [prop]: error,
    },
  }));

  return !!error;
};

export const validateFile = (value: Blob | undefined, context: Component<object, IFormState>) => {
  let error = '';

  if (!value) {
    error = 'Required field';
  } else if (!value?.type.includes('image')) {
    error = 'Must be an image';
  }

  context.setState((prevState) => ({
    ...prevState,
    validation: {
      ...prevState.validation,
      file: error,
    },
  }));

  return !!error;
};
