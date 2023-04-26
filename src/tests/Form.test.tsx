import React from 'react';
import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import { Form } from '../components/Form/Form';
import { initStore } from '../redux/store';

describe('Form', () => {
  it('Should alert errors with empty values', async () => {
    render(
      <Provider store={initStore()}>
        <Form />
      </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /Add User/i }));
    (await screen.findAllByText(/Required field/i)).length === 6;
  });
});
