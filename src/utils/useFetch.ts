import { useEffect, useState } from 'react';

import { ICard, IFetchProps, IData } from '../interfaces/interfaces';

export const useFetch = ({ search, setIsPending }: IFetchProps) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [error, setError] = useState<string | null>(null);
  const FLICKR_URL =
    'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=43de05dd9651aa75b4427038136f4a0f&extras=url_m&format=json&nojsoncallback=1&per_page=40&privacy_filter=1&tags=';

  useEffect(() => {
    if (search) {
      fetch(FLICKR_URL + search)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error! Wrong reqest parameters!');
          }
          return response.json();
        })
        .then((data: IData) => {
          setCards(data.photos.photo);
          setIsPending(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsPending(false);
        });
    } else {
      setCards([]);
    }
  }, [search, setIsPending]);

  return { cards, error };
};
