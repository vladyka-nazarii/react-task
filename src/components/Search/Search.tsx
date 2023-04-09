import React, { KeyboardEvent, memo, useCallback, useEffect, useRef } from 'react';

import styles from './Search.module.css';

interface ISearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Search = memo(({ search, setSearch, setIsPending }: ISearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(() => {
    const searchValue = searchRef.current?.value;
    if (searchValue && searchValue !== search) {
      setSearch(searchValue);
      setIsPending(true);
    }
    if (searchValue === '') {
      setSearch(searchValue);
    }
  }, [search, setIsPending, setSearch]);

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const clearLocalStorage = () => localStorage.removeItem('search');

  useEffect(() => {
    const search = searchRef.current;
    window.addEventListener('beforeunload', clearLocalStorage);

    if (search) {
      search.value = localStorage.getItem('search') || '';
      if (search.value) {
        handleSubmit();
      }
    }

    return () => {
      localStorage.setItem('search', search?.value || '');
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, [handleSubmit, setIsPending, setSearch]);

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
});
