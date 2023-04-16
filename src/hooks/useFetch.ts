import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ICard, IRootState } from '../interfaces/interfaces';
import { useFetchCardsQuery } from '../redux/query/cardsQuery';

export const useFetch = () => {
  const search = useSelector((state: IRootState) => state.search.search);
  const [cards, setCards] = useState<ICard[]>([]);
  const { data, isFetching, isSuccess, isError } = useFetchCardsQuery(search || 'picture');

  useEffect(() => {
    isSuccess && setCards(data.photos.photo);
  }, [data, isSuccess]);

  return { cards, isFetching, isError };
};
