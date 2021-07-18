import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  uri: "/graphql",
})
