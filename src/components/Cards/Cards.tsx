import React, { memo } from 'react';

import { Card } from '../Card/Card';
import { ICardsProps } from '../../interfaces/interfaces';

import styles from './Cards.module.css';
import { useFetch } from '../../utils/useFetch';

export const Cards = memo(({ search, isPending, setIsPending, setActiveCard }: ICardsProps) => {
  const { cards, error } = useFetch({ search, setIsPending });

  return (
    <div className={styles.wrapper} data-testid="cards">
      {isPending ? (
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
        <div className={styles.loader}>{error ? error : 'Images Not Found'}</div>
      ) : (
        cards.map((card) => <Card key={card.id} card={card} setActiveCard={setActiveCard} />)
      )}
    </div>
  );
});
