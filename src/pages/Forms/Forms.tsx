import React, { Component } from 'react';

import { Form } from '../../components/Form/Form';
import { Users } from '../../components/Users/Users';
import { IUser } from '../../interfaces/interfaces';

import styles from './Forms.module.css';

interface IFormsState {
  users: IUser[];
}

export class Forms extends Component {
  state: IFormsState = {
    users: [],
  };

  addUser = (user: IUser) => {
    this.setState({ users: [...this.state.users, user] });
  };

  render = () => (
    <div className={styles.forms}>
      <Form addUser={this.addUser} />
      <Users users={this.state.users} />
    </div>
  );
}
