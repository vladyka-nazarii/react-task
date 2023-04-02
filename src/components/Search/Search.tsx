import React, { ChangeEvent, useState, useEffect, useCallback, useRef } from 'react';

import styles from './Search.module.css';

export const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const search = searchRef.current;
    if (search) {
      search.value = localStorage.getItem('search') || '';
    }
    return () => localStorage.setItem('search', search?.value || '');
  }, []);

  return (
    <div className={styles.search} data-testid="search">
      <input
        type="search"
        className={styles.searchWindow}
        placeholder="Search Movie"
        ref={searchRef}
      />
      <button type="submit" className={styles.searchButton}>
        <img className={styles.searchImg} src="./search.png" alt="search" />
      </button>
    </div>
  );
};
