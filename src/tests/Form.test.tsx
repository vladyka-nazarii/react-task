import React from 'react';
import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Form } from '../components/Form/Form';

describe('Form', () => {
  it('Should alert errors with empty values', () => {
    render(<Form addUser={() => {}} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getAllByText('Required field')).toHaveLength(6);
  });
});
