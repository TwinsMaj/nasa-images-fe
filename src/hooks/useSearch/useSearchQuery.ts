import { gql } from '@apollo/client';

export const NASA_SEARCH_QUERY = gql`
  query NASASearchQuery($q: String!, $from: Int) {
    search(q: $q, from: $from) {
      isPagesLeft
      currentPage
      images {
        href
        title
        description
      }
    }
  }
`;
