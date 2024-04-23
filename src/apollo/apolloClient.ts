import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
    NormalizedCacheObject,
  } from '@apollo/client';
  
  const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
  });
  
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache()
  });
  
  export default client;
  