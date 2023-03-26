export interface ICard {
  id: number;
  name: string;
  genre: string;
  year: number;
  description: string;
  image: string;
  rating: number;
}

export interface IUser {
  name: string | undefined;
  birthday: Date | null | undefined;
  gender: string | false | undefined;
  country: string | undefined;
  file: Blob | undefined;
}
