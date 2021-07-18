import Koa from "koa"
import serve from "koa-static"
import path from "path"
import { startApolloServer } from "../apollo/server"
import { router } from "./router"

export async function createServer() {
  const app = new Koa()
  const server = await startApolloServer()

  app
    .use(serve(path.join(__dirname, "../../web/build")))
    .use(server.getMiddleware())
    .use(router.routes())
    .use(router.allowedMethods())

  return app
}
