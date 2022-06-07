import { Action, SearchResult } from '../types';

export default (state: SearchResult, action: Action): SearchResult => {
  switch (action.type) {
    case 'GET_IMAGES':
      return {
        ...state,
        searchText: action.payload.searchText || state.searchText,
        images: [...action.payload.images],
        isPagesLeft: action.payload.isPagesLeft,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
};
