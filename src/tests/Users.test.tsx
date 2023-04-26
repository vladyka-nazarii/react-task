import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Users } from '../components/Users/Users';
import { initStore } from '../redux/store';
import { addUser } from '../redux/slice/usersSlice';

describe('Users', () => {
  const store = initStore();
  const user = {
    name: 'User',
    birthday: '01.01.2023',
    gender: 'Male',
    country: 'Ukraine',
    file: 'https://live.staticflickr.com/65535/52848677829_369921a455.jpg',
  };

  store.dispatch(addUser(user));

  it('Should be defined', () => {
    expect(
      <Provider store={store}>
        <Users />
      </Provider>
    ).toBeDefined();
  });

  it('Should has birthday', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText('Birthday: 01.01.2023')).toBeTruthy();
  });
});
