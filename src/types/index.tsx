/* eslint-disable @typescript-eslint/indent */
import { LazyQueryHookOptions, OperationVariables } from '@apollo/client';

export type Image = {
  href: string;
  desciption: string;
  title: string;
};

export type SearchResult = {
  searchText: string;
  images: Image[];
  isPagesLeft: boolean;
  currentPage: number;
};

export type Action = {
  type: string;
  payload: Record<string, any>;
};

export type SearchProps = {
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getImages: (
    options?:
      | Partial<LazyQueryHookOptions<any, OperationVariables>>
      | undefined,
  ) => void;
};

export type PaginationProps = {
  handleNextClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handlePrevClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isNextBtnDisabled: boolean;
  isPrevBtnDisabled: boolean;
};
