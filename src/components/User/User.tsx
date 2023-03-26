import React, { Component } from 'react';

import { IUser } from '../../interfaces/interfaces';

import styles from './User.module.css';

interface UserProps {
  user: IUser;
}

export class User extends Component<UserProps> {
  render = () => {
    const { name, birthday, gender, country, file } = this.props.user;
    const imgSrc = file ? URL.createObjectURL(file) : '';

    return (
      <article className={styles.wrapper}>
        <section className={styles.imgWrapper}>
          <img className={styles.img} src={imgSrc} alt={name} />
        </section>
        <section className={styles.mainInfo}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.paragraph}>
            Birthday: {birthday && new Intl.DateTimeFormat().format(birthday)}
          </p>
          <p className={styles.paragraph}>Gender: {gender}</p>
          <p className={styles.paragraph}>Country: {country}</p>
        </section>
      </article>
    );
  };
}
