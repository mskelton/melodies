import * as Koa from "koa"
import { startApolloServer } from "./startApolloServer"

async function main() {
  const app = new Koa()
  const port = process.env.PORT || 4000
  const server = await startApolloServer()

  app
    .use(server.getMiddleware())
    // .use()
    .listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`)
    })
}

main().catch(() => process.exit(1))
