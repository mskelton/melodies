import { ApolloProvider } from "@apollo/client"
import Router from "@koa/router"
import { App } from "@melodies/web"
import fs from "fs"
import path from "path"
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { client } from "./apollo/client"

export const router = new Router()
export const webPath = path.resolve(__dirname, "../../web")

router.get("(.*)", async (ctx) => {
  const app = renderToString(
    <StaticRouter location={ctx.url}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StaticRouter>
  )

  const filePath = path.resolve(webPath, "public/index.html")
  const template = await fs.promises.readFile(filePath, "utf-8")
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  )

  ctx.body = html
})
