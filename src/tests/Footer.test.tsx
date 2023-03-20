import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Footer } from '../components/Footer/Footer';

describe('Footer', () => {
  it('Should be defined', () => {
    expect(<Footer />).toBeDefined();
  });

  it('Should has year', () => {
    render(<Footer />);
    expect(screen.getByText('2023')).toBeTruthy();
  });
});
