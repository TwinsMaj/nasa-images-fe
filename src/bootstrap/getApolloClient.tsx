import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { getGraphqlErrorLink } from './getGraphqlErrorLink';
import { getGraphqlLink } from './getGraphqlLink';

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([getGraphqlErrorLink(), getGraphqlLink()]),
  });
};
