import React, { useEffect, useMemo, useState } from 'react';

import { Card } from '../Card/Card';
import { ICard } from '../../interfaces/interfaces';

import styles from './Cards.module.css';
import { data } from '../../assets/data';

export const Cards = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => setCards(data), []);

  const cardsLayout = useMemo(
    () => cards.map((card) => <Card key={card.id} card={card} />),
    [cards]
  );

  return (
    <div className={styles.wrapper} data-testid="cards">
      {cardsLayout}
    </div>
  );
};
