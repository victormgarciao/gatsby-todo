import { InMemoryCache, HttpLink, ApolloClient, defaultDataIdFromObject } from "apollo-boost";

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename){
      case 'Todo': return object.todoInput;
      default: return defaultDataIdFromObject(object)
    }
  }
})
const link = new HttpLink({
  uri: 'http://localhost:8000/__graphql'
})

export const apolloClient = new ApolloClient({
  cache,
  link,
})
