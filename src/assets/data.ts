import { ICard } from '../interfaces/interface';

export const data: ICard[] = [
  {
    id: 1,
    name: 'The Shawshank Redemption',
    genre: 'Drama',
    year: 1994,
    description:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    image: './data/shawshank.jpg',
    rating: 9.3,
  },
  {
    id: 2,
    name: 'The Dark Knight',
    genre: 'Action, Crime, Drama',
    year: 2008,
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    image: './data/dark_knight.jpg',
    rating: 9,
  },
];
