import Koa from "koa"
import { startApolloServer } from "./apollo/server"
import { router } from "./router"

async function main() {
  const app = new Koa()
  const port = process.env.PORT || 4000
  const server = await startApolloServer()

  app
    .use(server.getMiddleware())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`)
    })
}

main().catch(() => process.exit(1))
