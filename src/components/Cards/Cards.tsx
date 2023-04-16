import React, { memo } from 'react';

import { Card } from '../Card/Card';
import { useFetch } from '../../hooks/useFetch';
import { ICardsProps } from '../../interfaces/interfaces';

import styles from './Cards.module.css';

export const Cards = memo(({ setActiveCard }: ICardsProps) => {
  const { cards, isFetching, message } = useFetch();

  return (
    <div className={styles.wrapper} data-testid="cards">
      {isFetching ? (
        <div>
          <div className={styles.loader}>
            <div className={styles.ldsRing}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>Progressing...</p>
          </div>
        </div>
      ) : cards.length === 0 ? (
        <div className={styles.loader}>{message ? message : 'Images Not Found'}</div>
      ) : (
        cards.map((card) => <Card key={card.id} card={card} setActiveCard={setActiveCard} />)
      )}
    </div>
  );
});
