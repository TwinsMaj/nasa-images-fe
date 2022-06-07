import React, { createContext, useReducer, Dispatch } from 'react';
import { SearchResult, Action } from '../types';
import AppReducer from './AppReducer';

interface Props {
  children: JSX.Element;
}

const initialState: SearchResult = {
  searchText: '',
  images: [],
  isPagesLeft: false,
  currentPage: 0,
};

export const ApplicationContext = createContext<{
  current: SearchResult;
  dispatch: Dispatch<Action>;
}>({
  current: initialState,
  dispatch: () => null,
});

export const ApplicationProvider: React.FC<Props> = ({ children }) => {
  const [current, dispatch] = useReducer(AppReducer, initialState);

  return (
    <ApplicationContext.Provider value={{ current, dispatch }}>
      {children}
    </ApplicationContext.Provider>
  );
};
