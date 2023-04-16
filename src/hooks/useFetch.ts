import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ICard, IRootState } from '../interfaces/interfaces';
import { useFetchCardsQuery } from '../redux/query/cardsQuery';

export const useFetch = () => {
  const search = useSelector((state: IRootState) => state.search.search);
  const [cards, setCards] = useState<ICard[]>([]);
  const [message, setMessage] = useState('');
  const { data, isFetching, isSuccess } = useFetchCardsQuery(search || 'picture');

  useEffect(() => {
    if (isSuccess) {
      if (data?.photos) {
        setCards(data.photos.photo);
        setMessage('');
      }
      if (data?.message) {
        setCards([]);
        setMessage(`Error! ${data.message}`);
      }
    } else {
      setCards([]);
      setMessage('Error! Wrong request parameters!');
    }
  }, [data?.message, data?.photos, isSuccess]);

  return { cards, isFetching, message };
};
