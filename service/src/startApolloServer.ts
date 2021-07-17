import { ApolloServer } from "apollo-server-koa"
import { resolvers } from "./resolvers"
import { schema as typeDefs } from "./schema"

export async function startApolloServer() {
  const server = new ApolloServer({ resolvers, typeDefs })
  await server.start()

  return server
}
