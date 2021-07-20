import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "cross-fetch"
import { isProd } from "../utils/env"

const uri = isProd
  ? "https://melodies-api.herokuapp.com"
  : "http://localhost:4000"

/**
 * Creates a new `ApolloClient` instance for server-side rendering of the app.
 *
 * It's important to create an entirely new instance of Apollo Client for each
 * request. Otherwise, your response to a request might include sensitive cached
 * query results from a previous request.
 *
 * Check out the [Apollo Client docs](https://www.apollographql.com/docs/react/performance/server-side-rendering)
 * for more details.
 */
export const createClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ fetch, uri }),
    ssrMode: true,
  })
