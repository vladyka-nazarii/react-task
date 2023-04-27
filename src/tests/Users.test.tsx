import React from 'react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Users } from '../components/Users/Users';
import { initStore } from '../redux/store';
import { addUser } from '../redux/slice/usersSlice';

describe('Users', () => {
  const store = initStore();
  const user1 = {
    name: 'User1',
    birthday: '01.01.2023',
    gender: 'Male',
    country: 'Ukraine',
    file: 'https://live.staticflickr.com/65535/52848677829_369921a455.jpg',
  };
  const user2 = {
    name: 'User2',
    birthday: '31.12.2022',
    gender: 'Female',
    country: 'Russia',
    file: 'https://live.staticflickr.com/65535/52848677829_369921a455.jpg',
  };

  store.dispatch(addUser(user1));
  store.dispatch(addUser(user2));

  it('Should be defined', () => {
    expect(
      <Provider store={store}>
        <Users />
      </Provider>
    ).toBeDefined();
  });

  it('Should render name 1', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`${user1.name}`)).toBeInTheDocument();
  });

  it('Should render name 1', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`${user2.name}`)).toBeInTheDocument();
  });

  it('Should renders the user gender', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`Gender: ${user1.gender}`)).toBeInTheDocument();
  });

  it('Should renders the user gender', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`Gender: ${user2.gender}`)).toBeInTheDocument();
  });

  it('Should renders the user birthday', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`Birthday: ${user1.birthday}`)).toBeInTheDocument();
  });

  it('Should renders the user birthday', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`Birthday: ${user2.birthday}`)).toBeInTheDocument();
  });

  it('Should renders the user country', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`Country: ${user1.country}`)).toBeInTheDocument();
  });

  it('Should renders the user country', () => {
    render(
      <Provider store={store}>
        <Users />
      </Provider>
    );
    expect(screen.getByText(`Country: ${user2.country}`)).toBeInTheDocument();
  });
});
