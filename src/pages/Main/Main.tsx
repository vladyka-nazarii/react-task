import React, { useState } from 'react';

import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';

import styles from './Main.module.css';
import { ICard } from '../../interfaces/interfaces';
import { Modal } from '../../components/Modal/Modal';

export const Main = () => {
  const [activeCard, setActiveCard] = useState<ICard | null>(null);

  return (
    <div className={styles.main}>
      <Search />
      <Cards setActiveCard={setActiveCard} />
      <Modal activeCard={activeCard} setActiveCard={setActiveCard} />
    </div>
  );
};
