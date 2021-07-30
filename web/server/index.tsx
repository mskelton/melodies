import Koa from "koa"
import serve from "koa-static"
import path from "path"
import { isProd } from "../utils/env"
import { ssr } from "./ssr"

async function main() {
  const app = new Koa()
  const port = process.env.PORT || 3000

  // In production, client files are not rendered on-demand like they are in
  // development. As such, we need to serve the static files from the `build` dir.
  if (isProd) {
    app.use(serve(path.join(__dirname, "../../build")))
  } else {
    //
  }

  app.use(ssr).listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`)
  })
}

main().catch(() => process.exit(1))
