import React, { memo, useMemo } from 'react';

import { IUser } from '../../interfaces/interfaces';
import { User } from '../User/User';

import styles from './Users.module.css';

interface IUsersProps {
  users: IUser[];
}

export const Users = memo(({ users }: IUsersProps) => {
  const usersLayout = useMemo(
    () => users.map((user, index) => <User user={user} key={index} />),
    [users]
  );

  return <div className={styles.wrapper}>{usersLayout}</div>;
});
