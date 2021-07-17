import { ApolloServer } from "apollo-server"
import { resolvers } from "./resolvers"
import { schema as typeDefs } from "./schema"

new ApolloServer({ resolvers, typeDefs })
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`))
