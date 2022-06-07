import React from 'react';
import { usePagination } from '../hooks/usePagination/usePagination';

export const NavigationBtn = (): JSX.Element => {
  const {
    handlePrevClick,
    handleNextClick,
    isNextBtnDisabled,
    isPrevBtnDisabled,
  } = usePagination();

  return (
    <div className="btns">
      <button
        type="button"
        disabled={isPrevBtnDisabled}
        className="btns__navBtn"
        onClick={handlePrevClick}
      >
        {' '}
        &larr; Prev
      </button>
      <button
        type="button"
        disabled={isNextBtnDisabled}
        className="btns__navBtn"
        onClick={handleNextClick}
      >
        Next &rarr;
      </button>
    </div>
  );
};
