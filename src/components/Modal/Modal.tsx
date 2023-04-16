import React, { MouseEventHandler, memo } from 'react';

import { IModalProps } from '../../interfaces/interfaces';

import styles from './Modal.module.css';

export const Modal = memo(({ activeCard, setActiveCard }: IModalProps) => {
  const handleClose: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      setActiveCard(null);
    }
  };

  if (activeCard) {
    const { title, owner, height_m: height, width_m: width, url_m: url } = activeCard;

    return (
      <div className={styles.overlay} onClick={handleClose}>
        <article className={styles.wrapper}>
          <div className={styles.closeBtn} onClick={handleClose}>
            ✖
          </div>
          <section className={styles.imgWrapper}>
            <img className={styles.img} src={url} alt={title}></img>
          </section>
          <h3 className={styles.name}>{title || 'No Title'}</h3>
          <section className={styles.mainInfo}>
            <p>
              Owner: <strong>{owner}</strong>
            </p>
            <p>
              Height: <strong>{height}</strong>
            </p>
            <p>
              Width: <strong>{width}</strong>
            </p>
            <p className={styles.url}>
              Url: <strong>{url}</strong>
            </p>
          </section>
        </article>
      </div>
    );
  } else return <></>;
});
