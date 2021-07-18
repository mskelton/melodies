import { renderToStringWithData } from "@apollo/client/react/ssr"
import Router from "@koa/router"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { FilledContext } from "react-helmet-async"
import { createClient } from "./apollo/client"
import { Html } from "./components/Html"
import ServerApp from "./components/ServerApp"

export const router = new Router()

router.get("(.*)", async (ctx) => {
  const client = createClient()
  const helmetContext = {} as FilledContext
  const root = await renderToStringWithData(
    <ServerApp client={client} helmetContext={helmetContext} url={ctx.url} />
  )

  const state = client.extract()
  const html =
    "<!DOCTYPE html>" +
    renderToStaticMarkup(
      <Html helmet={helmetContext.helmet} state={state}>
        {root}
      </Html>
    )

  ctx.body = html
})
