import Koa from "koa"
import serve from "koa-static"
import path from "path"
import { ssrMiddleware } from "./ssr"

export async function createServer() {
  return new Koa()
    .use(serve(path.join(__dirname, "../../build")))
    .use(ssrMiddleware)
}
