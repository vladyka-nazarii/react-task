import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Modal } from '../components/Modal/Modal';

describe('Footer', () => {
  const activeCard = {
    id: '52848677829',
    owner: '14175138@N08',
    secret: '369921a455',
    server: '65535',
    farm: 66,
    title: 'EI-IFC ITA Airways | Airbus A350-941 | Miami International Airport',
    ispublic: 1,
    isfriend: 0,
    isfamily: 0,
    url_m: 'https://live.staticflickr.com/65535/52848677829_369921a455.jpg',
    height_m: 333,
    width_m: 500,
  };

  it('Should be defined', () => {
    expect(<Modal activeCard={activeCard} setActiveCard={() => {}} />).toBeDefined();
  });

  it('Should has year', () => {
    render(<Modal activeCard={activeCard} setActiveCard={() => {}} />);
    expect(
      screen.getByText('https://live.staticflickr.com/65535/52848677829_369921a455.jpg')
    ).toBeTruthy();
  });
});
