import React from 'react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { App } from '../components/App/App';

describe('App', () => {
  it('Should render not found if wrong path', () => {
    render(
      <MemoryRouter initialEntries={['/wrongPath']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Not Found');
  });
});
