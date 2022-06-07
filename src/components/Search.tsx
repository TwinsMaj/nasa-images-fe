import React, { useState } from 'react';
import { useSearch } from '../hooks/useSearch/useSearch';

export const Search = (): JSX.Element => {
  const { handleSearchTextChange, handleSearchSubmit } = useSearch();

  return (
    <div className="search_box">
      <form onSubmit={handleSearchSubmit}>
        <input type="text" onChange={handleSearchTextChange} />
      </form>
    </div>
  );
};
