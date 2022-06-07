import React, { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from '../../context/application';
import { PaginationProps } from '../../types';
import { useSearch } from '../useSearch/useSearch';

export const usePagination = (): PaginationProps => {
  const { current } = useContext(ApplicationContext);
  const { searchText, currentPage, isPagesLeft } = current;
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false);
  const { getImages } = useSearch();

  useEffect(() => {
    const isPrevDisabled = currentPage <= 1 ? true : false;
    const isNextDisabled = isPagesLeft ? false : true;

    setIsPrevBtnDisabled(isPrevDisabled);
    setIsNextBtnDisabled(isNextDisabled);
  }, [currentPage, isPagesLeft]);

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    getImages({ variables: { q: searchText, from: currentPage + 1 } });
  };

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    getImages({ variables: { q: searchText, from: currentPage - 1 } });
  };

  return {
    handleNextClick,
    handlePrevClick,
    isNextBtnDisabled,
    isPrevBtnDisabled,
  };
};
