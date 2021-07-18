import Router from "@koa/router"
import fs from "fs"
import path from "path"
import React from "react"
import { renderToString } from "react-dom/server"
import ServerApp from "./components/ServerApp"

export const router = new Router()
export const webPath = path.resolve(__dirname, "../../web")

router.get("(.*)", async (ctx) => {
  const app = renderToString(<ServerApp url={ctx.url} />)

  // Read the public HTML file from the web workspace
  const filePath = path.resolve(webPath, "public/index.html")
  const template = await fs.promises.readFile(filePath, "utf-8")

  // Insert the server rendered content into the HTML template
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${app}</div>`
  )

  ctx.body = html
})
