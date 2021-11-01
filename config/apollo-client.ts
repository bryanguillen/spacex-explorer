import { ApolloClient, InMemoryCache } from '@apollo/client';

/**
 * @description Wrapper for getting an instance
 * of apollo client
 */
export default new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});
