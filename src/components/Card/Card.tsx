import React, { memo } from 'react';

import { ICard } from '../../interfaces/interfaces';
import styles from './Card.module.css';

interface ICardProps {
  card: ICard;
}

export const Card = memo(
  ({ card: { name, genre, year, description, image, rating } }: ICardProps) => (
    <article className={styles.wrapper}>
      <section className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt={name}></img>
      </section>
      <h3 className={styles.name}>{name}</h3>
      <section className={styles.mainInfo}>
        <p className={styles.genre}>
          Genre: <strong>{genre}</strong>
        </p>
        <p className={styles.year}>
          Year: <strong>{year}</strong>
        </p>
        <p className={styles.year}>
          Rating: <strong>{rating}</strong>
        </p>
      </section>
      <section className={styles.description}>{description}</section>
    </article>
  )
);
