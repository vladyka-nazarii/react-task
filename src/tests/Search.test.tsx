import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Search } from '../components/Search/Search';
import { initStore } from '../redux/store';

describe('Search field', () => {
  it('Should be defined', () => {
    expect(
      <Provider store={initStore()}>
        <Search />
      </Provider>
    ).toBeDefined();
  });

  it('Should has right placeholder', () => {
    render(
      <Provider store={initStore()}>
        <Search />
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search Picture')).toBeInTheDocument();
  });
});
