import React, { useCallback, useState } from 'react';

import { Form } from '../../components/Form/Form';
import { Users } from '../../components/Users/Users';
import { IUser } from '../../interfaces/interfaces';

import styles from './Forms.module.css';

export const Forms = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUser = (user: IUser) => {
    setUsers([...users, user]);
  };

  return (
    <div className={styles.forms}>
      <Form addUser={addUser} />
      <Users users={users} />
    </div>
  );
};
