import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Main } from '../pages/Main/Main';
import { initStore } from '../redux/store';

describe('Main Page', () => {
  it('Should be defined', () => {
    expect(
      <Provider store={initStore()}>
        <Main />
      </Provider>
    ).toBeDefined();
  });

  it('Should has search bar and cards wrapper inside', () => {
    render(
      <Provider store={initStore()}>
        <Main />
      </Provider>
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });
});
