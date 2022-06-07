import { onError } from '@apollo/client/link/error';
import { ServerError, ServerParseError, ApolloLink } from '@apollo/client';

export const getGraphqlErrorLink = (): ApolloLink =>
  onError(({ graphQLErrors, networkError, operation, forward, ...rest }) => {
    const networkErr = networkError as ServerError | ServerParseError;

    console.error('Graphql request failed', {
      graphQLErrors,
      networkErr,
      operation,
      rest,
    });
    return forward(operation);
  });
