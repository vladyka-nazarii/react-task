import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Search } from '../components/Search/Search';

describe('Search field', () => {
  it('Should be defined', () => {
    expect(<Search search={''} setSearch={() => {}} setIsPending={() => {}} />).toBeDefined();
  });

  it('Should has right placeholder', () => {
    render(<Search search={''} setSearch={() => {}} setIsPending={() => {}} />);
    expect(screen.getByPlaceholderText('Search Picture')).toBeInTheDocument();
  });
});
