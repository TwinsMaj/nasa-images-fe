import { HttpLink } from '@apollo/client';

export const getGraphqlLink = (): HttpLink =>
  new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL });
