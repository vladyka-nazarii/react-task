import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUser, IUsersState } from '../../interfaces/interfaces';

const initialState: IUsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
