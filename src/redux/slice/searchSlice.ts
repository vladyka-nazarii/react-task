import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISearchState } from 'interfaces/interfaces';

const initialState: ISearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { updateSearchValue } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
