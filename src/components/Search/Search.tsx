import React, { Component, ChangeEvent } from 'react';

import styles from './Search.module.css';

interface SearchState {
  value: string;
}

export class Search extends Component {
  state: SearchState = {
    value: '',
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
        type="search"
        className={styles.searchTerm}
        placeholder="Search"
        value={this.state.value}
        onChange={this.handleInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}
