import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Search } from '../components/Search/Search';
import { store } from '../redux/store';

describe('Search field', () => {
  it('Should be defined', () => {
    expect(
      <Provider store={store}>
        <Search />
      </Provider>
    ).toBeDefined();
  });

  it('Should has right placeholder', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search Picture')).toBeInTheDocument();
  });
});
