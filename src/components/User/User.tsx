import React, { memo } from 'react';

import { IUser } from '../../interfaces/interfaces';

import styles from './User.module.css';

interface IUserProps {
  user: IUser;
}

export const User = memo(({ user: { name, birthday, gender, country, file } }: IUserProps) => (
  <article className={styles.wrapper}>
    <section className={styles.imgWrapper}>
      <img className={styles.img} src={file} alt={name} />
    </section>
    <section className={styles.mainInfo}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.paragraph}>Birthday: {birthday}</p>
      <p className={styles.paragraph}>Gender: {gender}</p>
      <p className={styles.paragraph}>Country: {country}</p>
    </section>
  </article>
));
