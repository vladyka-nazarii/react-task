import React, { useState } from 'react';

import { Search } from '../../components/Search/Search';
import { Cards } from '../../components/Cards/Cards';

import styles from './Main.module.css';

export const Main = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  return (
    <div className={styles.main}>
      <Search search={search} setSearch={setSearch} setIsPending={setIsPending} />
      <Cards search={search} isPending={isPending} setIsPending={setIsPending} />
    </div>
  );
};
