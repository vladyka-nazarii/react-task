import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_KEY, API_URL, ITEMS_PER_PAGE } from '../../configAPI';
import { IData } from '../../interfaces/interfaces';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    fetchCards: builder.query<IData, string>({
      query: (search) =>
        `?method=flickr.photos.search&api_key=${API_KEY}&extras=url_m&format=json&nojsoncallback=1&per_page=${ITEMS_PER_PAGE}&privacy_filter=1&tags=${search}`,
    }),
  }),
});

export const { useFetchCardsQuery } = cardsApi;
