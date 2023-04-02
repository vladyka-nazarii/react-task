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
  file: FileList | undefined;
  agreement: boolean;
}

export interface IFormState {
  status: boolean;
  validation: IValidation;
}

export interface IValidation {
  name: string | null;
  birthday: string | null;
  gender: string | null;
  country: string | null;
  file: string | null;
  agreement: string | null;
}
