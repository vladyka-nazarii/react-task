import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { cardsApi } from './query/cardsQuery';
import { searchReducer } from './slice/searchSlice';
import { usersReducer } from './slice/usersSlice';

const reducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  search: searchReducer,
  users: usersReducer,
});

export type ReducerType = ReturnType<typeof reducer>;

export const initStore = (preloadedState?: PreloadedState<ReducerType>) =>
  configureStore({
    preloadedState,
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
  });

export const store = initStore();
