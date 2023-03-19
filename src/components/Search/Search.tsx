import React, { Component, ChangeEvent } from 'react';

import styles from './Search.module.css';

interface SearchState {
  value: string;
}

export class Search extends Component {
  state: SearchState = {
    value: localStorage.getItem('search') || '',
  };

  componentDidMount = () => {
    const localStorageSearch = localStorage.getItem('search');
    this.setState({ value: localStorageSearch || '' });
  };

  componentWillUnmount = () => {
    localStorage.setItem('search', this.state.value);
  };

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render = () => (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.searchWindow}
        placeholder="Search Movie"
        value={this.state.value}
        onChange={this.handleInput}
      />
      <button type="submit" className={styles.searchButton}>
        <img className={styles.searchImg} src="./search.png" alt="search" />
      </button>
    </div>
  );
}
