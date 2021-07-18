import { ApolloServer } from "apollo-server-koa"
import { schema } from "./schema"

export async function startApolloServer() {
  const server = new ApolloServer({ schema })
  await server.start()

  return server
}
