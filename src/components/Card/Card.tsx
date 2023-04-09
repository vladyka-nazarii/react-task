import React, { memo } from 'react';

import { ICard } from '../../interfaces/interfaces';
import styles from './Card.module.css';

interface ICardProps {
  card: ICard;
}

export const Card = memo(
  ({ card: { title, height_s: height, width_s: width, url_s: url } }: ICardProps) => (
    <article className={styles.wrapper}>
      <section className={styles.imgWrapper}>
        <img className={styles.img} src={url} alt={title}></img>
      </section>
      <h3 className={styles.name}>{title ? title : <i>No Title</i>}</h3>
      <section className={styles.mainInfo}>
        <p className={styles.year}>
          <span>Size: </span>
          <strong>
            {height} x {width}
          </strong>
        </p>
      </section>
    </article>
  )
);
