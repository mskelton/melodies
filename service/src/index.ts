import Koa from "koa"
import serve from "koa-static"
import path from "path"
import { startApolloServer } from "./apollo/server"
import { router, webPath } from "./router"

async function main() {
  const app = new Koa()
  const port = process.env.PORT || 4000
  const server = await startApolloServer()

  app
    .use(serve(path.join(webPath, "build")))
    .use(server.getMiddleware())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen({ port }, () => {
      console.log(`🚀 Server ready at http://localhost:${port}`)
    })
}

main().catch(() => process.exit(1))
