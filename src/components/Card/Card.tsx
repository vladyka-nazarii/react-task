import React, { memo } from 'react';

import { ICardProps } from '../../interfaces/interfaces';
import styles from './Card.module.css';

export const Card = memo(({ card, setActiveCard }: ICardProps) => {
  const { title, height_m: height, width_m: width, url_m: url } = card;

  return (
    <article className={styles.wrapper} onClick={() => setActiveCard(card)}>
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
  );
});
