import ApolloClient  from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';

import { PLATFORM_API_URL } from '../utils/enviroments';
import { StorageKey, Storage } from '../utils/storage';

// point backend graphql
const httpLink = new HttpLink({
  uri: `${PLATFORM_API_URL}/graphql`
});

// config authenticate with token
const authLink = setContext(async () => {
  const token = await Storage.get(StorageKey.AuthToken);
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

// combine authenticate and point backend graphql
const httpLinkWithAuthToken = authLink.concat(httpLink);

// initialize cache as data store
const cache = new InMemoryCache({
  addTypename: true
});

// initialize client to query graphql from ApolloClient
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([httpLinkWithAuthToken])
});

export default client;