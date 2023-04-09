import React, { memo, useEffect, useState } from 'react';

import { Card } from '../Card/Card';
import { ICard, IData } from '../../interfaces/interfaces';

import styles from './Cards.module.css';

interface ICardsProps {
  search: string | null;
  isPending: boolean;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveCard: React.Dispatch<React.SetStateAction<ICard | null>>;
}

export const Cards = memo(({ search, isPending, setIsPending, setActiveCard }: ICardsProps) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const FLICKR_URL =
    'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=43de05dd9651aa75b4427038136f4a0f&extras=url_m&format=json&nojsoncallback=1&per_page=40&privacy_filter=1&tags=';

  useEffect(() => {
    if (search) {
      fetch(FLICKR_URL + search)
        .then((response) => response.json())
        .then((data: IData) => {
          setCards(data.photos.photo);
          setIsPending(false);
        });
    } else {
      setCards([]);
    }
  }, [search, setIsPending]);

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
        <div className={styles.loader}>Images Not Found</div>
      ) : (
        cards.map((card) => <Card key={card.id} card={card} setActiveCard={setActiveCard} />)
      )}
    </div>
  );
});
