import { Context } from "koa"
import React from "react"
import { StaticRouter } from "react-router-dom/server"
import { App, AppProps } from "../App"

export function ServerApp({ ctx, ...props }: ServerAppProps) {
  return (
    <StaticRouter location={ctx.url}>
      <App {...props} cookie={ctx.header.cookie ?? ""} />
    </StaticRouter>
  )
}

export interface ServerAppProps extends AppProps {
  ctx: Context
}
