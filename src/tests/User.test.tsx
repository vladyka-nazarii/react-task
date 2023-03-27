import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { User } from '../components/User/User';
import { IUser } from '../interfaces/interfaces';

describe('User component', () => {
  const user: IUser = {
    name: 'Nazar',
    birthday: new Date(),
    gender: 'Male',
    country: 'Ukraine',
    file: undefined,
  };

  it('Should render name', () => {
    render(<User user={user} />);
    expect(screen.getByText(`${user.name}`)).toBeInTheDocument();
  });

  it('Should renders the user gender', () => {
    render(<User user={user} />);
    expect(screen.getByText(`Gender: ${user.gender}`)).toBeInTheDocument();
  });

  it('Should renders the user birthday', () => {
    render(<User user={user} />);
    expect(
      screen.getByText(
        `Birthday: ${user.birthday && new Intl.DateTimeFormat().format(user.birthday)}`
      )
    ).toBeInTheDocument();
  });

  it('Should renders the user country', () => {
    render(<User user={user} />);
    expect(screen.getByText(`Country: ${user.country}`)).toBeInTheDocument();
  });
});
