import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Search.module.css';
import { IRootState } from '../../interfaces/interfaces';
import { updateSearchValue } from '../../redux/slice/searchSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const search = useSelector((state: IRootState) => state.search.search);

  const handleSubmit = () => {
    dispatch(updateSearchValue(searchRef.current?.value || ''));
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    const current = searchRef.current;

    if (current) {
      current.value = search;
    }
  }, [search]);

  return (
    <div className={styles.search} data-testid="search">
      <input
        type="search"
        className={styles.searchWindow}
        placeholder="Search Picture"
        ref={searchRef}
        onKeyUp={handleEnter}
      />
      <button type="button" className={styles.searchButton} onClick={handleSubmit}>
        <img className={styles.searchImg} src="./search.png" alt="search" />
      </button>
    </div>
  );
};
