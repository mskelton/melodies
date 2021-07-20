import { ApolloServer } from "apollo-server"
import { resolvers } from "./resolvers"
import { typeDefs } from "./typeDefs"

const server = new ApolloServer({ resolvers, typeDefs })
const port = process.env.PORT || 4000

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`)
})
