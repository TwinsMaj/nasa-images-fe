import React, { useContext, useEffect, useState } from 'react';
import { SearchProps } from '../../types';
import { useLazyQuery } from '@apollo/client';
import { NASA_SEARCH_QUERY } from './useSearchQuery';
import { ApplicationContext } from '../../context/application';

export const useSearch = (): SearchProps => {
  const { dispatch } = useContext(ApplicationContext);
  const [searchText, setsearchText] = useState('');
  const [getImages, { loading, data, error }] = useLazyQuery(NASA_SEARCH_QUERY);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'GET_IMAGES', payload: { ...data.search, searchText } });
    }
  }, [data]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getImages({ variables: { q: searchText, from: 1 } });
  };

  const handleSearchTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault();
    setsearchText(e.target.value);
  };

  return { handleSearchSubmit, handleSearchTextChange, getImages };
};
