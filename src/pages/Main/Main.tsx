import React, { useState } from 'react';

import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';

import styles from './Main.module.css';
import { ICard } from 'interfaces/interfaces';
import { Modal } from '../../components/Modal/Modal';

export const Main = () => {
  const [search, setSearch] = useState<string>('picture');
  const [isPending, setIsPending] = useState<boolean>(true);
  const [activeCard, setActiveCard] = useState<ICard | null>(null);

  return (
    <div className={styles.main}>
      <Search search={search} setSearch={setSearch} setIsPending={setIsPending} />
      <Cards
        search={search}
        isPending={isPending}
        setIsPending={setIsPending}
        setActiveCard={setActiveCard}
      />
      <Modal activeCard={activeCard} setActiveCard={setActiveCard} />
    </div>
  );
};
