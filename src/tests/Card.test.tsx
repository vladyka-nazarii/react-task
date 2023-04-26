import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from '../components/Card/Card';

describe('Card', () => {
  const card = {
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
    expect(<Card key={card.id} card={card} setActiveCard={() => {}} />).toBeDefined();
  });

  it('Should has height', () => {
    render(<Card key={card.id} card={card} setActiveCard={() => {}} />);
    expect(
      screen.getByText('EI-IFC ITA Airways | Airbus A350-941 | Miami International Airport')
    ).toBeTruthy();
  });
});
