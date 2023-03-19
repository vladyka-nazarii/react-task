import React, { Component } from 'react';

import { Card } from '../Card/Card';
import { ICard } from '../../interfaces/interface';

import styles from './Cards.module.css';
import { data } from '../../assets/data';

interface CardsState {
  cards: ICard[];
}

export class Cards extends Component {
  state: CardsState = {
    cards: [],
  };

  componentDidMount = () => {
    this.setState({ cards: data });
  };

  render = () => {
    const cardsLayout = this.state.cards.map((card) => <Card key={card.id} card={card} />);

    return (
      <div className={styles.wrapper} data-testid="cards">
        {cardsLayout}
      </div>
    );
  };
}
