import { ApolloServer } from "apollo-server"
import { resolvers } from "./resolvers"
import { schema as typeDefs } from "./schema"

new ApolloServer({ resolvers, typeDefs })
  .listen()
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`))
