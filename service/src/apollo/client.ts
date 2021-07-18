import { ApolloClient, InMemoryCache } from "@apollo/client"
import { SchemaLink } from "@apollo/client/link/schema"
import { schema } from "./schema"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema }),
  ssrMode: true,
})
