import { configureStore } from '@reduxjs/toolkit';

import { cardsApi } from './query/cardsQuery';
import { searchReducer } from './slice/searchSlice';
import { usersReducer } from './slice/usersSlice';

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    search: searchReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});
