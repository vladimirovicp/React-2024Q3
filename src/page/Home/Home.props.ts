import { CardParams } from '../../compotents/Card/Card.props';

export type HomeProps = Record<string, never>;

export interface HomeState {
  cards: CardParams[];
  searchInput: string | null;
  isLoading: boolean;
}
