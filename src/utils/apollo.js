import { InMemoryCache, HttpLink, ApolloClient } from "apollo-boost";

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:8000/__graphql'
})

export const apolloClient = new ApolloClient({
  cache,
  link,
})

// const data = {
//   todos: [{
//     _id: 'aa1',
//     description: 'cache test',
//     isChecked: false,
//   }],
// };

// cache.writeData({ data });

// apolloClient.onResetStore(() => cache.writeData({ data }));