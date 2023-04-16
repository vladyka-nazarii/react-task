import React, { useMemo } from 'react';

import { IRootState } from '../../interfaces/interfaces';
import { User } from '../User/User';

import styles from './Users.module.css';
import { useSelector } from 'react-redux';

export const Users = () => {
  const users = useSelector((state: IRootState) => state.users.users);
  const usersLayout = useMemo(
    () => users.map((user, index) => <User user={user} key={index} />),
    [users]
  );

  return <div className={styles.wrapper}>{usersLayout}</div>;
};
