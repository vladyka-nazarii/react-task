import { cardsApi } from '../redux/query/cardsQuery';

export interface ICard {
  farm: number;
  height_m: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_m: string;
  width_m: number;
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
export interface IData {
  photos: {
    page: number;
    pages: number;
    photo: ICard[];
    total: number;
  };
  stat: 'ok' | 'fail';
}

export interface IFetchProps {
  search: string | null;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICardsProps {
  setActiveCard: React.Dispatch<React.SetStateAction<ICard | null>>;
}

export interface ICardProps extends ICardsProps {
  card: ICard;
}

export interface IModalProps extends ICardsProps {
  activeCard: ICard | null;
}

export interface ISearchState {
  search: string;
}

export interface IActiveCardState {
  activeCard: IUser | null;
}

export interface IUsersState {
  users: IUser[];
}

export interface IRootState {
  [cardsApi.reducerPath]: ReturnType<typeof cardsApi.reducer>;
  search: ISearchState;
  users: IUsersState;
}
